App.ApplicationRoute = Em.Route.extend({

	setupController: function()
	{
		
		
	},
	
	debug: function(list)
	{
		Logger.useDefaults();
		Logger.setLevel(Logger.OFF);
		
		list.forEach(function(value)
		{
			Logger.get(value).setLevel(Logger.DEBUG);
		});
		
	},
	
	events: {
	
		applicationEventHandler: function()
		{
			
		}
		
	}

});