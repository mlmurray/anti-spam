// Function that will be inserted into web page
var disablerFunction = function () {

    // console log styling
    var icon_style = [
        'background-image: url("https://github.com/simondriesen/exit-tab/blob/master/img/icon-16.png?raw=true")',
        'background-size: 14px',
        'background-repeat: no-repeat',
        'padding-left: 14px',
        'margin-right: 3px'
    ].join(';');

    var type_style = [
        'color: #333',
        'font-weight: bold'
    ].join(';');

    var text_style = [
        'color: #333'
    ].join(';');

    var message_style = [
        'color: #000',
        'background-color: #f8f8f8',
        'font-style: italic',
        'padding: 0 5px',
        'font-size: 0.9em',
        'text-transform: lowercase'

    ].join(';');

    var trigger_url = document.URL;

    // block confirm exit pop up
    setInterval(function () {
        window.onbeforeunload = null;
        document.fullscreenEnabled = function(){return false};
    }, 50);

    // overwriting alert pop up
    window.alert = function alert (message) {
        console.info('%c' + '%cALERT BLOCKED: ' + '%c' + trigger_url + ' tried to triggered an alert showing: ' + '%c' + message,
            icon_style, type_style, text_style, message_style);
    };

    // overwriting open new tab/window function
    window.open = function(url){
        console.info('%c' + '%cREDIRECT BLOCKED: ' + '%c' + trigger_url + ' tried to triggered a javascript redirect to: '+ url,
            icon_style, type_style, text_style);
    };

    // overwriting full screen function
    document.documentElement.webkitRequestFullscreen = function () {
        console.info('%c' + '%cFULL SCREEN BLOCKED: ' + '%c' + trigger_url + ' tried to go full screen',
            icon_style, type_style, text_style);
        return null
    };
};

// Making a string of the function
var disablerCode = "(" + disablerFunction.toString() + ")();";

// Creating a script DOM element and putting disablerFunction in it
var disablerScriptElement = document.createElement('script');
disablerScriptElement.type = "text/javascript";
disablerScriptElement.textContent = disablerCode;

// Inserting script into html element
document.documentElement.appendChild(disablerScriptElement);

// Removing script since it has executed already
document.documentElement.removeChild(disablerScriptElement);