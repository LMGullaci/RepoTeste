public class MyAccountController {
    
      public List<Id> insertAccounts(List<Account> accounts){
          List<Id> insertedAccounts = new List<Id>();
          insert accounts;
          
          for(Account acc : accounts){
              insertedAccounts.add(acc.Id);
          }

          return insertedAccounts;
      }

}