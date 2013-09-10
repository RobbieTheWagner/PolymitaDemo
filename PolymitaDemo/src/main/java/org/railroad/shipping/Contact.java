package org.railroad.shipping;
import java.io.Serializable;


public class Contact implements Serializable {
	private static final long serialVersionUID = 1L;
	private String name;
	private String location;
	  
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
}