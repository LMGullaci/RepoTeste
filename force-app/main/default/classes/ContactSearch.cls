public class ContactSearch {
    public static List<Contact> searchForContacts(string first, string last){
        return [SELECT Id, Name from Contact WHERE LastName =: first AND MailingPostalCode =: last];
    }
}