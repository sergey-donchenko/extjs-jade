
Ext.define("UFX.controller.Main", {
    extend: 'Ext.app.Controller',

    views: ['CheckPanel'],
    models: ['Check'],
    stores: ['Checkbox'],

    init: function () {        

        this.control({
        	'CheckListView' : {        		
                'itemclick' : this.onItemClick,
        		scope : this
        	}
        });

       console.log('UFX.controller.Main was loaded');
    },
   
    /**
     * Handle an event on element click
    */
    onItemClick : function (view, record, item, index, e, eOpts ) {
        var elLi = Ext.get(e.target).up('li');

        if ( Ext.isEmpty(elLi) ) {
            return false;
        }  

        var elUl = elLi.up('ul')
            elChildLi = elUl.select('li:not(:first-child)');    

        if ( elLi.is(':first-child') ) {            

            if ( elLi.hasCls( view.getSelectedBox() ) || elLi.hasCls( view.getPartlySelectedBox() ) ) {
                elLi.removeCls([
                    view.getPartlySelectedBox(),
                    view.getSelectedBox()
                ]);                    

               elChildLi.removeCls( view.getSelectedBox() );
            } else {
                elLi.addCls( view.getSelectedBox() );
                elChildLi.addCls( view.getSelectedBox() );
            }   
            
        } else {
            elUl.first().removeCls([
                view.getPartlySelectedBox(),
                view.getSelectedBox()
            ]);  

            if ( elLi.hasCls( view.getSelectedBox() ) ) {
                elLi.removeCls( view.getSelectedBox() );
            } else {
                elLi.addCls( view.getSelectedBox() );
            }

            var iSelected = elUl.select('li:not(:first-child).' + view.getSelectedBox()).elements.length,
                iTotal    = elChildLi.elements.length          

            if (iTotal === iSelected) {
                elUl.first().addCls( view.getSelectedBox() );
            } else
            if ( iSelected  > 0 ) {
                elUl.first().removeCls( view.getSelectedBox() );
                elUl.first().addCls( view.getPartlySelectedBox() );
            } 
        }            
    }    


});    