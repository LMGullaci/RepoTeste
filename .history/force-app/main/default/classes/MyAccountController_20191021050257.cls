public class MyAccountController {
    
    //   public List<Id> insertAccounts(List<Account> accounts){
    //       List<Id> insertedAccounts = new List<Id>();
    //       insert accounts;
          
    //       for(Account acc : accounts){
    //           insertedAccounts.add(acc.Id);
    //       }

    //       return insertedAccounts;
    //   }

      public Boolean testConditions(string condition){
          return (condition.equals('Test 1') || 
            condition.equals('Test 2') ||
            condition.equals('Test 3') ||
            condition.equals('Test 4') ||
            condition.equals('Test 5');
      }
}
