package org.railroad.shipping.model;

import java.util.LinkedHashSet;
import java.util.Set;

import org.railroad.shipping.Shipment;

public class ShipmentList {
	private Set<Shipment> shipmentList;

	/**
	 * Creates a new ShipmentList.
	 */
	public ShipmentList() {
		shipmentList = new LinkedHashSet<Shipment>();
	}

	/**
	 * Adds a shipment to the list of shipments
	 * 
	 * @param s
	 *            The shipment to add.
	 */
	public void addShipment(Shipment s) {
		shipmentList.add(s);
	}

	/**
	 * Removes a shipment from the list of shipments.
	 * 
	 * @param s
	 *            The shipment to remove.
	 */
	public void removeShipment(Shipment s) {
		shipmentList.remove(s);
	}

	/**
	 * Gets the list of shipments.
	 * 
	 * @return shipmentList The list of shipments.
	 */
	public Set<Shipment> getShipments() {
		return shipmentList;
	}

}
