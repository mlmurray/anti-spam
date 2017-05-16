// Script that will be inserted into web page
var disablerFunction = function () {
    setInterval(function () {
        window.onbeforeunload = null;
    }, 50);
    window.alert = function alert (message) {
        console.info ("alert: " + message);
    }
};

// Making a string of the function
var disablerCode = "(" + disablerFunction.toString() + ")();";

// Creating a script DOM element and putting disablerFunction in it
var disablerScriptElement = document.createElement('script');
disablerScriptElement.textContent = disablerCode;
disablerScriptElement.type = "text/javascript";

// Inserting script into html element
document.documentElement.appendChild(disablerScriptElement);

// Removing script since it has executed already
disablerScriptElement.parentNode.removeChild(disablerScriptElement);