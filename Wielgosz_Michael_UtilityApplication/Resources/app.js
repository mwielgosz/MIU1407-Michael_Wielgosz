/*
 * Michael Wielgosz
 * Mobile Interfaces & Usability
 * Term 1407
 * Utility Application
 */

// Global variables
var bgColor = "#1E1E1E",
	bgImage = "background.png",
	layoutMarginSmall = 4,
	layoutMarginNormal = 8;
	
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

// View to contain login elements
var loginView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: "22%",
	width: "80%",
	center: true,
	borderColor : "#fff",
	borderWidth : 1,
	borderRadius: 8,
	zIndex: 0
});

// Label for username text
var usernameLabel = Ti.UI.createLabel({
	text: "Username",
	font: {fontSize:16},
	color : "#000",
	left: layoutMarginNormal,
	top: layoutMarginNormal + layoutMarginSmall,
	textAlign: "left"
});
loginView.add(usernameLabel);

// Username text field
var usernameTextField = Ti.UI.createTextField({
  	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	color: '#888',
  	font: {fontSize:12},
  	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
  	returnKeyType: Ti.UI.RETURNKEY_NEXT,
  	autocorrect: false,
  	textAlign: "left",
  	hintText: "Type your username",
  	top: layoutMarginNormal,
  	width: 150, 
  	height: 25,
  	right: layoutMarginNormal
});
loginView.add(usernameTextField);

// Line to separate username from password views
var usernamePasswordLine = Ti.UI.createView({
	height : 1,
	backgroundColor : "#888",
	width: "75%",
	top: usernameTextField.top + usernameTextField.height + layoutMarginNormal
});
loginView.add(usernamePasswordLine);

// Label for password text
var passwordLabel = Ti.UI.createLabel({
	text: "Password",
	font: {fontSize:16},
	color : "#000",
	left: layoutMarginNormal,
	top: usernamePasswordLine.top + layoutMarginNormal + layoutMarginSmall,
	textAlign : "left"
});
loginView.add(passwordLabel);

// Password text field
var passwordTextField = Ti.UI.createTextField({
  	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	color: '#888',
  	font: {fontSize:12},
  	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
  	returnKeyType: Ti.UI.RETURNKEY_DONE,
  	autocorrect: false,
  	passwordMask: true,
  	textAlign: "left",
  	hintText: "Type your password",
  	top: usernamePasswordLine.top + layoutMarginNormal,
  	width: 150, 
  	height: 25,
  	right: layoutMarginNormal
});
loginView.add(passwordTextField);

// Button for login
var loginButton = Ti.UI.createButton({
	title: "Login",
	font: {fontSize:16},
	top: passwordTextField.top + passwordTextField.height + layoutMarginNormal,
	left: passwordTextField.left
});
loginView.add(loginButton);

// Button for create account
var createAccountButton = Ti.UI.createButton({
	title: "Create Account",
	font: {fontSize:12},
	top: passwordTextField.top + passwordTextField.height + layoutMarginNormal + layoutMarginSmall,
	right: layoutMarginNormal
});
loginView.add(createAccountButton);

mainWindow.add(loginView);

navWindow.open();


