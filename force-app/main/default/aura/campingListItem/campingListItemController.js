({
	packItem:function(component, event, helper){
		var campingItem = component.get("v.item");

		campingItem.Packed__c = true;

		var btnClicked = event.getSource();
        btnClicked.set("v.disabled", true);  
		

		component.set("v.item",campingItem);
	}
})