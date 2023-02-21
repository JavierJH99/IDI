var xhr = new XMLHttpRequest();
var urlString = "https://raw.githubusercontent.com/JavierJH99/IDI/master/MF1442.json";
var bbdd = JSON.parse(getBBDD())

var listQtext = document.getElementsByClassName("qtext");
var listAnswer = document.getElementsByClassName("answer");
var color = "0000FF";

setTimeout(() => {
    Object.entries(bbdd).forEach(([key,value]) => {
        newKey = processText(key)
        delete bbdd[key];
        bbdd[newKey] = value;
    })
    
    for (let i = 0; i < listQtext.length; i++) {
        let respuestas = (bbdd[processText(listQtext.item(i).innerText)]);
        if (respuestas != undefined) {
            listQtext.item(i).setAttribute("style", "color:#" + color);
            let opciones = getOpciones(listAnswer.item(i).childNodes);

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

function getBBDD() {
    xhr.open("GET", urlString, false);
    xhr.send(null);
    return xhr.responseText;
}

function processText(text) {
    if (Array.isArray(text)) {
        let textArray = [];

        text.forEach(element => {
            textArray.push(processText(element));
        });

        return textArray;
    }
    else {
        return text.replace(/\s+/gm, " ").trim();
    }
}

function getOpciones(nodos) {
    opciones = []
    for (let element of nodos) {
        if (element.nodeType === Node.ELEMENT_NODE) opciones.push(processText(element.textContent.slice(3)));
    }
    return opciones;
}

