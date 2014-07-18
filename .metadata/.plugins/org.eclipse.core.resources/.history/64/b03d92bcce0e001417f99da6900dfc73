/*
 * Michael Wielgosz
 * MIU Term: 1407
 * About Me app
 */

// Global variables
var bgColor = "#202020",
    bgImage = "background.png",
	loadJsonData = require("json"),
    jsonData = loadJsonData.json;

// Main app window
var mainWindow = Ti.UI.createWindow({
    title: "Top Smartphones",
    backgroundColor: bgColor,
    backgroundImage: bgImage,
    backgroundRepeat: true
});

// NavigationWindow object for iOS
var navWindow = Ti.UI.iOS.createNavigationWindow({
    window: mainWindow
});

// Function to dynamically open windows
var openPageWindow = function() {
    var pageWindow = Ti.UI.createWindow({
        backgroundColor: bgColor,
        backgroundImage: bgImage,
        backgroundRepeat: true,
        title: this.text,
        url: this.windowURL,
        nav: navWindow
    });

    navWindow.openWindow(pageWindow);
};

// Table view for JSON content
var questionTable = Ti.UI.createTableView({
    style: Ti.UI.iPhone.TableViewStyle.GROUPED,
    top: 0
});

// Loop to fill in question table
for(var i=0; i < jsonData.length; i++) {
	
	// Table view section
	var questionSection = Ti.UI.createTableViewSection({
		headerTitle: "Questions about me",
		top: 0
	});

	for(i2 in jsonData[i]){
	
    // Dynamically create each table view row
    var questionTableRow = Ti.UI.createTableViewRow({
        title: jsonData[i][i2].question,
        desc: jsonData[i][i2].question,
        hasDetail: true
    });

    // Add row to section
    questionSection.add(questionTableRow);
    console.log(jsonData[i][i2].question);
   }
}

// Fill table with data
questionTable.appendSection(questionSection);

// Event listener for table
/*questionTable.addEventListener("click", function(clickEvent){
    displayDescriptionView(clickEvent.source);
});*/


mainWindow.add(questionTable);

navWindow.open();
