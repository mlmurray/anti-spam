//chrome.browserAction.onClicked.addListener(function(tab) {
//    setTimeout(function(){ chrome.tabs.remove(tab.id); }, 1);
//});


var toggle = false;
chrome.browserAction.onClicked.addListener(function (tab) {
    toggle = !toggle;
    if (toggle) {
        chrome.browserAction.setIcon({
            path: "img/on.png",
            tabId: tab.id
        });
        chrome.tabs.executeScript(tab.id, {
            file: "js/main.js"
        });
    } else {
        chrome.browserAction.setIcon({
            path: "img/off.png",
            tabId: tab.id
        });
        chrome.tabs.executeScript(tab.id, {
            code: ""
        });
    }
});
