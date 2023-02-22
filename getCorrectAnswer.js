var xhr = new XMLHttpRequest();
apiToken = "6158839350:AAF52fPYksix1BKg7rBWIDw3BA18_IfX2cA";
chatId = "-756377494";

var urlStringTelegram = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}`;
var urlStringGit = "https://raw.githubusercontent.com/JavierJH99/IDI/master/MF1442.json";
var urlLibrary = "https://raw.githubusercontent.com/JavierJH99/IDI/master/systemUtils.json";

var preguntas = document.getElementsByClassName("qtext");
var opciones = document.getElementsByClassName("answer");
var json = {};

const getOpciones = getFunctionLibrary("getOpciones()");
const jsonConcat = getFunctionLibrary("jsonConcat()");
const updateJson = getFunctionLibrary("updateJson()");

//Si has accedido posteriormente a la revisión: 0
//Si es la revisión que aparece al acabar el test: 1
var revision = 0;

setTimeout(() => {
    if (confirm('Primera revision')){
	var respuestaAmarilla = document.getElementsByClassName("rightanswer");
        for (let i = 0; i < preguntas.length; i++) {
	    respuestaTexto = respuestaAmarilla.item(i).textContent
            json[preguntas.item(i).textContent] = respuestaTexto.slice(respuestaTexto.indexOf(':') + 1);
        }
    }
    else {
        for (let i = 0; i < preguntas.length; i++) {
            json[preguntas.item(i).textContent] = getOpciones(1, opciones.item(i).childNodes);
            if(json[preguntas.item(i).textContent] == "undefined") alert ("No se ha encontrado respuestas  a la pregunta " + (i+1))
        }
    }

    if (confirm('Compartir en Telegram')) {
        setTimeout(sendToTelegram(JSON.stringify(json)), 5000);
    }

    if (confirm('Actualizar archivo json con las nuevas preguntas')) {
        json = updateJson(json);
    }

    sessionStorage.setItem('jsonQuiz', JSON.stringify(json));
})

function getFunctionLibrary(functionName) {
    xhr.open("GET", urlLibrary, false);
    xhr.send();
    var textFunction = JSON.parse(xhr.responseText);
    var parsedFunction = new Function(textFunction[functionName].parametros, textFunction[functionName].definicion)

    return parsedFunction;
}

// function updateJson(urlStringGit, currentJson) {
//     xhr.open("GET", urlStringGit, false);
//     xhr.send(null);

//     let oldJson = JSON.parse(xhr.responseText);

//     return jsonConcat(oldJson, currentJson);
// }