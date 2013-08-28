package org.railinc.shipping;

import java.io.Serializable;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class BillOfLading implements Serializable { 
	private static final long serialVersionUID = 4L;
	private static int lastId=0;
	private int id;
	private Contact shipper  = new Contact();
	private Contact receiver = new Contact();
	private float priceDollars;
	private float amountReceivedDollars;
	private String state;
	private static final Set<String> STATES = new HashSet<String>( Arrays.asList( new String[] {"waiting-on-customer-information","start-process","in-process","accepted"} ));
	
	public BillOfLading() {
		super();
		lastId++;
		this.id=lastId;
		this.priceDollars=0;
		this.state="waiting-on-customer-information";
	}
	public Contact getShipper() {
		return shipper;
	}
	public void setShipper(Contact shipper) {
		this.shipper = shipper;
	}
	public Contact getReceiver() {
		return receiver;
	}
	public void setReceiver(Contact receiver) {
		this.receiver = receiver;
	}
	public int getId() { return id; }
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
			throw new IllegalArgumentException("Item type must be:" + STATES.toString());
		}
	}
	public float getAmountReceivedDollars() {
		return amountReceivedDollars;
	}
	public void setAmountReceivedDollars(float amountReceivedDollars) {
		this.amountReceivedDollars = amountReceivedDollars;
	}
	
}