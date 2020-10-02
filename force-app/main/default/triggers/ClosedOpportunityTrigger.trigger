trigger ClosedOpportunityTrigger on Opportunity (before insert, before update) {

    List<Task> taskList = new List<Task>();

	for (Opportunity so : Trigger.new) {

        if(so.StageName == 'Closed Won'){
            taskList.add(new Task(WhatId=so.Id,Subject = 'Follow Up Test Task'));
        }

	}
    insert taskList;

}