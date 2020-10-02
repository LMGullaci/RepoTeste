import { LightningElement, track, wire } from 'lwc';
import {  CurrentPageReference } from 'lightning/navigation';
import searchAction from 'c/bearSearchAction';

export default class BearSearch extends LightningElement {
	@track searchTerm = '';
	@wire(CurrentPageReference) pageRef

	connectedCallback(){
		searchAction(this.searchTerm,this.pageRef);
	}

	handleSearchTermChange(event) {
		
		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
			searchAction(searchTerm,this.pageRef);
		}, 300);
	}
}