public class AccountHandler {

    public static Account insertNewAccount(String nameCustomer){

        try{
            Account c = new Account(Name=nameCustomer);

            insert c;
            return c;
        }catch(DmlException e){
            return null;
        }
    //Teste 2
    }

}