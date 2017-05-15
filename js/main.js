// Script that will be inserted into web page
var disablerFunction = function () {
    setInterval(function () {
        window.onbeforeunload = null;
    }, 50);
};

// Making a string of the function
var disablerCode = "(" + disablerFunction.toString() + ")();";

// Creating a script DOM element and putting disablerFunction in it
var disablerScriptElement = document.createElement('script');
disablerScriptElement.textContent = disablerCode;

// Inserting script into html element
document.documentElement.appendChild(disablerScriptElement);

// Removing script since it has executed already
disablerScriptElement.parentNode.removeChild(disablerScriptElement);

// Blocks javascript alerts
addJS_Node (null, null, overrideSelectNativeJS_Functions);

function addJS_Node (text, s_URL, funcToRun) {
    var D                                   = document;
    var scriptNode                          = D.createElement ('script');
    scriptNode.type                         = "text/javascript";
    if (text)       scriptNode.textContent  = text;
    if (s_URL)      scriptNode.src          = s_URL;
    if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (scriptNode);
}

function overrideSelectNativeJS_Functions () {
    window.alert = function alert (message) {
        console.log (message);
    }
}