package org.railinc.shipping.util;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;

import org.drools.SystemEventListenerFactory;
import org.drools.agent.KnowledgeAgent;
import org.drools.agent.KnowledgeAgentFactory;
import org.drools.builder.ResourceType;
import org.drools.impl.EnvironmentFactory;
import org.drools.io.Resource;
import org.drools.io.ResourceChangeScannerConfiguration;
import org.drools.io.ResourceFactory;
import org.drools.io.impl.ChangeSetImpl;
import org.drools.io.impl.UrlResource;
import org.drools.runtime.Environment;
import org.drools.runtime.EnvironmentName;
import org.drools.runtime.StatefulKnowledgeSession;
import org.drools.runtime.StatelessKnowledgeSession;
import org.jbpm.task.service.TaskClient;
import org.jbpm.task.service.hornetq.CommandBasedHornetQWSHumanTaskHandler;
import org.jbpm.task.service.hornetq.HornetQTaskClientConnector;
import org.jbpm.task.service.hornetq.HornetQTaskClientHandler;
import org.railinc.shipping.Container;
import org.railinc.shipping.Shipment;

/**
 * This class allows many funtionalities of interfacing with BRMS.
 * 
 * @author rowagner
 * 
 */
@Singleton
public class BRMSUtil {

	private KnowledgeAgent kagent = null;
	private StatefulKnowledgeSession ksession = null;
	private TaskClient client = null;
	private HornetQTaskClientConnector clientConnector = null;
	HornetQTaskClientHandler clientHandler = null;

	public BRMSUtil() {
	}

	@PostConstruct
	public void postConstruct() {
		kagent = KnowledgeAgentFactory.newKnowledgeAgent("BRMS Agent");
		kagent.addEventListener(new LogKnowledgeAgentListener());

		ChangeSetImpl changeSet = new ChangeSetImpl();
		changeSet.setResourcesAdded(buildResourceURLCollection());

		// resource to the change-set xml for the resources to add
		kagent.applyChangeSet(changeSet);

		ResourceChangeScannerConfiguration changeScannerConfiguration = ResourceFactory
				.getResourceChangeScannerService().newResourceChangeScannerConfiguration();

		changeScannerConfiguration.setProperty("drools.resource.scanner.interval", Integer.toString(1));

		ResourceFactory.getResourceChangeScannerService().configure(changeScannerConfiguration);

		ResourceFactory.getResourceChangeNotifierService().start();

		ResourceFactory.getResourceChangeScannerService().start();
		
		clientHandler = new HornetQTaskClientHandler(
				SystemEventListenerFactory.getSystemEventListener());
		
		
		clientConnector = new HornetQTaskClientConnector(
				"Human Task" + UUID.randomUUID(), clientHandler);
		
		client = new TaskClient(clientConnector);
		client.connect("127.0.0.1", 5153);
		

	}

	public StatelessKnowledgeSession getStatelessSession() {

		return kagent.getKnowledgeBase().newStatelessKnowledgeSession();
	}
	
	@SuppressWarnings("deprecation")
	public StatefulKnowledgeSession getStatefulSession() {
		ksession = kagent.getKnowledgeBase().newStatefulKnowledgeSession();
		
		CommandBasedHornetQWSHumanTaskHandler handler = new CommandBasedHornetQWSHumanTaskHandler(
				ksession);
		
		handler.setClient(client);
		
		ksession.getWorkItemManager().registerWorkItemHandler("Human Task",
				handler);
		return ksession;
	}

	public void stopResourceChangeScannerServices() {

		ResourceFactory.getResourceChangeNotifierService().stop();

		ResourceFactory.getResourceChangeScannerService().stop();

		kagent = null;

	}

	private Collection<Resource> buildResourceURLCollection() {

		Collection<Resource> resources = new ArrayList<Resource>();

		List<String> urlArrayList = new ArrayList<String>();

		String guvnorIPOverride = System.getProperty("guvnor-ip");
		String guvnorPortOverride = System.getProperty("guvnor-port");

		String guvnorIP = "localhost";
		String guvnorPort = "8080";

		if (guvnorIPOverride != null) {

			guvnorIP = guvnorIPOverride;

		}

		if (guvnorPortOverride != null) {

			guvnorPort = guvnorPortOverride;

		}

		urlArrayList.add("http://" + guvnorIP + ":" + guvnorPort
				+ "/jboss-brms/org.drools.guvnor.Guvnor/package/org.railinc.shipping/LATEST");

		for (String url : urlArrayList) {

			UrlResource standardUrlResource = (UrlResource) ResourceFactory.newUrlResource(url);

			standardUrlResource.setBasicAuthentication("enabled");
			standardUrlResource.setUsername("admin");
			standardUrlResource.setPassword("admin");
			standardUrlResource.setResourceType(ResourceType.PKG);
			resources.add(standardUrlResource);

		}

		return resources;
	}

	public static void main(String[] args) {

		BRMSUtil b = new BRMSUtil();

		StatefulKnowledgeSession session = b.getStatefulSession();

		Shipment s = new Shipment();

		Container c = new Container();

		c.setShipmentParent(s);

		session.insert(s);
		session.insert(c);

		session.startProcess("org.railinc.shipping.MasterFlow");

		session.fireAllRules();

		session.dispose();

		b.stopResourceChangeScannerServices();

		System.exit(0);

	}
}
