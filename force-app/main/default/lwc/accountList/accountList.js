import { LightningElement, track } from 'lwc';

export default class AccountList extends LightningElement {
    @track listItems=[
        {Id:1, Name:"Test"},
        {Id:2, Name:"Test 2"},
        {Id:3, Name:"Test 3"},
        {Id:4, Name:"Test 4"},
        {Id:5, Name:"Test 5"},
    ]
}