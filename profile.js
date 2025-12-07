var PATH_CSSFile = "https://bobbinz.github.io/TelehackProfile/smpte.css";

var objLinkElement = document.createElement("link");
objLinkElement.setAttribute("rel", "stylesheet");
objLinkElement.setAttribute("type", "text/css");
objLinkElement.setAttribute("href", PATH_CSSFile);

document.getElementsByTagName("head")[0].appendChild(objLinkElement);

var objElement;

objElement = document.createElement('div');
objElement.id = "scan";
document.getElementsByTagName("body")[0].appendChild(objElement);

objElement = document.createElement('div');
objElement.id = "static";
document.getElementsByTagName("body")[0].appendChild(objElement);
