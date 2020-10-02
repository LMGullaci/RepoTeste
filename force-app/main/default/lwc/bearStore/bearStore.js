
import {fireEvent, registerListener, unregisterListener} from 'c/pubsub';
const BearStore = new class{
    __bears = [];

    registerStateUpdate(callback, component){
        registerListener('stateUpdate', callback, component);
    }
    unregisterStateUpdate( component){
        unregisterListener(component);
    }
    
    sendUpdateState(pageRef){
        fireEvent(pageRef,'stateUpdate');
    }

    set bears(bears){
        this.__bears = bears
    }

    get bears(){
        return this.__bears;
    }

}

export default BearStore;