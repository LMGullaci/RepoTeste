import {createElement} from 'lwc';
import BearList from 'c/bearList';
import BearStore from 'c/bearStore';

//New feature

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