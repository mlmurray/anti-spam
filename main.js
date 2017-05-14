chrome.browserAction.onClicked.addListener(function(tab) {
    setTimeout(function(){ chrome.tabs.remove(tab.id); }, 1);
});