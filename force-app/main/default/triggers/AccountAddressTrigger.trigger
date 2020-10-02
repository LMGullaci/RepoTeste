trigger AccountAddressTrigger on Account (before insert, before update) {

    if(Trigger.New[0].Match_Billing_Address__c && Trigger.New[0].BillingPostalCode != null){
        Trigger.New[0].ShippingPostalCode = Trigger.New[0].BillingPostalCode;
    }

}