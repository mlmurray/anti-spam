if (localStorage.getItem("toggle") === undefined || localStorage.getItem("toggle") === null) {
    localStorage.setItem("toggle", "true");
    console.log('SETTING KEY');
}

console.log('start, toggle =' + localStorage.getItem("toggle"));

chrome.browserAction.onClicked.addListener(function (tab) {
    var toggle = localStorage.getItem("toggle");
    if (localStorage.getItem("toggle") == "false") {
        console.log('SETON');


        chrome.browserAction.setIcon({
            path: "img/on.png",
            tabId: tab.id
        });
        chrome.tabs.executeScript(tab.id, {
            file: "js/main.js"
        });
        localStorage.setItem("toggle", "true");
    } else if (localStorage.getItem("toggle") == "true") {
        console.log('SETOFF');
        chrome.browserAction.setIcon({
            path: "img/off.png",
            tabId: tab.id
        });
        chrome.tabs.executeScript(tab.id, {
            code: ""
        });
        localStorage.setItem("toggle", "false");
    }
});


chrome.tabs.onUpdated.addListener(function (tab) {
    var toggle = localStorage.getItem("toggle");
    if (localStorage.getItem("toggle") == "true") {
        console.log('created ON ' + localStorage.getItem("toggle"));


        chrome.browserAction.setIcon({
            path: "img/on.png"
        });
        chrome.tabs.executeScript(tab.id, {
            file: "js/main.js",
        });
    } else if (localStorage.getItem("toggle") == "false") {
        console.log('created OFF ' + localStorage.getItem("toggle"));
        chrome.browserAction.setIcon({
            path: "img/off.png"
        });
        chrome.tabs.executeScript(tab.id, {
            code: "",
        });
    }
})


chrome.tabs.onSelectionChanged.addListener(function (tab) {
    var toggle = localStorage.getItem("toggle");
    if (localStorage.getItem("toggle") == "true") {
        console.log('created ON ' + localStorage.getItem("toggle"));


        chrome.browserAction.setIcon({
            path: "img/on.png"
        });
        chrome.tabs.executeScript(tab.id, {
            file: "js/main.js",
        });
    } else if (localStorage.getItem("toggle") == "false") {
        console.log('created OFF ' + localStorage.getItem("toggle"));
        chrome.browserAction.setIcon({
            path: "img/off.png"
        });
        chrome.tabs.executeScript(tab.id, {
            code: "",
        });
    }
})

chrome.tabs.onActivated.addListener(function (tab) {
    var toggle = localStorage.getItem("toggle");
    if (localStorage.getItem("toggle") == "true") {
        console.log('created ON ' + localStorage.getItem("toggle"));


        chrome.browserAction.setIcon({
            path: "img/on.png"
        });
        chrome.tabs.executeScript(tab.id, {
            file: "js/main.js",
        });
    } else if (localStorage.getItem("toggle") == "false") {
        console.log('created OFF ' + localStorage.getItem("toggle"));
        chrome.browserAction.setIcon({
            path: "img/off.png"
        });
        chrome.tabs.executeScript(tab.id, {
            code: "",
        });
    }
})