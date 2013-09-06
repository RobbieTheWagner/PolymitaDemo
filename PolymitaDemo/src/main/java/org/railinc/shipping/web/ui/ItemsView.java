package org.railinc.shipping.web.ui;

import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.LinkedHashSet;
import java.util.Set;

import org.railinc.shipping.Item;
import org.railinc.shipping.web.PolymitaDemo;

import com.vaadin.data.Validator;
import com.vaadin.event.ShortcutAction.KeyCode;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickListener;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Label;
import com.vaadin.ui.Panel;
import com.vaadin.ui.Select;
import com.vaadin.ui.Table;
import com.vaadin.ui.TextArea;
import com.vaadin.ui.TextField;
import com.vaadin.ui.VerticalLayout;
import com.vaadin.ui.themes.Runo;

/**
 * This class shows all UI components associated with the adding, removing, and
 * viewing of items.
 * 
 * @author rowagner
 * 
 */
public class ItemsView extends Panel {

	private String buttonWidth = "160px";

	private Button newItemButton;

	private Button removeItemButton;

	private Table table;

	private Set<Item> itemList = new LinkedHashSet<Item>();

	private VerticalLayout vl;

	private final TextField weight;
	private TextArea description;
	private Select hazardous;

	/**
	 * 
	 */
	private static final long serialVersionUID = 962893447423474540L;

	public ItemsView(final PolymitaDemo app) {

		vl = new VerticalLayout();

		Label itemsHeader = new Label("Item Info:");

		itemsHeader.setStyleName(Runo.LABEL_H1);

		vl.addComponent(itemsHeader);

		description = new TextArea();
		description.setWordwrap(true);
		description.addValidator(new DescriptionValidator());
		
		weight = new TextField();
		weight.addValidator(new WeightValidator());

		hazardous = new Select();
		hazardous.addItem("non-hazardous");
		hazardous.addItem("Class 1");
		hazardous.addItem("Class 2");
		hazardous.addItem("Class 3");
		hazardous.addItem("Class 4");
		hazardous.addItem("Class 5");
		hazardous.addItem("Class 6");
		hazardous.addItem("Class 7");
		hazardous.addItem("Class 8");
		hazardous.addItem("Class 9");
		hazardous.select("non-hazardous");

		VerticalLayout vl2 = new VerticalLayout();
		vl2.addComponent(new Label("Description"));
		vl2.addComponent(description);
		vl2.addComponent(new Label("Weight:"));
		vl2.addComponent(weight);
		vl2.addComponent(new Label("Hazardous Material Class:"));
		vl2.addComponent(hazardous);

		vl2.addComponent(new Label("&nbsp;", Label.CONTENT_XHTML));

		table = new Table();
		table.addContainerProperty("Item #", Integer.class, null);
		table.addContainerProperty("Weight", Integer.class, null);
		table.addContainerProperty("Hazardous?", String.class, null);
		table.setPageLength(9);

		table.setSelectable(true);
		table.setImmediate(true);
		table.setWidth("250px");

		newItemButton = new Button("Add New Item");
		newItemButton.addListener((ClickListener) app);
		newItemButton.setClickShortcut(KeyCode.ENTER);
		newItemButton.setWidth(buttonWidth);
		vl2.addComponent(newItemButton);

		vl2.addComponent(new Label("<br/>", Label.CONTENT_XHTML));

		removeItemButton = new Button("Remove Selected Item");
		removeItemButton.addListener((ClickListener) app);
		removeItemButton.setWidth(buttonWidth);
		vl2.addComponent(removeItemButton);

		// VerticalLayout vl3 = new VerticalLayout();

		Table hazardsTable = new Table();

		hazardsTable.addContainerProperty("Class", String.class, null);
		hazardsTable.addContainerProperty("Description", String.class, null);
		hazardsTable.setCaption("Hazardous Material Types");
		hazardsTable.addItem(new Object[] { new String("Class 1"), new String("Explosives") }, 1);
		hazardsTable.addItem(new Object[] { new String("Class 2"), new String("Gases") }, 2);
		hazardsTable.addItem(new Object[] { new String("Class 3"),
				new String("Flammable Liquid and Combustible Liquid") }, 3);
		hazardsTable.addItem(new Object[] { new String("Class 4"),
				new String("Flammable Solid, Spontaneously Combustible, and Dangerous When Wet") }, 4);
		hazardsTable.addItem(new Object[] { new String("Class 5"), new String("Oxidizer and Organic Peroxide") }, 5);
		hazardsTable.addItem(new Object[] { new String("Class 6"),
				new String("Poison (Toxic) and Poison Inhalation Hazard") }, 6);
		hazardsTable.addItem(new Object[] { new String("Class 7"), new String("Radioactive") }, 7);
		hazardsTable.addItem(new Object[] { new String("Class 8"), new String("Corrosive") }, 8);
		hazardsTable.addItem(new Object[] { new String("Class 9"), new String("Miscellaneous") }, 9);
		hazardsTable.setPageLength(9);

		HorizontalLayout hl = new HorizontalLayout();

		hl.setSpacing(true);

		hl.addComponent(table);
		hl.addComponent(vl2);

		HorizontalLayout hl2 = new HorizontalLayout();

		hl2.addComponent(hazardsTable);

		vl.addComponent(hl);
		vl.addComponent(hl2);

		vl.addComponent(new Label("&nbsp;", Label.CONTENT_XHTML));

		vl.setSizeFull();

		vl.setSpacing(true);

		addComponent(vl);

		setSizeFull();

		setHeight("100%");

	}

	/**
	 * Returns a reference to the button that creates new items
	 * 
	 * @return The new item button.
	 */
	public Button getNewItemButton() {
		return newItemButton;
	}

	/**
	 * Returns a reference to the button that removes the selected item.
	 * 
	 * @return The remove item button.
	 */
	public Button getRemoveItemButton() {
		return removeItemButton;
	}

	/**
	 * Gets the list of stored items.
	 * 
	 * @return The item list.
	 */
	public Set<Item> getItems() {
		return itemList;
	}

	public void setItems(Set<Item> i) {
		itemList = i;
	}

	/**
	 * Updates the items tables. This method will remove all items from the
	 * items table and replace them with the new items for the selected
	 * container.
	 */
	public void updateItems() {
		table.removeAllItems();
		int itemNum = 0;
		for (Item i : itemList) {
			table.addItem(new Object[] { new Integer(itemNum), new Integer(i.getWeightLb()), new String(i.getType()) },
					i);
			itemNum++;
		}
		vl.requestRepaint();
	}

	/**
	 * Returns the TextField where weight is entered.
	 * 
	 * @return weight The weight TextField.
	 */
	public TextField getWeight() {
		return weight;
	}

	/**
	 * Returns the select group hazardous. This is a drop down box of all of the
	 * hazardous types to choose from.
	 * 
	 * @return hazardous The DDB with the hazardous types in it.
	 */
	public Select getHazardous() {
		return hazardous;
	}

	/**
	 * Returns the table with all the item information stored in it.
	 * 
	 * @return table The table with all items stored in it.
	 */
	public Table getItemsTable() {
		return table;
	}

	/**
	 * Returns the description TextArea so that the value can be retrieved.
	 * 
	 * @return description The TextArea containing the item description.
	 */
	public TextArea getItemDescription() {
		return description;
	}
	
	/**
	 * Checks if the weight string entered is numeric or not.
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isNumeric(String str) {
		NumberFormat formatter = NumberFormat.getInstance();
		ParsePosition pos = new ParsePosition(0);
		formatter.parse(str, pos);
		return str.length() == pos.getIndex();
	}

	public class DescriptionValidator implements Validator {
		private static final long serialVersionUID = -8281962473854901819L;

		@Override
		public void validate(Object value) throws InvalidValueException {
			// Simply call the isValid(). It is possible to have
			// more complex logic here to also report the reason
			// of the failure in better detail.
			if (!isValid(value))
				throw new InvalidValueException("Description must be <= 14 characters.");
		}

		@Override
		public boolean isValid(Object value) {
			if (value instanceof String && ((String) value).length() <= 14)
				return true;
			return false;
		}
	}
	
	public class WeightValidator implements Validator {
		private static final long serialVersionUID = -8281962473854901819L;

		@Override
		public void validate(Object value) throws InvalidValueException {
			// Simply call the isValid(). It is possible to have
			// more complex logic here to also report the reason
			// of the failure in better detail.
			if (!isValid(value))
				throw new InvalidValueException("Weight must be numeric.");
		}

		@Override
		public boolean isValid(Object value) {
			if (value instanceof String && isNumeric(((String) value)))
				return true;
			return false;
		}
	}
}
