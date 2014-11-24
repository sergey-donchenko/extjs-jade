Ext.application({
	name: "UFX",
    appFolder: "app",

    autoCreateViewport: true,

    controllers: [
        'Main'
    ],

    launch: function() {
        console.log("Called Ext.application launch.")
    }
});