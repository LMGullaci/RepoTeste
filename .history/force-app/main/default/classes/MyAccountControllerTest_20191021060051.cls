/**
    - Ter a possibilidade de inserir uma conta ou mais e retornar o id
*/
@IsTest
public class MyAccountControllerTest {

    @IsTest
    static void testInsertAccounts(){
        Account account1 = new Account(Name = 'John'),
                account2 = new Account(Name = 'Steve'),
                account3 = new Account(Name = 'Mary');

        List<Account> accountList = new List<Account>{account1, account2, account3};

        MyAccountController controller = new MyAccountController();

        List<Id> accountsInserted 
        // = controller.insertAccounts(accountList);

        System.assert(!accountsInserted.isEmpty());
    }
    
}
