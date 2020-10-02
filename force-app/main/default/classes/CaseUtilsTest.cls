@IsTest
public class CaseUtilsTest {

    
    @IsTest
    static void closeOpenCases_HaveOpenedCases_ShouldCloseCases(){

        Profile p = [Select Id from Profile where Name='System Administrator'];

        User u = new User(
            Alias = 'standt', Email='test@test.com',
            EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US',
            LocaleSidKey='en_US', ProfileId = p.Id,
            TimeZoneSidKey='America/Los_Angeles',
            UserName='other_test2@test.com'
        );

        System.runAs(u){
            Account account = new Account(Name='Test', Phone='11111111111');
            insert account;
            Case caseTest = new Case(Subject='Test Case',AccountId=account.Id, Status='Open');
            insert caseTest;

            Test.startTest();
                CaseUtils.closeOpenCases();
            Test.stopTest();

            Case postTestCase = [Select Status from Case limit 1];

            System.assert(postTestCase.Status == 'Closed', 'Case status is not closed, Case Status: ' + postTestCase.Status);
        }

    }

    @IsTest
    static void closOpenCases_HaveNoOpenedCases_ShouldNotCloseCases(){
        Account account = new Account(Name='Test', Phone='11111111111');
        insert account;
        
        Case caseTest = new Case(Subject='Test Case',AccountId=account.Id, Status='Transfer');
        insert caseTest;
        Test.setCreatedDate(caseTest.Id, Datetime.now().addDays(-1));

        Test.startTest();
            CaseUtils.closeOpenCases();
        Test.stopTest();

        Case postTestCase = [Select Status from Case limit 1];

        System.assert(postTestCase.Status == 'Transfer', 'Case status should not be change');
        
    }

    @IsTest
    static void testMethod_shouldReturmSum(){
        
        Integer response = CaseUtils.method(1,2);

        System.assertEquals(response, 3,'The sum didnt work');
        
    }

}
