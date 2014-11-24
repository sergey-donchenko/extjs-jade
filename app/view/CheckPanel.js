Ext.define('UFX.view.CheckPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.CheckPanelView',           

    initComponent: function () {

        var me = this;

        //this.addEvents(['tradePlanEdit', 'tradePlanDelete']);        

        Ext.apply(me, {
            items : [{xtype: 'CheckListView', padding: 10}]
        });

        
        me.callParent(arguments);
    }
});