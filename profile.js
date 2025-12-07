var PATH_CSSFile = "smpte.css";

var objLinkElement = document.createElement("link");
objLinkElement.setAttribute("rel", "stylesheet");
objLinkElement.setAttribute("type", "text/css");
objLinkElement.setAttribute("href", PATH_CSSFile);

document.getElementsByTagName("head")[0].appendChild(objLinkElement);