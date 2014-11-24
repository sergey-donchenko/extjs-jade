Ext.define('UFX.model.Check', {
    extend: 'Ext.data.Model',
    idProperty: '_id',

    fields: [{
        name: 'name',
        type: 'string'
    }, {
        name: 'tooltip',
        type: 'string'
    }, {
		name: 'pos',
        type: 'int'
    }]
});