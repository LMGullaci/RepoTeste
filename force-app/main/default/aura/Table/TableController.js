({
	doInit : function(cmp, event, helper) {

		const config = JSON.parse(cmp.get('v.config'));

		const columnsList = config.columns.map(column => column.label);
		const columnFields = config.columns.map(column => column.field);

		const dataList = config.body.map(row =>{

			return columnFields.map(field => row[field]);

		});

		cmp.set('v.dataList',dataList);
		cmp.set('v.columnList',columnsList);

	}
});