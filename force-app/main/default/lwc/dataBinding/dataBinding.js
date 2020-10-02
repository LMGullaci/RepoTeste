import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {
    @track
    _state

    constructor(){
        super();
        this._state = {
            name:'John Clark'
        }
    }

    setName(event){
        // eslint-disable-next-line no-console
        console.log('Test');
        this._state = {
            ...this._state,
            name:event.target.value
        }
    }
}