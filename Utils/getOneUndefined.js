var xhr = new XMLHttpRequest();
var urlLibrary = "https://raw.githubusercontent.com/JavierJH99/IDI/master/Libraries/systemUtils.json";
var listQtext = document.getElementsByClassName("qtext");
var listAnswer = document.getElementsByClassName("answer");
var existeRespuesta = false

const getOpciones = getFunctionLibrary("getOpciones()");
const processText = getFunctionLibrary("processText()");
const elegirOpcion = getFunctionLibrary("elegirOpcion()")

var pregunta = -1;
while (pregunta >= listQtext.length || pregunta < 0) {
    pregunta = parseInt(window.prompt("Pregunta", "")) - 1;
    if (pregunta >= listQtext.length || pregunta < 0) {
        if (!confirm("Número de pregunta incorrecto.")) {
            throw "Salida";
        }
    }
}

var opciones = getOpciones(2, listAnswer.item(pregunta).childNodes);
if (opciones !== null) {
    var respuesta = -1;
    while (respuesta >= opciones.length || respuesta < 0) {
        respuestaElegida = window.prompt("Qué respuesta quieres obtener para la pregunta\n" + "[" + (pregunta + 1) + "] " + listQtext.item(pregunta).textContent);
        respuesta = elegirOpcion(respuestaElegida);
        if (respuesta >= opciones.length || respuesta < 0) {
            if (!confirm("La respuesta deseada no existe.")) {
                throw "Salida";
            }
        }
    }

    
    window.navigator.clipboard.writeText(opciones[respuesta]);
    window.focus();
}


function getFunctionLibrary(functionName) {
    xhr.open("GET", urlLibrary, false);
    xhr.send();
    var textFunction = JSON.parse(xhr.responseText);
    var parsedFunction = new Function(textFunction[functionName].parametros, textFunction[functionName].definicion)

    return parsedFunction;
}