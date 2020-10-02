import {createElement} from 'lwc';
import BearList from 'c/bearList';
import BearStore from 'c/bearStore';

//New feature
// Commit on feature branch
// Commit on local repo
// Commit on github
// Commit to pull request

// jest.mock('c/bearStore', () => ({
//     registerStateUpdate: jest.fn(),
//     unregisterStateUpdate: jest.fn(),
//     bears: []
// }));

jest.spyOn(BearStore,'registerStateUpdate').mockImplementation( () => {});

describe('c-bear-list', () => {

    it('render without crash', ()=>{

        const element = createElement('c-bear-list-nav', {
            is: BearList
        });

        document.body.appendChild(element);

        expect(element).toBeDefined();
        expect(BearStore.registerStateUpdate).toHaveBeenCalled();
    });

});
