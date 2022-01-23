// browser action loads the icon into the toolbar

// called when user clicks on the browser action
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {'message':'clicked_browser_action'});
    });
});

// listen for browser action message url from content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message==="open_new_tab") {
            chrome.tabs.create({"url":request.url});
        }
    }
)