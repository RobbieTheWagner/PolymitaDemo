package org.railinc.shipping.web.ui;

import org.railinc.shipping.Shipment;
import org.railinc.shipping.model.ShipmentList;
import org.railinc.shipping.web.PolymitaDemo;

import com.vaadin.data.Property;
import com.vaadin.data.Property.ValueChangeEvent;
import com.vaadin.ui.Button;
import com.vaadin.ui.Label;
import com.vaadin.ui.Panel;
import com.vaadin.ui.Table;
import com.vaadin.ui.TextField;
import com.vaadin.ui.VerticalLayout;
import com.vaadin.ui.Button.ClickListener;
import com.vaadin.ui.themes.Runo;

/**
 * This class provides all functionality for adding new shipments and displaying
 * them in a table.
 * 
 * @author rowagner
 * 
 */
public class ShipmentsView extends Panel {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Button newShipmentButton;
	private Button removeShipmentButton;
	private TextField shipper;
	private TextField shipperLocation;
	private TextField receiver;
	private TextField receiverLocation;
	private String buttonWidth = "175px";
	private ShipmentList shipmentList;
	private VerticalLayout vl;
	private Table table;
	private Shipment currentShipment;

	/**
	 * Creates a new ShipmentsView object.
	 * 
	 * @param app
	 *            The PolymitaDemo app that the view will be added to.
	 */
	public ShipmentsView(final PolymitaDemo app) {

		vl = new VerticalLayout();

		Label shipmentsHeader = new Label("Shipments Info:");

		shipmentsHeader.setStyleName(Runo.LABEL_H1);

		vl.addComponent(shipmentsHeader);

		table = new Table();
		table.addContainerProperty("Shipment #", Integer.class, null);

		shipmentList = new ShipmentList();

		table.setPageLength(8);
		table.setSelectable(true);
		table.setImmediate(true);
		table.setNullSelectionAllowed(false);
		table.setWidth("175px");

		table.addListener(new Property.ValueChangeListener() {

			/**
			 * 
			 */
			private static final long serialVersionUID = 1L;

			@Override
			public void valueChange(ValueChangeEvent event) {
				if (table.size() > 0) {
					setCurrentShipment((Shipment) table.getValue());
					app.setCurrentShipment(getCurrentShipment());

					if (getCurrentShipment().getContainersList().isEmpty()) {
						app.getItemView().setVisible(false);
					} else {
						app.getItemView().setVisible(true);
					}
					app.getContainerView().setContainers(getCurrentShipment().getContainersList());
					app.getContainerView().updateContainers();
					/**
					 * If there are containers assigned to the shipment, select
					 * the first one when you switch shipments.
					 */
					if (!getCurrentShipment().getContainersList().isEmpty()) {
						app.getContainerView().getContainersTable().select(
								app.getContainerView().getContainersTable().firstItemId());
					}
				}
			}
		});

		vl.addComponent(table);

		shipper = new TextField("Shipper");
		shipper.setRequired(true);
		shipper.setRequiredError("Shipper must not be blank");
		shipper.setWidth(buttonWidth);
		vl.addComponent(shipper);

		shipperLocation = new TextField("Shipper Location");
		shipperLocation.setRequired(true);
		shipperLocation.setRequiredError("Shipper location must not be blank");
		shipperLocation.setWidth(buttonWidth);
		vl.addComponent(shipperLocation);

		receiver = new TextField("Receiver");
		receiver.setRequired(true);
		receiver.setRequiredError("Receiver must not be blank");
		receiver.setWidth(buttonWidth);
		vl.addComponent(receiver);

		receiverLocation = new TextField("Receiver Location");
		receiverLocation.setRequired(true);
		receiverLocation.setRequiredError("Receiver location must not be blank");
		receiverLocation.setWidth(buttonWidth);
		vl.addComponent(receiverLocation);

		newShipmentButton = new Button("Add New Shipment");
		newShipmentButton.addListener((ClickListener) app);
		newShipmentButton.setWidth(buttonWidth);
		vl.addComponent(newShipmentButton);

		removeShipmentButton = new Button("Remove Shipment");
		removeShipmentButton.addListener((ClickListener) app);
		removeShipmentButton.setWidth(buttonWidth);
		vl.addComponent(removeShipmentButton);

		vl.setSizeFull();

		vl.setSpacing(true);

		addComponent(vl);

		setSizeFull();

		setHeight("100%");

	}

	/**
	 * Returns a reference to the button used to create a new Shipment object.
	 * 
	 * @return newShipmentButton The button that creates shipments.
	 */
	public Button getNewShipmentButton() {
		return newShipmentButton;
	}

	/**
	 * Returns a reference to the button used to remove a Shipment from the
	 * list.
	 * 
	 * @return removeShipmentButton The button that removes shipments.
	 */
	public Button getRemoveShipmentButton() {
		return removeShipmentButton;
	}

	/**
	 * Gets the current shipments that have been created.
	 * 
	 * @return shipmentList The list of all created shipments.
	 */
	public ShipmentList getShipments() {
		return shipmentList;
	}

	/**
	 * Updates the shipments that have been created and displays them in the
	 * table.
	 */
	public void updateShipments() {
		table.removeAllItems();
		int shipmentNum = 0;
		for (Shipment s : shipmentList.getShipments()) {
			table.addItem(new Object[] { new Integer(shipmentNum) }, s);
			shipmentNum++;
		}
		vl.requestRepaint();
	}

	/**
	 * Gets the currently selected shipment.
	 * 
	 * @return currentShipment The shipment that is currently selected.
	 */
	public Shipment getCurrentShipment() {
		return currentShipment;
	}

	/**
	 * Sets the currently selected shipment.
	 * 
	 * @param currentShipment
	 *            The shipment that is to be selected.
	 */
	public void setCurrentShipment(Shipment currentShipment) {
		this.currentShipment = currentShipment;
	}

	/**
	 * Gets the table of shipments.
	 * 
	 * @return table The table object that holds the shipments.
	 */
	public Table getShipmentsTable() {
		return table;
	}

	/**
	 * Gets the TextField that holds the name of the shipper.
	 * 
	 * @return shipper The TextField holding shipper.
	 */
	public TextField getShipper() {
		return shipper;
	}

	/**
	 * Gets the TextField that holds the shipper location.
	 * 
	 * @return shipperLocation The Textfield holding shipper location.
	 */
	public TextField getShipperLocation() {
		return shipperLocation;
	}

	/**
	 * Gets the TextField that holds the receiver name.
	 * 
	 * @return receiver The Textfield holding the receiver name.
	 */
	public TextField getReceiver() {
		return receiver;
	}

	/**
	 * Gets the TextField that holds the receiver location.
	 * 
	 * @return receiverLocation The Textfield holding receiver location.
	 */
	public TextField getReceiverLocation() {
		return receiverLocation;
	}

}
