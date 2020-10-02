trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {
    List<BatchApexErrorEvent> eventList = Trigger.new;
    List<BatchLeadConvertErrors__c> errorList = new List<BatchLeadConvertErrors__c>();
    for (Integer i = 0; i < eventList.size(); i++) {
        BatchApexErrorEvent errorEvent = eventList[i];
        BatchLeadConvertErrors__c newError = new BatchLeadConvertErrors__c(
            AsyncApexJobId__c = errorEvent.AsyncApexJobId,
            Records__c = errorEvent.JobScope,
            StackTrace__c = errorEvent.StackTrace
        );

        errorList.add(newError);
    }
    insert errorList;
}
