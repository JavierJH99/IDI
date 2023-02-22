const processText = getFunctionLibrary("processText()");
const getOpciones = getFunctionLibrary("getOpciones()");
const getBBDD = getFunctionLibrary("getBBDD()");

var xhr = new XMLHttpRequest();
var urlStringBBDD = "https://raw.githubusercontent.com/JavierJH99/IDI/master/MF1442.json";
var urlLibrary = "https://raw.githubusercontent.com/JavierJH99/IDI/master/systemUtils.json";
var bbdd = JSON.parse(getBBDD(urlStringBBDD))

var listQtext = document.getElementsByClassName("qtext");
var listAnswer = document.getElementsByClassName("answer");
var color = "0000FF";

setTimeout(() => {
    Object.entries(bbdd).forEach(([key, value]) => {
        newKey = processText(key)
        delete bbdd[key];
        bbdd[newKey] = value;
    })

    for (let i = 0; i < listQtext.length; i++) {
        let respuestas = (bbdd[processText(listQtext.item(i).textContent)]);
        if (respuestas != undefined) {
            listQtext.item(i).setAttribute("style", "color:#" + color);
            let opciones = getOpciones(2, listAnswer.item(i).childNodes);

            document.getElementsByClassName("qtext").item(i).onclick = function (event) {
                if (event === undefined) event = window.event;
                for (let j = 0; j < opciones.length; j++) {
                    if (processText(respuestas).includes(processText(opciones[j]))) {
                        document.getElementsByClassName("answer").item(i).childNodes[j * 2].childNodes[0].click();
                        listAnswer.item(i).childNodes[j * 2].childNodes[1].setAttribute("style", "color:#" + color);
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