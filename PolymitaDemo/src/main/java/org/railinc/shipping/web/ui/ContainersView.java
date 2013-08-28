package org.railinc.shipping.web.ui;

import java.util.LinkedHashSet;
import java.util.Set;

import org.railinc.shipping.Container;
import org.railinc.shipping.web.PolymitaDemo;

import com.vaadin.data.Property;
import com.vaadin.data.Property.ValueChangeEvent;
import com.vaadin.event.ShortcutAction.KeyCode;
import com.vaadin.ui.Button;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Label;
import com.vaadin.ui.Panel;
import com.vaadin.ui.Table;
import com.vaadin.ui.VerticalLayout;
import com.vaadin.ui.Button.ClickListener;
import com.vaadin.ui.themes.Runo;

/**
 * This class provides all of the functionality necessary to create a table of
 * containers that are on any given shipment and to add containers to that table
 * and shipment.
 * 
 * @author rowagner
 * 
 */
public class ContainersView extends Panel {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Button newContainerButton;
	private String buttonWidth = "175px";
	private Set<Container> containerList = new LinkedHashSet<Container>();
	private VerticalLayout vl;
	private Table table;

	private Container currentContainer;

	/**
	 * Creates a new containers view.
	 * 
	 * @param app
	 */
	public ContainersView(final PolymitaDemo app) {

		vl = new VerticalLayout();

		Label containersHeader = new Label("Containers Info:");

		containersHeader.setStyleName(Runo.LABEL_H1);

		vl.addComponent(containersHeader);

		table = new Table();
		table.addContainerProperty("Container #", Integer.class, null);
		table.setPageLength(8);

		table.setSelectable(true);
		table.setImmediate(true);
		table.setNullSelectionAllowed(false);
		table.setWidth("175px");

		table.addListener(new Property.ValueChangeListener() {

			/**
			 * 
			 */
			private static final long serialVersionUID = 1L;

			@Override
			public void valueChange(ValueChangeEvent event) {
				if (table.size() > 0) {
					setCurrentContainer((Container) table.getValue());
					app.setCurrentContainer(getCurrentContainer());
					app.getItemView().setItems(getCurrentContainer().getItemsList());
					app.getItemView().updateItems();
				}

			}
		});

		vl.addComponent(table);

		HorizontalLayout hl = new HorizontalLayout();

		hl.setSpacing(true);

		newContainerButton = new Button("Add New Container");
		newContainerButton.addListener((ClickListener) app);
		newContainerButton.setClickShortcut(KeyCode.ENTER);
		newContainerButton.setWidth(buttonWidth);
		hl.addComponent(newContainerButton);

		vl.addComponent(hl);

		vl.setSizeFull();

		vl.setSpacing(true);

		addComponent(vl);

		setSizeFull();

		setHeight("100%");

	}

	/**
	 * Gets the button used to create a new container.
	 * 
	 * @return The new container button.
	 */
	public Button getNewContainerButton() {
		return newContainerButton;
	}

	/**
	 * Gets the list of containers that have been created.
	 * 
	 * @return containerList The list of containers.
	 */
	public Set<Container> getContainers() {
		return containerList;
	}

	/**
	 * Sets the list of containers to the given list.
	 * 
	 * @param c
	 *            The containers to set the list to.
	 */
	public void setContainers(Set<Container> c) {
		containerList = c;
	}

	/**
	 * Removes all containers from the table, adds the new ones back in, and
	 * repaints.
	 */
	public void updateContainers() {
		table.removeAllItems();
		int containerNum = 0;
		for (Container c : containerList) {
			table.addItem(new Object[] { new Integer(containerNum) }, c);
			containerNum++;
		}
		vl.requestRepaint();
	}

	/**
	 * Retrieves a reference to the currently selected container.
	 * 
	 * @return The currently selected container.
	 */
	public Container getCurrentContainer() {
		return currentContainer;
	}

	/**
	 * Assigns the current container.
	 * 
	 * @param currentContainer
	 *            The container to make the current one.
	 */
	public void setCurrentContainer(Container currentContainer) {
		this.currentContainer = currentContainer;
	}

	/**
	 * Returns the table containing all the containers.
	 * 
	 * @return table The table holding all of the containers.
	 */
	public Table getContainersTable() {
		return table;
	}

}
