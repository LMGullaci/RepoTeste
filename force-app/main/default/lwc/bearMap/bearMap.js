import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
// import { registerListener, unregisterAllListeners } from 'c/pubsub';
import BearStore from 'c/bearStore';

export default class BearMap extends LightningElement {
	@track mapMarkers = [];
	@wire(CurrentPageReference) pageRef; // Required by pubsub
	connectedCallback() {
		// subscribe to bearListUpdate event
		BearStore.registerStateUpdate(this.handleBearListUpdate,this);
	}
	disconnectedCallback() {
		// unsubscribe from bearListUpdate event
		BearStore.unregisterStateUpdate(this);
	}
	handleBearListUpdate() {
		this.mapMarkers = BearStore.bears.map(bear => {
			const Latitude = bear.Location__Latitude__s;
			const Longitude = bear.Location__Longitude__s;
			return {
				location: { Latitude, Longitude },
				title: bear.Name,
				description: `Coords: ${Latitude}, ${Longitude}`,
				icon: 'utility:animal_and_nature'
			};
		});
	}
}