package org.railinc.shipping.service;

import org.drools.runtime.StatefulKnowledgeSession;
import org.railinc.shipping.Shipment;

public interface ShippingService {
		
	public StatefulKnowledgeSession priceShipment(Shipment s);
	
}
