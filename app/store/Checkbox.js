// store/BugStore.js
Ext.define('UFX.store.Checkbox', {
	extend: 'Ext.data.Store',
	
	model: 'UFX.model.Check',
	data : [
			{name : 'cat', tooltip : 'Some Default Tooktip', pos: '0'},
			{name : 'frog', tooltip : 'Some Frog Tooltip', pos: '4'},
			{name : 'fox', tooltip : 'Some Fox Tooktip', pos: '2'},
			{name : 'pIg', tooltip : 'Some Pig Tooktip', pos: '-1'},
		]
	
});