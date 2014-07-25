/*
 * Michael Wielgosz
 * Mobile Interfaces & Usability
 * Term 1407
 * Informational App
 */

// Global variables
var bgColor = "#202020",
	bgImage = "background.png",
    pWidth = Ti.Platform.displayCaps.getPlatformWidth(),
    layoutMarginSmall = 4,
    layoutMargin = 8,
    imagesPerRow = 2,
    imageContainerWidth = pWidth - (layoutMargin * 2),
    thumbnailSize = (imageContainerWidth / imagesPerRow),
    loadJsonData = require("phoneData"),
	phoneDataJson = loadJsonData.phoneDataJson;
	
// Main app window
var mainWindow = Ti.UI.createWindow({
	title : "Top Smartphones",
	backgroundColor : bgColor,
	backgroundImage : bgImage,
	backgroundRepeat : true
});

// NavigationWindow object for iOS
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow
});

// Function to open Phone Specification Info window
var openSpecWindow = function() {
		
    var specWindow = Ti.UI.createWindow({
        backgroundColor: bgColor,
        backgroundImage: bgImage,
        backgroundRepeat: true,
        title: this.singlePhoneData.phone_name,
        url: "phoneInfo.js",
        phoneData: this.singlePhoneData
    });

    navWindow.openWindow(specWindow);
};

// Scroll view container for grid view
var phoneGridContainer = Ti.UI.createScrollView({
    top: layoutMargin,
    bottom: layoutMargin,
    left: layoutMargin,
    right: layoutMargin,
    layout: "horizontal",
    width: imageContainerWidth,
    contentWidth: imageContainerWidth,
    showVerticalScrollIndicator: true,
    borderRadius: layoutMargin,
    borderColor: "#000",
    borderWidth: 1
});

// Add each phone image & name to the phoneGridContainer
for (var i in phoneDataJson) {
    var phoneImage = phoneDataJson[i].image,
    	phoneName = phoneDataJson[i].phone_name;
    	    
    // View to contain each image
    var imageWrapper = Ti.UI.createView({
        layout: "vertical",
        width: thumbnailSize,
        height: thumbnailSize,
        backgroundColor: "#5ac8fa",
        borderColor: "#000",
        borderWidth: 1,
        singlePhoneData: phoneDataJson[i]
        
    });
    
    // Image view to add image into container
    var image = Ti.UI.createImageView({
        image: phoneImage,
        top: layoutMarginSmall,
        height: thumbnailSize - (layoutMargin * 3)
    });
    
    // Label for phone name
    var imageLabel = Ti.UI.createLabel({
    	text: phoneName,
    	font: {fontSize: 10},
    	color: "#000",
    	textAlign: "center",
    	top: layoutMarginSmall
    });
    
    // Event listener for each phone element
    imageWrapper.addEventListener("click", openSpecWindow);

    imageWrapper.add(image);
    imageWrapper.add(imageLabel);

    phoneGridContainer.add(imageWrapper);
}

mainWindow.add(phoneGridContainer);

navWindow.open();
