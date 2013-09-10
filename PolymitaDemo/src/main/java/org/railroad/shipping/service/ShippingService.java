package org.railroad.shipping.service;

import org.drools.runtime.StatefulKnowledgeSession;
import org.railroad.shipping.Shipment;

public interface ShippingService {
		
	public StatefulKnowledgeSession priceShipment(Shipment s);
	
}
