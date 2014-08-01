// Display user info page
var displayInfoWindow = Ti.UI.currentWindow;

// Local variables
var layoutMarginSmall = 4,
	layoutMarginNormal = 8,
	pWidth = Ti.Platform.displayCaps.getPlatformWidth();
	
// Main view for window contents
var displayAccountView = Ti.UI.createView({
	center: true,
	backgroundColor: "#fff",
	height: "45%",
	width: "80%",
	center: true,
	borderColor : "#000",
	borderWidth : 1,
	borderRadius: 8
});

// View to display labels
var labelView = Ti.UI.createView({
	layout : "vertical"
});

// Label for username
var usernameLabel = Ti.UI.createLabel({
	text: "Username:",
	font: {fontSize:18, fontWeight:"bold"},
	color : "#000",
	top: layoutMarginNormal
});
labelView.add(usernameLabel);

// Username data
var usernameTextField = Ti.UI.createLabel({
	text: displayInfoWindow.userData.users.username,
	font: {fontSize:14},
  	color: "#888",
	top: layoutMarginSmall
});
labelView.add(usernameTextField);

// Label for password
var passwordLabel = Ti.UI.createLabel({
	text: "Password:",
	font: {fontSize:18, fontWeight:"bold"},
	color : "#000",
	top: layoutMarginNormal
});
labelView.add(passwordLabel);

// Password data
var passwordTextField = Ti.UI.createLabel({
	text: displayInfoWindow.userData.users.password,
	font: {fontSize:14},
  	color: "#888",
	top: layoutMarginSmall
});
labelView.add(passwordTextField);

// Label for first name
var firstNameLabel = Ti.UI.createLabel({
	text: "First Name:",
	font: {fontSize:18, fontWeight:"bold"},
	color : "#000",
	top: layoutMarginNormal
});
labelView.add(firstNameLabel);

// First Name data
var firstNameTextField = Ti.UI.createLabel({
	text: displayInfoWindow.userData.users.firstName,
	font: {fontSize:14},
  	color: "#888",
	top: layoutMarginSmall
});
labelView.add(firstNameTextField);

// Label for last name
var lastNameLabel = Ti.UI.createLabel({
	text: "Last Name:",
	font: {fontSize:18, fontWeight:"bold"},
	color : "#000",
	top: layoutMarginNormal
});
labelView.add(lastNameLabel);

// Last Name data
var lastNameTextField = Ti.UI.createLabel({
	text: displayInfoWindow.userData.users.lastName,
	font: {fontSize:14},
  	color: "#888",
	top: layoutMarginSmall
});
labelView.add(lastNameTextField);

displayAccountView.add(labelView);

displayInfoWindow.add(displayAccountView);

