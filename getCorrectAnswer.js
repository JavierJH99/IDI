var xhr = new XMLHttpRequest();
apiToken = "6158839350:AAF52fPYksix1BKg7rBWIDw3BA18_IfX2cA";
chatId = "-756377494";

urlStringTelegram = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}`;
urlStringGit = "https://raw.githubusercontent.com/JavierJH99/IDI/master/MF1442.json";

preguntas = document.getElementsByClassName("qtext");
var opciones = document.getElementsByClassName("answer");
json = {};

//Si has accedido posteriormente a la revisión: 0
//Si es la revisión que aparece al acabar el test: 1
revision = 0;

setTimeout(() => {
    if (confirm('Primera revision')){
        for (let i = 0; i < preguntas.length; i++) {
            json[preguntas.item(i).textContent] = opciones.item(i).textContent.slice(26);
        }
    }
    else {
        for (let i = 0; i < preguntas.length; i++) {
            json[preguntas.item(i).textContent] = getOpciones(opciones.item(i).childNodes);
            if(json[preguntas.item(i).textContent] == "undefined") alert ("No se ha encontrado respuestas  a la pregunta " + (i+1))
        }
    }

    if (confirm('Compartir en Telegram')) {
        setTimeout(sendToTelegram(json), 5000);
    }

    if (confirm('Actualizar archivo json con las nuevas preguntas')) {
        json = updateJson(json);
    }

    sessionStorage.setItem('jsonQuiz', JSON.stringify(json));
})

function getOpciones(nodos) {
    let correctas = [];
    let incorrect = 0;

    for (let element of nodos) {
        if (element.nodeType === Node.ELEMENT_NODE && element.getAttribute('class').includes(' correct')) correctas.push(element.textContent.slice(3));
        else incorrect ++;
    }
    
    if (incorrect == nodos.length) return "undefined";
    else return correctas;
}

function sendToTelegram(pregunta) {
    xhr.open("GET", urlStringTelegram + `&text=${pregunta}`);
    xhr.send();
}

function updateJson(currentJson) {
    xhr.open("GET", urlStringGit, false);
    xhr.send(null);

    let oldJson = JSON.parse(xhr.responseText);

    return jsonConcat(oldJson, currentJson);
}

function jsonConcat(json1, json2) {
    Object.entries(json2).forEach(([key, value]) => {
        json1[key] = value;
    })

    return json1;
}