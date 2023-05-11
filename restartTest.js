var xhr = new XMLHttpRequest();
var urlLibrary = "https://raw.githubusercontent.com/JavierJH99/IDI/master/Libraries/systemUtils.json";
var urlStringBBDD = "https://raw.githubusercontent.com/JavierJH99/IDI/master/Data/MF1445_MF1446.json";

const removeElementsByClass = getFunctionLibrary("removeElementsByClass()");
const processText = getFunctionLibrary("processText()");
const getOpciones = getFunctionLibrary("getOpciones()");
const getBBDD = getFunctionLibrary("getBBDD()");

var bbdd = JSON.parse(getBBDD(urlStringBBDD))
var listQtext = document.getElementsByClassName("qtext");
var listAnswer = document.getElementsByClassName("answer");
var green = "008800";  //Color verde
var red = "FF0000"; //Color rojo
var blue = "0000FF"; //Color azul

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
    removeElementsByClass("icon fa fa-remove text-danger fa-fw ");
})


setTimeout(() => {
    Object.entries(bbdd).forEach(([key, value]) => {
        newKey = processText(key)
        delete bbdd[key];
        bbdd[newKey] = value;
    })

    for (let i = 0; i < listQtext.length; i++) {
        let respuestas = (bbdd[processText(listQtext.item(i).textContent)]);
        if (respuestas != undefined) {            
            let opciones = getOpciones(2, listAnswer.item(i).childNodes);

            document.getElementsByClassName("qtext").item(i).onclick = function (event) {
                if (event === undefined) event = window.event;
                listQtext.item(i).setAttribute("style", "color:#" + blue);
                for (let j = 0; j < opciones.length; j++) {
                    if (processText(opciones[j]).includes(processText(respuestas))) {
                        listAnswer.item(i).childNodes[j * 2].childNodes[1].setAttribute("style", "color:#" + green);
                    }
                    else {
                        listAnswer.item(i).childNodes[j * 2].childNodes[1].setAttribute("style", "color:#" + red);
                    }
                }
            };
            
        }
        else {
            console.log("[" + (i + 1) + "] No encontrada.\nEnunciado: " + processText(listQtext.item(i).innerText));
        }
    }
})

function getFunctionLibrary(functionName) {
    xhr.open("GET", urlLibrary, false);
    xhr.send();
    var textFunction = JSON.parse(xhr.responseText);
    var parsedFunction = new Function(textFunction[functionName].parametros, textFunction[functionName].definicion)

    return parsedFunction;
}