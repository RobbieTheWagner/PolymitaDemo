package org.railinc.shipping.web.ui;

import org.railinc.shipping.Shipment;
import org.railinc.shipping.model.ShipmentList;
import org.railinc.shipping.web.PolymitaDemo;

import com.vaadin.data.Property;
import com.vaadin.data.Property.ValueChangeEvent;
import com.vaadin.event.ShortcutAction.KeyCode;
import com.vaadin.ui.Button;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Label;
import com.vaadin.ui.Panel;
import com.vaadin.ui.Table;
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
	private String buttonWidth = "175px";
	private ShipmentList shipmentList;
	private VerticalLayout vl;
	private Table table;
	private Shipment currentShipment;
	private int shipmentNum = 0;

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
				 * If there are containers assigned to the shipment, select the
				 * first one when you switch shipments.
				 */
				if (!getCurrentShipment().getContainersList().isEmpty()) {
					app.getContainerView().getContainersTable()
							.select(app.getContainerView().getContainersTable().firstItemId());
				}
			}
		});

		vl.addComponent(table);

		HorizontalLayout hl = new HorizontalLayout();

		hl.setSpacing(true);

		newShipmentButton = new Button("Add New Shipment");
		newShipmentButton.addListener((ClickListener) app);
		newShipmentButton.setClickShortcut(KeyCode.ENTER);
		newShipmentButton.setWidth(buttonWidth);
		hl.addComponent(newShipmentButton);

		vl.addComponent(hl);

		vl.setSizeFull();

		vl.setSpacing(true);

		addComponent(vl);

		setSizeFull();

		setHeight("100%");

	}

	public Button getNewShipmentButton() {
		return newShipmentButton;
	}

	public ShipmentList getShipments() {
		return shipmentList;
	}

	public void updateShipments(Shipment newShipment) {
		table.addItem(new Object[] { new Integer(shipmentNum) }, newShipment);
		shipmentNum++;
		vl.requestRepaint();
	}

	public Shipment getCurrentShipment() {
		return currentShipment;
	}

	public void setCurrentShipment(Shipment currentShipment) {
		this.currentShipment = currentShipment;
	}

	public Table getShipmentsTable() {
		return table;
	}

}
