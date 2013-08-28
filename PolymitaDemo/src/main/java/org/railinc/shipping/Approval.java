package org.railinc.shipping;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Approval {

	private Container containerParent;  
	private Item itemParent;
	private String type;
	private String state;
	private static final Set<String> TYPES = new HashSet<String>( Arrays.asList( new String[] {"hazardous","temperature-controlled" } ));
	private static final Set<String> STATES= new HashSet<String>( Arrays.asList( new String[] {"waiting","approved","denied"}));
	
	public Approval( Container cp ) {
		this.type="temperature-controlled";
		this.containerParent=cp;
		this.state="waiting";
	}
	public Approval( Item ip ) {
		this.type ="hazardous";
		this.itemParent=ip;
		this.state="waiting";
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		if (TYPES.contains(type)) {
		  this.type = type;
		} else {
			throw new IllegalArgumentException("Approval type must be:" + TYPES.toString());
		}
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		if (STATES.contains(state)) {
			this.state = state;
		} else {
			throw new IllegalArgumentException("Approval state must be:" + STATES.toString());
		}		
	}
}