var xhr = new XMLHttpRequest();
var urlLibrary = "https://raw.githubusercontent.com/JavierJH99/IDI/master/Libraries/systemUtils.json";

var listAnswer = document.getElementsByClassName("answer");
const removeElementsByClass = getFunctionLibrary("removeElementsByClass()");

setTimeout(() => {
    for (let i = 0; i < listAnswer.length; i++) {
        for (let j = 0; j < listAnswer.item(i).childNodes.length; j++) {
            if(listAnswer.item(i).childNodes.item(j).firstChild != null){
                //.removeAttribute("disabled")
                listAnswer.item(i).childNodes.item(j).firstChild.removeAttribute("disabled");
                // .removeAttribute("checked")
                listAnswer.item(i).childNodes.item(j).firstChild.removeAttribute("checked");
            }
        }
    }

    removeElementsByClass("icon fa fa-check text-success fa-fw ");
})

function getFunctionLibrary(functionName) {
    xhr.open("GET", urlLibrary, false);
    xhr.send();
    var textFunction = JSON.parse(xhr.responseText);
    var parsedFunction = new Function(textFunction[functionName].parametros, textFunction[functionName].definicion)

    return parsedFunction;
}