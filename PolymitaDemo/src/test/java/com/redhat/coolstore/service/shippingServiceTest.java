package com.redhat.coolstore.service;

import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.inject.Inject;

import junit.framework.Assert;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.railinc.shipping.Shipment;
import org.railinc.shipping.model.Product;
import org.railinc.shipping.model.Promotion;
import org.railinc.shipping.Shipment;
import org.railinc.shipping.model.ShipmentItem;
import org.railinc.shipping.service.ProductService;
import org.railinc.shipping.service.PromoService;
import org.railinc.shipping.service.ShippingService;

import com.redhat.coolstore.DefaultDeployment;

@RunWith(Arquillian.class)
public class shippingServiceTest {

	@Deployment
    public static WebArchive deployment() throws IllegalArgumentException, FileNotFoundException {
        return DefaultDeployment.deployment();
    }
	
	/*@Inject
	private Shipment shipment;
		
	@Inject
	private ShippingService shippingService;	
	
	@Inject 
	PromoService promoService; 
	
	@Inject
	ProductService productService; 
	
	@Before
	public void clearPromos() {
		
		promoService.setPromotions(new HashSet<Promotion>());
		
	}
				
	@Test
	public void priceShipmentEmpty() {
		
		Assert.assertEquals(0, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(0, shipment.getShippingTotal(), 0);
		Assert.assertEquals(0, shipment.getCartTotal(), 0);
		
		shippingService.priceShipment(shipment);
		
		Assert.assertEquals(0, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(0, shipment.getShippingTotal(), 0);
		Assert.assertEquals(0, shipment.getCartTotal(), 0);
		
	}
	
	@Test
	public void priceShipmentOneItem() {
		
		Assert.assertEquals(0, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(0, shipment.getShippingTotal(), 0);
		Assert.assertEquals(0, shipment.getCartTotal(), 0);
		
		ShipmentItem sci = new ShipmentItem();
		Product p = new Product();
		p.setItemId("123");
		p.setPrice(10.00);
		sci.setQuanity(2);
		sci.setProduct(p);
		
		productService.setProducts(Arrays.asList(p));
		
		shipment.addshipmentItem(sci);
		
		shippingService.priceShipment(shipment);
		
		Assert.assertEquals(20, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(2.99, shipment.getShippingTotal(), 0);
		Assert.assertEquals(22.99, shipment.getCartTotal(), 0.001);
				
	}
		
	@Test
	public void priceShipmentMultipleItem() {
		
		Assert.assertEquals(0, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(0, shipment.getShippingTotal(), 0);
		Assert.assertEquals(0, shipment.getCartTotal(), 0);
		
		ShipmentItem sci1 = new ShipmentItem();
		Product p1 = new Product();
		p1.setItemId("123");
		p1.setPrice(9.99);
		sci1.setQuanity(3);
		sci1.setProduct(p1);
		
		ShipmentItem sci2 = new ShipmentItem();
		Product p2 = new Product();
		p2.setItemId("234");
		p2.setPrice(6.77);
		sci2.setQuanity(1);
		sci2.setProduct(p2);
		
		ShipmentItem sci3 = new ShipmentItem();
		Product p3 = new Product();
		p3.setItemId("345");
		p3.setPrice(2.00);		
		sci3.setQuanity(2);
		sci3.setProduct(p3);
		
		shipment.addshipmentItem(sci1);
		shipment.addshipmentItem(sci2);
		shipment.addshipmentItem(sci3);
		
		productService.setProducts(Arrays.asList(p1, p2, p3));
		
		shippingService.priceShipment(shipment);
		
		Assert.assertEquals(40.74, shipment.getCartItemTotal(), 0.001);
		Assert.assertEquals(4.99, shipment.getShippingTotal(), 0);
		Assert.assertEquals(45.73, shipment.getCartTotal(), 0.001);
				
	}

	@Test
	public void priceShipmentMultipleTimes() {
		
		Assert.assertEquals(0, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(0, shipment.getShippingTotal(), 0);
		Assert.assertEquals(0, shipment.getCartTotal(), 0);
		
		ShipmentItem sci = new ShipmentItem();
		Product p = new Product();
		p.setItemId("123");
		p.setPrice(10.00);
		sci.setQuanity(2);
		sci.setProduct(p);
		
		shipment.addshipmentItem(sci);
		
		productService.setProducts(Arrays.asList(p));
		
		shippingService.priceShipment(shipment);
		
		Assert.assertEquals(20, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(2.99, shipment.getShippingTotal(), 0);
		Assert.assertEquals(22.99, shipment.getCartTotal(), 0.001);
		
		shippingService.priceShipment(shipment);
		
		Assert.assertEquals(20, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(2.99, shipment.getShippingTotal(), 0);
		Assert.assertEquals(22.99, shipment.getCartTotal(), 0.001);
				
	}
	
	@Test
	public void priceShipmentWithCartPromoTest() {
		
		//cart total 0
		Assert.assertEquals(0, shipment.getCartItemTotal(), 0);
		
		shippingService.priceShipment(shipment);
		
		Assert.assertEquals(0, shipment.getCartItemPromoSavings(), 0);
		
		//TODO: uncomment and fix.  reguardless of promotionSet passed in constructor overrides for promotionSet
		Set<Promotion> promotionSet = new HashSet<Promotion>();
		
		Promotion p1 = new Promotion("123", .25);
		
		promotionSet.add(p1);
		
		promoService.setPromotions(promotionSet);
		
		ShipmentItem sci = new ShipmentItem();
		sci.setQuanity(1);
		
		Product p = new Product();
		p.setItemId("234");
		p.setPrice(10.00);
		
		sci.setProduct(p);
		
		shipment.addshipmentItem(sci);
		
		productService.setProducts(Arrays.asList(p));
						
		Assert.assertEquals(0, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(0, shipment.getCartItemPromoSavings(), 0);
						
		shippingService.priceShipment(shipment);
		
		Assert.assertEquals(10, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(0, shipment.getCartItemPromoSavings(), 0);
		
		p.setItemId("123");
		sci.setProduct(p);
				
		shippingService.priceShipment(shipment);	
			
		Assert.assertEquals(7.5, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(-2.5, shipment.getCartItemPromoSavings(), 0);
				
		shippingService.priceShipment(shipment);	
						
		Assert.assertEquals(7.5, shipment.getCartItemTotal(), 0);
		Assert.assertEquals(-2.5, shipment.getCartItemPromoSavings(), 0);
		
	}
	
	@Test
	public void priceShipmentWithShippingPromoTest() {
				
		ShipmentItem sci = new ShipmentItem();
		sci.setQuanity(1);
		
		Product p = new Product();
		p.setItemId("456");
		p.setPrice(74.99);
		
		sci.setProduct(p);
		
		shipment.addshipmentItem(sci);
		
		productService.setProducts(Arrays.asList(p));
						
		Assert.assertEquals(0, shipment.getShippingTotal(), 0);
		Assert.assertEquals(0, shipment.getShippingPromoSavings(), 0);
						
		shippingService.priceShipment(shipment);

		Assert.assertEquals(6.99, shipment.getShippingTotal(), 0);
		Assert.assertEquals(0, shipment.getShippingPromoSavings(), 0);
		
		p.setPrice(75.00);
		
		shippingService.priceShipment(shipment);	
					
		Assert.assertEquals(0, shipment.getShippingTotal(), 0);
		Assert.assertEquals(-8.99, shipment.getShippingPromoSavings(), 0);
			
		
	}*/
}
