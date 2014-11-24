Ext.define('UFX.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },
    requires: ['UFX.view.CheckList'],

    defaults: {
        collapsible: true,
        split: true,
        bodyStyle: 'padding:5px'
    },

    items: [/*{        
        region: 'south',
        height: 150,
        minSize: 75,
        maxSize: 250,
        cmargins: '5 0 0 0'
    },*/ {
        xtype: 'panel',
        title: 'The List Of Managed CheckBoxes',
        region:'center',
        collapsible: false,
        margins: '5 0 0 0',
        items: [{
            xtype: 'CheckPanelView'
        }]
    }]
});  