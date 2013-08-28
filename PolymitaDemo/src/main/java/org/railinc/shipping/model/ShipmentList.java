package org.railinc.shipping.model;

import java.util.HashSet;
import java.util.Set;

import org.railinc.shipping.Shipment;

public class ShipmentList {
	private Set<Shipment> shipmentList;

	/**
	 * Creates a new ShipmentList.
	 */
	public ShipmentList() {
		shipmentList = new HashSet<Shipment>();
	}

	/**
	 * Adds a shipment to the list of shipments
	 * 
	 * @param e
	 *            The shipment to add.
	 */
	public void addShipment(Shipment e) {
		shipmentList.add(e);
	}
	
	public Set<Shipment> getShipments()
	{
		return shipmentList;
	}

}
