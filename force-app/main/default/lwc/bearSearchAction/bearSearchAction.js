import searchBears from '@salesforce/apex/BearController.searchBears';
import BearStore from 'c/bearStore';

const bearSearchAction = async (searchTerms, pageRef) => {

    try {
        
        const bears = await searchBears({searchTerm:searchTerms});
        BearStore.bears = bears;
        BearStore.sendUpdateState(pageRef);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
}

export default bearSearchAction;

