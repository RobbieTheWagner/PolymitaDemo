package org.railroad.shipping;
import java.io.Serializable;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class Shipment implements Serializable {
	private static final long serialVersionUID = 3L;
	private BillOfLading billOfLadingParent = new BillOfLading();
	private int numStops;
	private float currentLatitudeDecDeg;
	private float currentLongetudeDecDeg;
	private int currentTempC;
	private int maxEstimatedTempC;
	private int minEstimatedTempC;
	private float priceDollars;
	public String state;
	private static final Set<String> STATES = new HashSet<String>( Arrays.asList( new String[] {"waiting-on-customer-information","start-process","in-process","accepted","rejected"} ));
	private Set<Container> containerList = new LinkedHashSet<Container>();

	public Shipment() {
		this.priceDollars=0;
	}
	
	public BillOfLading getBillOfLadingParent() {
		return billOfLadingParent;
	}
	public void setBillOfLadingParent(BillOfLading parent) {
		this.billOfLadingParent = parent;
	}
	public int getNumStops() {
		return numStops;
	}
	public void setNumStops(int numStops) {
		this.numStops = numStops;
	}
	public float getCurrentLatitudeDecDeg() {
		return currentLatitudeDecDeg;
	}
	public void setCurrentLatitudeDecDeg(float currentLatitudeDecDeg) {
		this.currentLatitudeDecDeg = currentLatitudeDecDeg;
	}
	public float getCurrentLongetudeDecDeg() {
		return currentLongetudeDecDeg;
	}
	public void setCurrentLongetudeDecDeg(float currentLongetudeDecDeg) {
		this.currentLongetudeDecDeg = currentLongetudeDecDeg;
	}
	public int getCurrentTempC() {
		return currentTempC;
	}
	public void setCurrentTempC(int currentTempC) {
		this.currentTempC = currentTempC;
	}
	public int getMaxEstimatedTempC() {
		return maxEstimatedTempC;
	}
	public void setMaxEstimatedTempC(int maxEstimatedTempC) {
		this.maxEstimatedTempC = maxEstimatedTempC;
	}
	public int getMinEstimatedTempC() {
		return minEstimatedTempC;
	}
	public void setMinEstimatedTempC(int minEstimatedTempC) {
		this.minEstimatedTempC = minEstimatedTempC;
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
	
	public void addToContainers(Container c)
	{
		containerList.add(c);
	}
	
	public Set<Container> getContainersList()
	{
		return containerList;
	}

}