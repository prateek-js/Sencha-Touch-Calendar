# Sencha-Touch-Calendar
Contains calendar for sencha touch 

As you all know we dnt have calendar type date picker component in sencha touch
So i have tried to create it one.

Steps to configure:-

1. Copy files CalendarPicker.js and CalendarPickerField.js to touch->src-ux
2. Copy scss file 
	a. _calendarpicker.scss for dark theme
	b. _calendarpickerlight.scss for light theme
3. Update the app.scss file
4. Copy calendar fonts to resources\sass\stylesheets\fonts as in this project
5. Use the following code in your view

	xtype: 'calendarpickerfield',
    name: 'calendar',
    cls:'datePickerTextFieldCls',
    value: new Date(),
    placeHolder: 'Date',
    dateFormat: 'd/m/Y',
    id:'datePickerId',
    minDate: Ext.Date.add(new Date(), Ext.Date.DAY,-1),
    maxDate: Ext.Date.add(new Date(), Ext.Date.DAY,30)

    That's it you are done.

    Let me know in case of any modification, issue's feedbacks.

    Thanks,