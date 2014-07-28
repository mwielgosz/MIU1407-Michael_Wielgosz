// Phone Spec Page
var phoneSpecWindow = Ti.UI.currentWindow;

var pWidth = Ti.Platform.displayCaps.getPlatformWidth(),
	pHeight = Ti.Platform.displayCaps.getPlatformHeight(),
	layoutMarginSmall = 4,
	layoutMargin = 8;

var basicView = Ti.UI.createView({
	layout : "vertical",
	top : layoutMarginSmall,
	width : pWidth
});

// Image view to hold phone image
var phoneImageView = Ti.UI.createImageView({
	image : phoneSpecWindow.phoneData.image,
	height : "40%",
});

var basicInfoLabel = Ti.UI.createLabel({
	text : "OS Version: " + phoneSpecWindow.phoneData.os_version + "\nMSRP: " + phoneSpecWindow.phoneData.msrp,
	font : { fontSize : 12 },
	textAlign : "center",
	top : layoutMargin
});

// Table view for phone specifications
var phoneSpecTable = Ti.UI.createTableView({
	style : Ti.UI.iPhone.TableViewStyle.GROUPED,
	backgroundImage: "background.png",
	backgroundRepeat : true,
	top : layoutMarginSmall,
	bottom : layoutMarginSmall,
	height: "auto",
	showVerticalScrollIndicator: true
});

// Loop to fill in table
for (var i in phoneSpecWindow.phoneData.specs) {

	var phoneSpecTableTitleRow = Titanium.UI.createTableViewRow({
		title : phoneSpecWindow.phoneData.specs[i].title,
		hasDetail : true,
		rowInfo : ""
	});

	// Dynamically create each table view row
	rowInfo = [];
	for (var i2 = 0; i2 < phoneSpecWindow.phoneData.specs[i].info.length; i2++) {
		console.log("row title: " + phoneSpecWindow.phoneData.specs[i].info[i2]);
		rowInfo[i2] = phoneSpecWindow.phoneData.specs[i].info[i2];
	}
	
	phoneSpecTableTitleRow.rowInfo = rowInfo;
	phoneSpecTable.appendRow(phoneSpecTableTitleRow);
}

// Event Listener to display phone spec in Alert Dialog
phoneSpecTable.addEventListener('click', function(e) {
	
	// Parse data properly
	var displayedInfo = "";
	for (var i in e.source.rowInfo) {
		displayedInfo = displayedInfo + e.source.rowInfo[i] + "\n";
	}
	
	// Alert Dialog message
	var dialog = Ti.UI.createAlertDialog({
		message : displayedInfo,
		ok : "Close",
		title : e.source.title
	}).show();
});

// Add all views to window
basicView.add(phoneImageView);
basicView.add(basicInfoLabel);
basicView.add(phoneSpecTable);

phoneSpecWindow.add(basicView);

