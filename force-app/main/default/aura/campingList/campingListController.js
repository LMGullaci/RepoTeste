({	
	doInit:function(component,event,helper){
		const action = component.get("c.getItems");

		const callback = (response) =>{
			if(response.getState() === "SUCCESS"){
				console.info('Sucesso');
				component.set('v.items',response.getReturnValue());
			}
		}

		action.setCallback(this,callback);

		$A.enqueueAction(action);
	},
	clickCreateItem:function(component,event,helper){
		var validCampingItem = component.find("campingItemform").reduce((validSoFar,inputComp)=>{
			inputComp.showHelpMessageIfInvalid();
			return validSoFar && inputComp.get('v.validity').valid;
		},true);

		if(validCampingItem){

			var campingItem = {...component.get('v.newItem')};

			console.info('Create Camping: '+ JSON.stringify(campingItem));

			
			helper.createItem(component,campingItem);
		}
	}
})