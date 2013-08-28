package org.railinc.shipping.service;

import java.io.Serializable;

import javax.ejb.Stateful;
import javax.inject.Inject;

import org.drools.runtime.StatefulKnowledgeSession;
import org.railinc.shipping.BillOfLading;
import org.railinc.shipping.Contact;
import org.railinc.shipping.Shipment;
import org.railinc.shipping.Container;
import org.railinc.shipping.Item;
import org.railinc.shipping.util.BRMSUtil;

/**
 * This class creates the StatefulKnowledgeSession and interacts with BRMS.
 * 
 * @author rowagner
 * 
 */
@Stateful
public class ShippingServiceImplBRMS implements ShippingService, Serializable {

	private static final long serialVersionUID = 6821952169434330759L;

	@Inject
	private BRMSUtil brmsUtil;

	/**
	 * Creates a new instance of the ShippingServiceImplBRMS.
	 */
	public ShippingServiceImplBRMS() {

	}

	public void priceShipment(Shipment s) {

		if (s != null) {

			StatefulKnowledgeSession ksession = null;

			try {

				// If there is at least one container in the shipment.
				if (s.getContainersList().size() > 0) {

					ksession = brmsUtil.getStatefulSession();

					Contact shipper = new Contact();
					shipper.setName("ACME");
					shipper.setLocation("Yosemite Valley");
					Contact receiver = new Contact();
					receiver.setName("Co Inc");
					receiver.setLocation("Little Rock");
					BillOfLading bol = new BillOfLading();
					bol = s.getBillOfLadingParent();
					bol.setState("start-process");
					bol.setShipper(shipper);
					bol.setReceiver(receiver);
					s.setState("start-process");
					ksession.insert(bol);
					ksession.insert(s);

					for (Container c : s.getContainersList()) {
						ksession.insert(c);

						for (Item i : c.getItemsList()) {
							ksession.insert(i);
						}

					}

					ksession.startProcess("org.railinc.shipping.MasterFlow");

					ksession.fireAllRules();

				}

				/**
				 * Check price to see if the flow worked!
				 */

				for (Container c : s.getContainersList()) {
					for (Item i : c.getItemsList()) {
						System.out.println("Item Weight: " + i.getWeightLb());
						System.out.println("Item Price: $" + i.getPriceDollars());
					}
					System.out.println("Container Weight: " + c.getWeightLb());
					System.out.println("Container Price: $" + c.getPriceDollars());
				}

				System.out.println("Shipment Price: $" + s.getPriceDollars());

				System.out.println("BOL price: $" + s.getBillOfLadingParent().getPriceDollars());

			} finally {

				if (ksession != null) {

					ksession.dispose();

				}
			}
		}

	}

}
