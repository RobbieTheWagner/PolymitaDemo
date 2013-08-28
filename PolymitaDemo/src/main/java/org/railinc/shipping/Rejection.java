package org.railinc.shipping;

import java.io.Serializable;

public class Rejection implements Serializable { 
	private static final long serialVersionUID = 1L;
	private String reason;
	  // "item too heavy"
	  // "item too hazardous"
	  // "container too heavy"
	  // "shipment required air conditioned car"
  
	private BillOfLading billOfLadingParent;
	private Shipment shipmentParent;
	private Container containerParent;  
	private Item itemParent;
	private Contact contactParent;
	
	public Rejection( Item iP, String r) {
		this.itemParent=iP;
		this.reason=r;
	}
	
	public Rejection( Container cP, String r) {
		this.containerParent=cP;
		this.reason=r;
	}
	
	public Rejection( Shipment sP, String r) {
		this.shipmentParent=sP;
		this.reason=r;
	}
	
	public Rejection( BillOfLading bP, String r) {
		this.billOfLadingParent=bP;
		this.reason=r;
	}
	
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public BillOfLading getBillOfLadingParent() {
		return billOfLadingParent;
	}
	public void setBillOfLadingParent(BillOfLading billOfLadingParent) {
		this.billOfLadingParent = billOfLadingParent;
	}
	public Shipment getShipmentParent() {
		return shipmentParent;
	}
	public void setShipmentParent(Shipment shipmentParent) {
		this.shipmentParent = shipmentParent;
	}
	public Container getContainerParent() {
		return containerParent;
	}
	public void setContainerParent(Container containerParent) {
		this.containerParent = containerParent;
	}
	public Item getItemParent() {
		return itemParent;
	}
	public void setItemParent(Item itemParent) {
		this.itemParent = itemParent;
	}
	public Contact getContactParent() {
		return contactParent;
	}
	public void setContactParent(Contact contactParent) {
		this.contactParent = contactParent;
	}
  

}
