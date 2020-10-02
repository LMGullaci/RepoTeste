public class RandomContactFactory {

    public static List<Contact> generateRandomContacts(Integer num, String lastName){

        List<Contact> listaContatos = new List<Contact>();

        for(Integer i = 0; i < num; i++){
            listaContatos.add(new Contact(FirstName='Nome '+ i, LastName=lastName));
        }

        return listaContatos;

    }

}