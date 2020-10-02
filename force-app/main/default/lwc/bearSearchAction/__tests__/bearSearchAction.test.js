import searchAction from 'c/bearSearchAction';
import searchBears from '@salesforce/apex/BearController.searchBears';

jest.mock(
    '@salesforce/apex/BearController.searchBears',
    () => {
        return {
            default: jest.fn()
        };
    },
    {virtual:true}
);
jest.mock(
    'c/bearStore',
    () => {
        return {
            
                bears: [],
                sendUpdateState: jest.fn()
            
        };
    },
    {virtual:true}
);

const APEX_BEARS_SUCCESS = [
    {
        Name: 'Bear 1',
        Sex__c: 'Male',
        Age__c: 15,
        Height__c: 10,
        Weight__c: 20
    },
    {
        Name: 'Bear 2',
        Sex__c: 'Male',
        Age__c: 15,
        Height__c: 10,
        Weight__c: 20
    },
    {
        Name: 'Bear 3',
        Sex__c: 'Male',
        Age__c: 15,
        Height__c: 10,
        Weight__c: 20
    }
]

describe('c-bearSearchAction', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    function flushPromises(){
        // eslint-disable-next-line no-undef
        return new Promise( resolve => setImmediate(resolve));
    }

    it('search bears based on parameter', () =>{
        searchBears.mockResolvedValue(APEX_BEARS_SUCCESS);

        searchAction('',undefined);

        return flushPromises().then(() =>{
            // eslint-disable-next-line no-console
            console.log(searchBears.mock.calls);
            expect(searchBears.mock.calls[0][0]).toEqual({searchTerm:''});
        });
    });

});