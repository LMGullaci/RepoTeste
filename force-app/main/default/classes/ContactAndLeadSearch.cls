public class ContactAndLeadSearch {

    public static List<List< SObject>> searchContactsAndLeads(string strSearch){
        return [FIND :strSearch IN NAME FIELDS
                RETURNING Contact(Id, Name),Lead(Id, Name)];
    }

}