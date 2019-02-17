const openDyslexic = {
    init() {
	chrome.browserAction.onClicked.addListener(function(tab) {
	    chrome.tabs.insertCSS({
		file: 'styles/core/opendyslexic.css',
		allFrames: true
	    });
	});
    },
    reloadPage() {
        const script = 'window.location.reload();';
        chrome.tabs.executeScript({
	    code: script
        });
    }
};

openDyslexic.init();
