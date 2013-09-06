package org.railinc.shipping.web;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

import javax.inject.Inject;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;

import org.apache.commons.io.output.ByteArrayOutputStream;
import org.apache.pdfbox.exceptions.COSVisitorException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.edit.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.railinc.shipping.BillOfLading;
import org.railinc.shipping.Contact;
import org.railinc.shipping.Container;
import org.railinc.shipping.Shipment;
import org.railinc.shipping.Item;
import org.railinc.shipping.service.ShippingService;
import org.railinc.shipping.web.ui.ContainersView;
import org.railinc.shipping.web.ui.ItemsView;
import org.railinc.shipping.web.ui.ShipmentsView;
import org.vaadin.virkki.cdiutils.application.AbstractCdiApplication;
import org.vaadin.virkki.cdiutils.application.CdiApplicationServlet;

import com.vaadin.terminal.StreamResource;
import com.vaadin.terminal.StreamResource.StreamSource;
import com.vaadin.terminal.UserError;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Button.ClickListener;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.HorizontalSplitPanel;
import com.vaadin.ui.Label;
import com.vaadin.ui.Table;
import com.vaadin.ui.VerticalLayout;
import com.vaadin.ui.Window;
import com.vaadin.ui.themes.Runo;

/**
 * PolymitaDemo is the web app portion of the Polymita Demo. It creates the
 * servlet for the app.
 * 
 * @author rowagner
 * 
 */
public class PolymitaDemo extends AbstractCdiApplication implements ClickListener {

	@WebServlet(urlPatterns = "/*", initParams = @WebInitParam(name = "application", value = "org.railinc.shipping.web.PolymitaDemo"))
	public static class PolymitaDemoApplicationServlet extends CdiApplicationServlet {

		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;
	}

	private static final long serialVersionUID = 8436561253049378320L;

	private ShipmentsView shipmentView = new ShipmentsView(this);

	private ItemsView itemView = new ItemsView(this);

	private ContainersView containerView = new ContainersView(this);

	private Shipment selectedShipment;

	private Container selectedContainer;

	private Table bolTable = new Table();

	private Button generateBOL;

	private Button refreshBOL;

	private Button exportToPDFButton;

	private ArrayList<ArrayList<String>> bolItems;

	@Inject
	private ShippingService shippingService;

	/**
	 * Creates a new instance of the PolymitaDemo app.
	 */
	@Override
	public void init() {

		Window mainWindow = new Window("Railinc Polymita Demo");

		setTheme(Runo.THEME_NAME + "-ext");

		setMainWindow(mainWindow);

		showView(null);
	}

	/**
	 * Shows the view for the application.
	 * 
	 * @param viewName
	 */
	public void showView(String viewName) {

		VerticalLayout vl = new VerticalLayout();

		Label header = new Label("Railinc Polymita Demo");
		header.setStyleName(Runo.LABEL_H1);
		vl.addComponent(header);

		HorizontalLayout barLayout = new HorizontalLayout();

		vl.addComponent(barLayout);

		HorizontalSplitPanel hsp = new HorizontalSplitPanel();
		HorizontalSplitPanel hsp2 = new HorizontalSplitPanel();
		hsp.setHeight("700px");
		hsp2.setHeight("700px");
		hsp.setFirstComponent(shipmentView);
		hsp.setSecondComponent(hsp2);
		hsp.setSplitPosition(16);
		hsp2.setFirstComponent(containerView);
		hsp2.setSecondComponent(itemView);
		hsp2.setSplitPosition(19);
		containerView.setVisible(false);
		itemView.setVisible(false);

		vl.addComponent(hsp);

		generateBOL = new Button("Generate Bill of Lading");
		generateBOL.setStyleName("bolButton");
		generateBOL.addListener((ClickListener) this);
		vl.addComponent(generateBOL);

		refreshBOL = new Button("Refresh Bill of Lading");
		refreshBOL.setStyleName("bolButton");
		refreshBOL.addListener((ClickListener) this);
		vl.addComponent(refreshBOL);

		vl.setWidth("100%");
		vl.setHeight("100%");

		getMainWindow().removeAllComponents();
		getMainWindow().addComponent(vl);

		bolTable = new Table();
		bolTable.setCaption("Bill of Lading");
		bolTable.addContainerProperty("Item #", Integer.class, null);
		bolTable.addContainerProperty("Description", String.class, null);
		bolTable.addContainerProperty("Hazardous?", String.class, null);
		bolTable.addContainerProperty("Weight (lbs)", Integer.class, null);
		bolTable.addContainerProperty("Price $", Float.class, null);

		bolTable.setSelectable(false);
		bolTable.setWidth("600px");
		bolTable.setPageLength(10);
		getMainWindow().addComponent(bolTable);
		bolTable.setVisible(false);

		exportToPDFButton = new Button("Export to PDF");
		exportToPDFButton.addListener((ClickListener) this);
		exportToPDFButton.setVisible(false);

		getMainWindow().addComponent(exportToPDFButton);

	}

	/**
	 * Catches ClickEvents and completes different actions depending on which
	 * button was clicked.
	 */
	@Override
	public void buttonClick(ClickEvent event) {

		if (event.getButton() == shipmentView.getNewShipmentButton()) {
			exportToPDFButton.setVisible(false);
			bolTable.setVisible(false);
			if (shipmentView.getShipper().isValid() && shipmentView.getShipperLocation().isValid()
					&& shipmentView.getReceiver().isValid() && shipmentView.getReceiverLocation().isValid()) {
				Shipment ship = new Shipment();
				ship.setState("start-process");
				BillOfLading bol = ship.getBillOfLadingParent();
				// Create and set shipper
				Contact shipper = new Contact();
				shipper.setName((String) shipmentView.getShipper().getValue());
				shipper.setLocation((String) shipmentView.getShipperLocation().getValue());
				bol.setShipper(shipper);
				// Create and set receiver
				Contact receiver = new Contact();
				receiver.setName((String) shipmentView.getReceiver().getValue());
				receiver.setLocation((String) shipmentView.getReceiverLocation().getValue());
				bol.setReceiver(receiver);
				// Add shipment to list
				shipmentView.getShipments().addShipment(ship);
				shipmentView.updateShipments();
				if (shipmentView.getShipments().getShipments().size() == 1) {
					shipmentView.getShipmentsTable().setValue(shipmentView.getShipmentsTable().firstItemId());
				}
				containerView.setVisible(true);
			}
		} else if (event.getButton() == shipmentView.getRemoveShipmentButton()) {
			exportToPDFButton.setVisible(false);
			bolTable.setVisible(false);
			itemView.setVisible(false);
			containerView.setVisible(false);
			Shipment s = (Shipment) shipmentView.getShipmentsTable().getValue();
			shipmentView.getShipments().removeShipment(s);
			shipmentView.updateShipments();
		} else if (event.getButton() == containerView.getNewContainerButton()) {
			exportToPDFButton.setVisible(false);
			bolTable.setVisible(false);
			itemView.setVisible(true);
			Container c = new Container();
			c.setShipmentParent(getCurrentShipment());
			c.setState("start-process");
			containerView.setContainers(getCurrentShipment().getContainersList());
			containerView.updateContainers();
			if (containerView.getContainers().size() >= 1) {
				containerView.getContainersTable().setValue(containerView.getContainersTable().lastItemId());
			}
		} else if (event.getButton() == containerView.getRemoveContainerButton()) {
			exportToPDFButton.setVisible(false);
			bolTable.setVisible(false);
			Container c = (Container) containerView.getContainersTable().getValue();
			getCurrentShipment().getContainersList().remove(c);
			containerView.setContainers(getCurrentShipment().getContainersList());
			containerView.updateContainers();
		} else if (event.getButton() == itemView.getNewItemButton()) {
			exportToPDFButton.setVisible(false);
			bolTable.setVisible(false);
			if (itemView.getWeight().isValid() && itemView.getItemDescription().isValid()) {
				String itemWeight = (String) itemView.getWeight().getValue();
				Item i = new Item();
				i.setContainerParent(getCurrentContainer());
				i.setWeightLb(Integer.valueOf(itemWeight));
				i.setType((String) itemView.getHazardous().getValue());
				i.setDescription((String) itemView.getItemDescription().getValue());
				i.setState("start-process");
				itemView.setItems(getCurrentContainer().getItemsList());
				itemView.updateItems();
				itemView.getWeight().setComponentError(null);
				itemView.getWeight().setValidationVisible(false);
			}
		} else if (event.getButton() == itemView.getRemoveItemButton()) {
			exportToPDFButton.setVisible(false);
			bolTable.setVisible(false);
			Item i = (Item) itemView.getItemsTable().getValue();
			getCurrentContainer().getItemsList().remove(i);
			itemView.setItems(getCurrentContainer().getItemsList());
			itemView.updateItems();
		} else if (event.getButton() == getRefreshBOLButton() && getCurrentShipment() != null) {
			updateBOLInfo();
		} else if (event.getButton() == getGenerateBOLButton() && getCurrentShipment() != null) {
			shippingService.priceShipment(getCurrentShipment());
			updateBOLInfo();

		} else if (event.getButton() == getExportToPDFButton()) {
			downloadFile("BOL", "pdf", createPDF());
		}

	}

	/**
	 * Gets the currently selected shipment.
	 * 
	 * @return The currently selected shipment.
	 */
	public Shipment getCurrentShipment() {
		return selectedShipment;
	}

	/**
	 * Sets the currently selected shipment.
	 * 
	 * @param s
	 */
	public void setCurrentShipment(Shipment s) {
		selectedShipment = s;
	}

	/**
	 * Gets the currently selected container.
	 * 
	 * @return The currently selected container.
	 */
	public Container getCurrentContainer() {
		return selectedContainer;
	}

	/**
	 * Sets the currently selected container.
	 * 
	 * @param s
	 */
	public void setCurrentContainer(Container c) {
		selectedContainer = c;
	}

	/**
	 * Gets the container view which holds the table of containers for the
	 * selected shipment.
	 * 
	 * @return containerView The container view with all the containers for the
	 *         shipment.
	 */
	public ContainersView getContainerView() {
		return containerView;
	}

	/**
	 * Sets the container view which holds the table of containers for the
	 * selected shipment.
	 * 
	 * @param containerView
	 */
	public void setContainerView(ContainersView containerView) {
		this.containerView = containerView;
	}

	/**
	 * Returns the item view which holds all the items for the currently
	 * selected container.
	 * 
	 * @return itemView The view with all the items for the container.
	 */
	public ItemsView getItemView() {
		return itemView;
	}

	/**
	 * Sets the item view which will hold all the items for the container.
	 * 
	 * @param i
	 */
	public void setItemView(ItemsView i) {
		itemView = i;
	}

	/**
	 * Gets a reference to the button that kicks off the generation of BOL.
	 * 
	 * @return generateBOL The button that generates a BOL.
	 */
	public Button getGenerateBOLButton() {
		return generateBOL;
	}

	/**
	 * Gets a reference to the button that refreshes the info in the BOL.
	 * 
	 * @return refreshBOL The button that generates a BOL.
	 */
	public Button getRefreshBOLButton() {
		return refreshBOL;
	}

	/**
	 * Returns a reference to the table that holds information about the
	 * generated BOL.
	 * 
	 * @return The BOL table.
	 */
	public Table getBolTable() {
		return bolTable;
	}

	/**
	 * Returns a reference to the button used to export the BOL to PDF format.
	 * 
	 * @return The PDF creation button.
	 */
	public Button getExportToPDFButton() {
		return exportToPDFButton;
	}

	/**
	 * This method updates the items that may have been priced already and
	 * replaces table info.
	 */
	public void updateBOLInfo() {
		exportToPDFButton.setVisible(true);
		bolTable.setVisible(true);
		bolTable.removeAllItems();
		int itemNum = 0;
		bolItems = new ArrayList<ArrayList<String>>();
		for (Container c : containerView.getContainers()) {
			for (Item i : c.getItemsList()) {
				bolTable.addItem(new Object[] { new Integer(itemNum), new String(i.getDescription()),
						new String(i.getType()), new Integer(i.getWeightLb()), new Float(i.getPriceDollars()) }, i);
				ArrayList<String> info = new ArrayList<String>(5);
				info.add(Integer.toString(itemNum));
				info.add(i.getDescription());
				info.add(i.getType());
				info.add(Integer.toString(i.getWeightLb()));
				info.add(Float.toString(i.getPriceDollars()));
				bolItems.add(info);
				itemNum++;
			}
		}

		bolTable.requestRepaint();
	}

	/**
	 * Creates a PDF of the Bill of Lading info.
	 * 
	 */
	public ByteArrayOutputStream createPDF() {
		PDDocument bolPDF = null;
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		try {
			bolPDF = new PDDocument();
		} catch (IOException e1) {
			System.out.println("Failed to make bolPDF");
			e1.printStackTrace();
		}
		PDPage page = new PDPage();
		bolPDF.addPage(page);
		PDFont font = PDType1Font.HELVETICA;
		try {
			PDPageContentStream contentStream = new PDPageContentStream(bolPDF, page, true, true);

			contentStream.beginText();
			int fontSize = 16;
			final float fontHeight = font.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * fontSize;
			contentStream.appendRawCommands(fontHeight + " TL\n");
			contentStream.moveTextPositionByAmount(50, 700);
			contentStream.setFont(font, fontSize);
			contentStream.drawString("Bill of Lading");
			contentStream.setFont(font, 12);
			contentStream.appendRawCommands("T*\n");
			contentStream.drawString("Shipper: " + getCurrentShipment().getBillOfLadingParent().getShipper().getName()
					+ "\n");
			contentStream.appendRawCommands("T*\n");
			contentStream.drawString("Receiver: "
					+ getCurrentShipment().getBillOfLadingParent().getReceiver().getName() + "\n");
			contentStream.endText();

			ArrayList<String> headers = new ArrayList<String>(5);
			headers.add("Item #");
			headers.add("Description");
			headers.add("Hazardous?");
			headers.add("Weight (lbs)");
			headers.add("Price ($)");
			String[][] content = null;
			/*
			 * if (bolItems.size() < 28) { content = new
			 * String[bolItems.size()][]; content[0] = headers.toArray(new
			 * String[headers.size()]); for (int i = 0; i < bolItems.size();
			 * i++) { System.out.println("This is the value of i: " + i);
			 * ArrayList<String> row = bolItems.get(i); content[i + 1] =
			 * row.toArray(new String[row.size()]); }
			 * 
			 * } else { content = new String[28][]; content[0] =
			 * headers.toArray(new String[headers.size()]); for (int i = 0; i <
			 * 27; i++) { ArrayList<String> row = bolItems.get(i); content[i +
			 * 1] = row.toArray(new String[row.size()]); } }
			 */
			// drawTable(page, contentStream, 650, 50, content);
			// contentStream.close();
			boolean firstTime = true;
			ArrayList<ArrayList<String>> currentItems = new ArrayList<ArrayList<String>>();
			currentItems.add(headers);
			for (int i = 0; i < bolItems.size(); i++) {
				currentItems.add(bolItems.get(i));
				if (currentItems.size() == 28 || i == bolItems.size() - 1) {
					content = new String[currentItems.size()][];
					for (int k = 0; k < currentItems.size(); k++) {
						ArrayList<String> row = currentItems.get(k);
						content[k] = row.toArray(new String[row.size()]);
					}
					if (firstTime) {
						drawTable(page, contentStream, 650, 50, content);
						contentStream.close();
						currentItems = new ArrayList<ArrayList<String>>();
						currentItems.add(headers);
						firstTime = false;

					} else {
						PDPage page2 = new PDPage();
						bolPDF.addPage(page2);
						PDPageContentStream contentStream2 = new PDPageContentStream(bolPDF, page2, true, true);
						drawTable(page, contentStream2, 650, 50, content);
						contentStream2.close();
						currentItems = new ArrayList<ArrayList<String>>();
						currentItems.add(headers);
					}
				}
			}

		} catch (IOException e) {
			System.out.println("Failed to open content stream");
			e.printStackTrace();
		}

		try {
			System.out.println("Saving PDF");
			bolPDF.save(output);
			System.out.println("Closing PDF");
			bolPDF.close();
		} catch (COSVisitorException e) {
			System.out.println("COS Error Save");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("IO Error Save");
			e.printStackTrace();
		}
		return output;
	}

	/**
	 * This method creates a stream and downloads a PDF.
	 * 
	 * @param name
	 * @param type
	 * @param output
	 */
	public void downloadFile(String name, String type, final ByteArrayOutputStream output) {
		StreamSource streamSource = new StreamSource() {
			/**
			 * 
			 */
			private static final long serialVersionUID = 1L;

			public InputStream getStream() {
				if (output != null) {
					byte[] byteArray = output.toByteArray();
					return new ByteArrayInputStream(byteArray);
				}
				return null;
			}
		};
		StreamResource streamResource = new StreamResource(streamSource, name + "." + type, this);
		streamResource.setCacheTime(5000); // no cache (<=0) does not work with
											// IE8
		streamResource.setMIMEType("application/pdf");
		this.getMainWindow().open(streamResource, "_top");
	}

	/**
	 * This method draws the tables for the BOL PDF. It creates a 5 column table
	 * with item number, description, hazard status, weight, and the calculated
	 * shipping price for each item. The shipper and receiver are also noted
	 * above the table.
	 * 
	 * @param page
	 * @param contentStream
	 * @param y
	 *            the y-coordinate of the first row
	 * @param margin
	 *            the padding on left and right of table
	 * @param content
	 *            a 2d array containing the table data
	 * @throws IOException
	 */
	public static void drawTable(PDPage page, PDPageContentStream contentStream, float y, float margin,
			String[][] content) throws IOException {
		final int rows = content.length;
		final int cols = content[0].length;
		final float rowHeight = 22f;
		final float tableWidth = page.findMediaBox().getWidth() - margin - margin;
		final float tableHeight = rowHeight * rows;
		final float colWidth = tableWidth / (float) cols;
		final float cellMargin = 5f;

		// draw the rows
		float nexty = y;
		for (int i = 0; i <= rows; i++) {
			contentStream.drawLine(margin, nexty, margin + tableWidth, nexty);
			nexty -= rowHeight;
		}

		// draw the columns
		float nextx = margin;
		for (int i = 0; i <= cols; i++) {
			contentStream.drawLine(nextx, y, nextx, y - tableHeight);
			nextx += colWidth;
		}

		// now add the text
		contentStream.setFont(PDType1Font.HELVETICA, 12);

		float textx = margin + cellMargin;
		float texty = y - 15;
		for (int i = 0; i < content.length; i++) {
			for (int j = 0; j < content[i].length; j++) {
				String text = content[i][j];
				contentStream.beginText();
				contentStream.moveTextPositionByAmount(textx, texty);
				contentStream.drawString(text);
				contentStream.endText();
				textx += colWidth;
			}
			texty -= rowHeight;
			textx = margin + cellMargin;
		}
	}
}
