package org.railroad.shipping;
import java.io.Serializable;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class Container implements Serializable {
	private static final long serialVersionUID = 3L;
	private Shipment shipmentParent = new Shipment();
	private static final Set<String> TYPES = new HashSet<String>( Arrays.asList( new String[] {"standard","temperature-controlled" } ));
	public static final int MaxWeightLb = 1000;
	private String  type;
	private String  description;
	private int weightLb;
	private float priceDollars;
	public String state;
	private static final Set<String> STATES = new HashSet<String>( Arrays.asList( new String[] {"waiting-on-customer-information","start-process","in-process","accepted","rejected"} ));

	private Set<Item> itemList = new LinkedHashSet<Item>();
	
	public Container() {
		this.priceDollars=0;
		this.type="standard";
	}
	
	public Shipment getShipmentParent() {
		return shipmentParent;
	}
	public void setShipmentParent(Shipment shipmentParent) {
		shipmentParent.addToContainers(this);
		this.shipmentParent = shipmentParent;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		if (TYPES.contains(type)) {
		  this.type = type;
		} else {
			throw new IllegalArgumentException("Container type must be:" + TYPES.toString());
		}
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getWeightLb() {
		return weightLb;
	}
	public void setWeightLb(Integer weightLb) {
		this.weightLb = weightLb;
	}
	public float getPriceDollars() {
		return priceDollars;
	}
	public void setPriceDollars(float priceDollars) {
		this.priceDollars = priceDollars;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		if (STATES.contains(state)) {
			this.state = state;
		} else {
			throw new IllegalArgumentException("Container state must be:" + STATES.toString());
		}		
	}
	
	/*
	 * Helper method. Should not be called explicitly!
	 */
	public void addToItems(Item i)
	{
		itemList.add(i);
	}
	
	public Set<Item> getItemsList()
	{
		return itemList;
	}

}