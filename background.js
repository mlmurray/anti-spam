if (localStorage.getItem("toggle") === undefined || localStorage.getItem("toggle") === null) {
    localStorage.setItem("toggle", "true");
}

chrome.browserAction.onClicked.addListener(function (tab) {
    var toggle = localStorage.getItem("toggle");
    if (toggle == "false") {
        console.log('SETON');
        localStorage.setItem("toggle", "true");
        updateIcon(tab);
    } else if (toggle == "true") {
        console.log('SETOFF');
        localStorage.setItem("toggle", "false");
        updateIcon(tab);
    }
});

chrome.tabs.onUpdated.addListener(function (tab) {updateIcon(tab)});
chrome.tabs.onActivated.addListener(function (tab) {updateIcon(tab)});

function updateIcon(tab) {
    var toggle = localStorage.getItem("toggle");
    if (toggle == "true") {
        chrome.browserAction.setIcon({
            path: "img/on.png"
        });
        chrome.tabs.executeScript(tab.id, {
            file: "js/main.js",
        });
    } else if (toggle == "false") {
        chrome.browserAction.setIcon({
            path: "img/off.png"
        });
        chrome.tabs.executeScript(tab.id, {
            code: "",
        });
    }
}