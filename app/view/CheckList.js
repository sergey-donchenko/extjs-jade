Ext.define('UFX.view.CheckList', {
    extend: 'Ext.view.View',
    alias: 'widget.CheckListView',   

    itemSelector: 'ul.list-wrap',
    
    config : {
    	defaultBox : 'c-custom',
    	selectedBox : 'c-custom-selected',
    	partlySelectedBox : 'c-custom-partly-selected',
    },

    tpl: new Ext.XTemplate([
    	'<ul class="list-wrap">',
    		'<li>{[this.renderCheckbox("Select all")]}</li>',
			'<tpl for=".">',
			'<li>{[this.renderCheckbox(values.name, values.tooltip)]}</li>', 
			'</tpl>',
		'</ul>'
	].join(''), {
		renderCheckbox : function ( label, title ) {
			return [
				'<span class="c-custom">',
					'<div class="c-box"></div>',
				'</span>',
				'<label title="' + title + '">' + this.capitalize( label ) + '</label>'
			].join(''); 
		},

		capitalize : function(text) {
		    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
		}
	}),

    emptyText: 'No images available',

    /**
     * Init the view component
    */
    initComponent: function () {
        var me = this;

        me.store = Ext.getStore('Checkbox');	
        
        // Sort data
        me.store.sort('pos', 'ASC');

        console.log('UFX.view.CheckList was inited.');       

        me.callParent(arguments);
    }
});