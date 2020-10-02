@isTest
private class TestRestrictContactByName {

	@isTest static void test_method_one() {
		Contact con = new Contact(LastName='INVALIDNAME');

        Test.startTest();
            try{
                insert con;
            }catch(Exception e){

            }
        Test.stopTest();
    }

}