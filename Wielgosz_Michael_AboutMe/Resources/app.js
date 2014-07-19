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
	title : "About Me",
	backgroundColor : bgColor,
	backgroundImage : bgImage,
	backgroundRepeat : true
});

// NavigationWindow object for iOS
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow
});

// Function for TableViewRow clicks
var displayAnswerView = function(dataSource) {

    // Window for description
    var answerWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        backgroundImage: "background.png",
        backgroundRepeat: true,
        title: dataSource.title,
        layout: "vertical"
    });

    // Label for question
    var answerQuestion = Ti.UI.createLabel({
        text: dataSource.question,
        font: {fontSize: 20},
        textAlign: "center",
        color: "#000",
        top: 5,
        left: 5,
        right: 5
    });

    // Label to display question answer
    var answerLabel = Ti.UI.createLabel({
        text: dataSource.answer,
        font: {fontSize: 14},
        color: "#333",
        textAlign: "center",
        top: 10,
        left: 5,
        right: 5
    });

    // Add each window element
    answerWindow.add(answerQuestion);
    answerWindow.add(answerLabel);

    navWindow.openWindow(answerWindow);
};

// Table view for JSON content
var questionTable = Ti.UI.createTableView({
	style : Ti.UI.iPhone.TableViewStyle.GROUPED,
	top : 0
});

// Loop to fill in table
for (var i = 0; i < jsonData.length; i++) {
	// Table view section
	var questionSection = Ti.UI.createTableViewSection({
		headerTitle : "Questions about me",
		top : 0
	});

	// Secondary loop for question/answer content
	for (i2 in jsonData[i]) {
		// Dynamically create each table view row
		var questionTableRow = Ti.UI.createTableViewRow({
			title : jsonData[i][i2].short_question,
			question: jsonData[i][i2].question,
			answer: jsonData[i][i2].answer,
			hasChild : true
		});

		// Add row to section
		questionSection.add(questionTableRow);
	}
}

// Append TableSection to TableView
questionTable.appendSection(questionSection);

// Event listener for table
questionTable.addEventListener("click", function(clickEvent){
	displayAnswerView(clickEvent.source);
});

mainWindow.add(questionTable);

navWindow.open();
