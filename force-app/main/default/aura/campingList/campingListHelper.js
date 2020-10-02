({
	createItem:function(component,campingItem){

		const action = component.get("c.saveItem");
		action.setParams({
			"campingItem":campingItem
		});
		const callback = (response) =>{
			if(response.getState() === "SUCCESS"){
				var campingList = component.get('v.items');
				console.info('Upserted camping: ');
				console.info(response.getReturnValue());
				
				campingList.push(response.getReturnValue());
	
				component.set('v.items',campingList);
	
				component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
				'Name': '',
				'Quantity__c': 0,
				'Price__c': 0,
				'Packed__c': false });
			}
		}

		action.setCallback(this,callback);

		$A.enqueueAction(action);
	}
})