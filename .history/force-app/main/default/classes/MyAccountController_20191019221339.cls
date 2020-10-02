public class MyAccountController {
    
      public List<String> insertAccounts(List<Account> accounts){
          List<String> insertedAccounts = new List<Id>();

          try {
            insert accounts;
          
            for(Account acc : accounts){
                insertedAccounts.add(acc.Id);
            }
          } catch (Exception e) {
              System.debug('Exception Message: '+e.getMessage());
              System.debug('Exception Stack trace: '+e.getStackTraceString());
              insertedAccounts.add('Error: '+e.getMessage());
          }

          return insertedAccounts;
      }
}
