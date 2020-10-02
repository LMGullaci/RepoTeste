({
	clickCreate:function(component, event,helper){
		var validExpense = component.find("expenseform").reduce((validSoFar,inputComp)=>{
			inputComp.showHelpMessageIfInvalid();
			return validSoFar && inputComp.get('v.validity').valid;
		},true);

		if(validExpense){

			var newExpense = {...component.get('v.newExpense')};
			console.info('Create Expense: '+ JSON.stringify(newExpense));
			
			helper.createExpense(component,newExpense);
		}
	},
	doInit:function(component, event,helper){
		var action = component.get('c.getExpenses');

		action.setCallback(this,(response)=>{
			console.info(response);
			var state = response.getState();
			if(state === "SUCCESS"){
				component.set('v.expenses',response.getReturnValue());
			}else{
				console.log('Falied with state: '+state);
			}
		});

		$A.enqueueAction(action);

	},
	handleUpdateExpense: function(component, event, helper) {
		var updatedExp = event.getParam("expense");
		helper.updateExpense(component, updatedExp);
	}
	
})