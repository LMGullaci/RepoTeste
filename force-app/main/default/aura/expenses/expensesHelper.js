({
	createExpense:function(component, expense){
		
		var callBack = (response)=>{
			
			if(response.getState() === 'SUCCESS'){
				var expenses = component.get('v.expenses');
				expenses.push(response.getReturnValue());
				component.set('v.expenses',expenses);
			}

		}
		this.saveExpense(component,expense,callback);
	},

	updateExpense: function(component, expense) {
		this.saveExpense(component,expense);
	},
	saveExpense: function(component, expense, callback) {
		var action = component.get("c.saveExpense");
		action.setParams({
			"expense": expense
		});
		if (callback) {
			action.setCallback(this, callback);
		}
		$A.enqueueAction(action);
	}
	
})