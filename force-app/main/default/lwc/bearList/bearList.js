import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
import { LightningElement, track, wire } from 'lwc';
import BearStore from 'c/bearStore';

export default class BearListNav extends NavigationMixin(LightningElement) {
	
    @track bears;
	@wire(CurrentPageReference) pageRef;
	
	connectedCallback() {
		loadStyle(this, ursusResources + '/style.css');
		BearStore.registerStateUpdate(this.handleBearListUpdate,this);
	}

	disconnectedCallback() {
		BearStore.unregisterStateUpdate(this);
	}

	handleBearListUpdate() {
		this.bears = BearStore.bears;
	}

	handleBearView(event) {
		// Get bear record id from bearview event
		const bearId = event.detail;
		// Navigate to bear record page
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: bearId,
				objectApiName: 'Bear__c',
				actionName: 'view',
			},
		});
	}

	get hasResults() {
		return (this.bears.length > 0);
	}

}