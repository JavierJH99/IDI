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
            textArray.push(processText(element));
        });

        return textArray;
    }
    else {
        return text.replace(/\s+/gm, " ").trim();
    }
}


//Params:
//  Type: Número que identifica el javascript que quiere hacer la llamada
//      1: Javascript getCorrectAnswer.js
//      2: Javascript mantia.js
//  Nodos: childNodes de la pregunta del test (divHTML)
//Return: Array con todas las opciones de la pregunta.
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