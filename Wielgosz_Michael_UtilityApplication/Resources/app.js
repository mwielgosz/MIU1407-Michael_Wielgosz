/*
 * Michael Wielgosz
 * Mobile Interfaces & Usability
 * Term 1407
 * Utility Application
 */

// Global variables
var bgColor = "#1E1E1E",
	bgImage = "background.png";
	
// Set the default background color/image
Ti.UI.setBackgroundColor(bgColor);

// Main app window
var mainWindow = Ti.UI.createWindow({
	title : "Utility",
	backgroundImage : bgImage,
	backgroundRepeat : true
});

// NavigationWindow object for iOS
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow
});


navWindow.open();



