Ext.define('CalendarDemo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
    ],
    config: {
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        items: [{
            xtype: 'calendarpickerfield',
            name: 'calendar',
            cls:'datePickerTextFieldCls',
            value: new Date(),
            placeHolder: 'Date',
            dateFormat: 'd/m/Y',
            id:'datePickerId',
            minDate: Ext.Date.add(new Date(), Ext.Date.DAY,-1),
            maxDate: Ext.Date.add(new Date(), Ext.Date.DAY,30) 
        }]
    }
});
