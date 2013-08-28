package org.railinc.shipping.service;


import javax.ejb.Stateless;
import javax.enterprise.inject.Alternative;
import javax.inject.Inject;

import org.railinc.shipping.Shipment;

@Alternative
@Stateless
public class ShippingServiceImpl implements ShippingService {
	
	@Inject
	ShippingServiceOld ss;
	
	@Inject
	PromoService ps;
	
	@Inject
	ProductService pp;
	
	public void priceShipment(Shipment s) {
						
		/*if ( s != null ) {
			
			initShoppingCartForPricing(sc);
			
			if ( sc.getShoppingCartItemList() != null && sc.getShoppingCartItemList().size() > 0) {
			
				ps.applyCartItemPromotions(sc);
				
				for (ShipmentItem sci : sc.getShoppingCartItemList()) {
					
					sc.setCartItemPromoSavings(sc.getCartItemPromoSavings() + (sci.getPromoSavings() * sci.getQuanity()));
					sc.setCartItemTotal(sc.getCartItemTotal() + (sci.getPrice() * sci.getQuanity()));
					
				}
				
				ss.calculateShipping(sc);				
				
			}
			
			ps.applyShippingPromotions(sc);
			
			sc.setCartTotal(sc.getCartItemTotal() + sc.getShippingTotal());
		
		}*/
		
	}

	/*private void initShoppingCartForPricing(ShoppingCart sc) {

		sc.setCartItemTotal(0);
		sc.setCartItemPromoSavings(0);
		sc.setShippingTotal(0);
		sc.setShippingPromoSavings(0);
		sc.setCartTotal(0);
		
		Map<String, Product> productMap = pp.getProductMap();
		
		for (ShipmentItem sci : sc.getShoppingCartItemList()) {
			
			Product p = productMap.get(sci.getProduct().getItemId());
			
			//if product exist, create new product to reset price
			if ( p != null ) {
			
				sci.setProduct(new Product(p.getItemId(), p.getName(), p.getDesc(), p.getPrice()));
				sci.setPrice(p.getPrice());
			}
			
			sci.setPromoSavings(0);
			
		}
		
		
	}*/
	
}
