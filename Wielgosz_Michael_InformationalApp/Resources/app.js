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

// Add each thumbnail to the galleryContainer
for (var i in phoneDataJson) {
    var fileName = phoneDataJson[i].image,
    	phoneName = phoneDataJson[i].phone_name;
    
    // View to contain each image
    var imageWrapper = Ti.UI.createView({
        layout: "vertical",
        width: thumbnailSize,
        height: thumbnailSize,
        backgroundColor: "#5ac8fa",
        borderColor: "#000",
        borderWidth: 1
    });
    
    // Image view to add image into container
    var image = Ti.UI.createImageView({
        image: fileName,
        top: layoutMarginSmall,
        height: thumbnailSize - (layoutMargin * 3)
    });
    
    var imageLabel = Ti.UI.createLabel({
    	text: phoneName,
    	font: {fontSize: 10},
    	color: "#000",
    	textAlign: "center",
    	top: layoutMarginSmall
    });

    imageWrapper.add(image);
    imageWrapper.add(imageLabel);

    phoneGridContainer.add(imageWrapper);
}

mainWindow.add(phoneGridContainer);

navWindow.open();
