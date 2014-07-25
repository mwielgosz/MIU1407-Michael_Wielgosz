// Phone Spec Page
var phoneSpecWindow = Ti.UI.currentWindow;

var pWidth = Ti.Platform.displayCaps.getPlatformWidth(),
	pHeight = Ti.Platform.displayCaps.getPlatformHeight(),
	layoutMarginSmall = 4,
    layoutMargin = 8;
    
var basicView = Ti.UI.createView({
	layout: "vertical",
	top: layoutMarginSmall,
	//width: pWidth,
	//contentHeight: pHeight,
	//contentWidth: pWidth,
	//showVerticalScrollIndicator: true
});

// Image view to hold phone image
var phoneImageView = Ti.UI.createImageView({
    image: phoneSpecWindow.phoneData.image,
    height: "40%",
});

var basicInfoLabel = Ti.UI.createLabel({
	text: "OS Version: " + phoneSpecWindow.phoneData.os_version + "\nMSRP: " + phoneSpecWindow.phoneData.msrp,
	font: {fontSize: 12},
	textAlign: "center",
	top: layoutMargin
});
    
// Table view for phone specifications
var phoneSpecTable = Ti.UI.createTableView({
	style : Ti.UI.iPhone.TableViewStyle.PLAIN,
	top : layoutMarginSmall,
	bottom: layoutMarginSmall
});

addRemoveSection = function(dataSource) {
	if(phoneSpecTable.getVisible()){
		phoneSpecTable.hide();
		//phoneSpecTable.removeSection(dataSource);
	}
};

// Loop to fill in table
for(var i in phoneSpecWindow.phoneData.specs) {
	console.log("headerTitle: " + phoneSpecWindow.phoneData.specs[i].title);
	
	var phoneSpecSection = Ti.UI.createTableViewSection({
		headerTitle: phoneSpecWindow.phoneData.specs[i].title
	});
	
    // Dynamically create each table view row
    for(var i2=0; i2 < phoneSpecWindow.phoneData.specs[i].spec.length; i2++){
    	console.log("row title: " + phoneSpecWindow.phoneData.specs[i].spec[i2]);
    	
    	var phoneSpecTableRow = Titanium.UI.createTableViewRow({
    		title: phoneSpecWindow.phoneData.specs[i].spec[i2]    		
		});
		
		phoneSpecSection.add(phoneSpecTableRow);
		
        }
        
        /*phoneSpecSection.addEventListener("click", function(clickEvent){
        	addRemoveSection(clickEvent.source);
        });*/
        phoneSpecTable.appendSection(phoneSpecSection);
}

// Event listener for table
phoneSpecTable.addEventListener("click", function(clickEvent){
    addRemoveSection(clickEvent.source);
});


basicView.add(phoneImageView);
basicView.add(basicInfoLabel);
basicView.add(phoneSpecTable);

phoneSpecWindow.add(basicView);


