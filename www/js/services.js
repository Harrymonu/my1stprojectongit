angular.module('starter.services', [])


.factory('sharedCartService', ['$ionicPopup',function($ionicPopup){
	
	var cartObj = {};
	cartObj.cart=[];
	cartObj.total_amount=0;
	cartObj.total_qty=0;
	cartObj.total_item=0;
	
	cartObj.cart.add=function(id,image,name,price,qty){
		// console.log(id)
		// console.log(image)
		// console.log(price)
		// console.log(qty)
		// console.log(name)

		if( cartObj.cart.find(id)!=-1 ){
               console.log("id in service"+JSON.stringify(cartObj.cart.find(id)))
			var alertPopup = $ionicPopup.alert({
                title: 'Product Already Added',
                template: 'Increase the qty from the cart'
            });
			//cartObj.cart[cartObj.cart.find(id)].cart_item_qty+=1;
			//cartObj.total_qty+= 1;	
			//cartObj.total_amount+= parseInt(cartObj.cart[cartObj.cart.find(id)].cart_item_price);
		}
		else{
		    cartObj.cart.push( { "cart_item_id": id , "cart_item_image": image , "cart_item_name": name , "cart_item_price": price , "cart_item_qty": qty } );
			cartObj.total_qty+=1;	
console.log("cart.length"+cartObj.total_qty);
        
			cartObj.total_amount+=parseInt(price);	
			cartObj.total_item=cartObj.total_qty
		}
	};
	 


	cartObj.cart.find=function(id){	
		var result=-1;
		for( var i = 0, len = cartObj.cart.length; i < len; i++ ) {
			if( cartObj.cart[i].cart_item_id === id ) {
				result = i;
				console.log("result"+cartObj.cart.length)
				break;
			}
		}
		return result;
	};
	
	cartObj.cart.drop=function(id,c_l_id){
	 var temp=cartObj.cart[cartObj.cart.find(id)];
	 console.log("temp"+temp)
	 cartObj.total_item=cartObj.total_item-1;
	 cartObj.total_qty-= parseInt(temp.cart_item_qty);
	 console.log(cartObj.cart.find(id))
	 if(cartObj.total_item==0)
	 {
	 	 cartObj.cart.splice(cartObj.cart.find(c_l_id),-1 );
	 }
	 cartObj.total_amount-=( parseInt(temp.cart_item_qty) * parseInt(temp.cart_item_price) );
	 cartObj.cart.splice(cartObj.cart.find(id), 1);

	};
	
	cartObj.cart.increment=function(id){
		 cartObj.cart[cartObj.cart.find(id)].cart_item_qty+=1;
		 cartObj.total_qty+= 1;
		 cartObj.total_amount+=( parseInt( cartObj.cart[cartObj.cart.find(id)].cart_item_price) );	
		 cartObj.total_item+=1;	
	};
	
	cartObj.cart.decrement=function(id){
		
			
			console.log("in>"+cartObj.total_qty);
			
			if(cartObj.total_qty>1)
			{
	            cartObj.total_qty-= 1;
			}
	    
	            if(cartObj.total_qty>0)
	            {
	            	

	            	console.log("inif"+cartObj.total_qty);
			
	            
		  
		   console.log("fristif"+cartObj.total_amount)
       
		 if(cartObj.cart[cartObj.cart.find(id)].cart_item_qty == 1){  // if the cart item was only 1 in qty
			//cartObj.cart.splice( cartObj.cart.find(id) , 1);  //edited
		 }else{
		 	if(cartObj.cart[cartObj.cart.find(id)].cart_item_qty>1)
		 	{
		 		 cartObj.total_amount-= parseInt( cartObj.cart[cartObj.cart.find(id)].cart_item_price) ;
			cartObj.cart[cartObj.cart.find(id)].cart_item_qty-=1;
			console.log('test'+cartObj.cart[cartObj.cart.find(id)].cart_item_qty);
			}	
		 }
		}
	
	};
	
	return cartObj;
}])

.factory('sharedFilterService', [function(){

	var obj = {};
 //    obj.str = "http://www.yourwebsite.com/foodkart/food_menu.php?till=";
	// obj.sort = "";
	// obj.search = "";
	// obj.category = "";
	// obj.till=0;
	
	
	
	// obj.getUrl=function(){
		
	// 	obj.till=obj.till + 5;
	// 	obj.str="http://www.yourwebsite.com/foodkart/food_menu.php?till="+obj.till; // pass the value to url
		
	// 	if(obj.sort!="" && obj.category!=""){
	// 		obj.str= obj.str+"&category="+obj.category+"&sort="+obj.sort;
	// 	}
	// 	else if(obj.category!="" ){
	// 		obj.str= obj.str+"&category="+obj.category;
	// 	}
	// 	else if(obj.sort!=""){  
	// 		obj.str= obj.str+"&sort="+obj.sort;
	// 	}
	// 	console.log("URL",obj.str);
	// 	return obj.str;
	// };
	return obj;
}])



.service('BlankService', [function(){

}]);

