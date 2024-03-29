/*
-----------------------------------------------------------------------------
-------------- Documentation for systemUtils.json library file --------------
--- Created: 21/02/2023
--- Last Updated: 22/02/2023
-----------------------------------------------------------------------------
*/


//Params:
//  Text: Texto sin formatear, con espacios duplicados, espacio inicial y final
//      String: Una cadena de carácteres sin procesar.
//      Array [String]: Vector de cadenas de carácteres sin procesar.
//Return:
//      String: Cadena de carácteres procesada.
//      Array [String]: Vector de cadenas de carácteres procesadas. 
function processText(text) {
    if (Array.isArray(text)) {
        let textArray = [];

        text.forEach(element => {
            textArray.push(element.replace(/\s+/gm, ' ').trim());
        });

        return textArray;
    }
    else {
        return text.replace(/\s+/gm, " ").trim();
    }
}


//Params:
//  Type: Número que identifica el funcionamiento de la función
//      1: (Utilizado en Javascript getCorrectAnswer.js)
//      2: (Utilizado en Javascript mantia.js)
//  Nodos: childNodes de la pregunta del test (divHTML)
//Return:
//  Si 1: Array con todas las opciones correctas para una pregunta encontradas en la revisión. En caso de no encontrar devuelve un string "undefined"
//  Si 2: Array con todas las opciones posibles para una pregunta encontrada en un test.
function getOpciones(type, nodos) {
    if (type == 1) {
        let correctas = [];
        let incorrect = 0;

        for (let element of nodos) {
            if (element.nodeType === Node.ELEMENT_NODE && element.getAttribute('class').includes(' correct')) correctas.push(element.textContent.slice(3));
            else incorrect++;
        }

        if (incorrect == nodos.length) return 'undefined';
        else return correctas;
    }
    else if (type == 2) {
        opciones = [];
        for (let element of nodos) {
            if (element.nodeType === Node.ELEMENT_NODE) opciones.push(processText(element.textContent.slice(3)));
        }
        return opciones;
    }
}


//Params:
//  json1: Objeto json para concatenar
//  json2: Objeto json para concatenar
//Return: Objeto json que contiene json1 y json2 concatenados
function jsonConcat(json1, json2) {
    Object.entries(json2).forEach(([key, value]) => {
        json1[key] = value;
    });
    return json1;
}


//Params:
//  urlStringGit: String que hace referencia a la URL de GitHub donde se encuentra el RAW del archivo json con las respuestas de tests anteriores
//  currentJson: Objeto json que contiene las respuestas al test en que se ha ejecutado el código
//Return: Objeto json que concatena los tests que ya estaban almacenados en GitHub, con el test en que se ha ejecutado el código
function updateJson(urlStringGit, currentJson) {
    xhr.open("GET", urlStringGit, false);
    xhr.send(null);

    let oldJson = JSON.parse(xhr.responseText);

    return jsonConcat(oldJson, currentJson);
}


//Params:
//  urlStringTelegram:  String que hace referencia a la URL dónde se encuentra alojado el bot de Telegram
//  text: String que se mandará como mensaje mediante un bot de Telegram
//Return:
function sendToTelegram(urlStringTelegram, text) {
    xhr.open("GET", urlStringTelegram + `&text=${text}`);
    xhr.send();
}


//Params: 
//  urlStringBBDD: String que hace referencia a la URL dónde se encuentra alojado el objeto JSON que contiene las respuestas a los tests de un módulo
//Return: Objeto JSON con todas las preguntas-respuestas almacenadas.
function getBBDD(urlStringBBDD) {
    xhr.open("GET", urlStringBBDD, false);
    xhr.send(null);
    return xhr.responseText;
}


//Params:
//  respuestaPrompt: Caracter que hacer referencia a una opción del test.
//Return: Identificador numérico que hace referencia a la opción seleccionada.
function elegirOpcion(respuestaPrompt) {
    let opcionElegida = {
        "a" : 0,
        "b" : 1,
        "c" : 2,
        "d" : 3,
        "e" : 4,
        "f" : 5
    };

    return opcionElegida[respuestaPrompt] || 999;
}


//Params:
//  className: String que hace referencia al nombre de Clase de los elementos HTML
//Return: Elimina todos los elementos HTML cuyo nombre de clase coincida con el pasado por parámetros
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}