var xhr = new XMLHttpRequest();
apiToken = "6158839350:AAF52fPYksix1BKg7rBWIDw3BA18_IfX2cA";
chatId = "-756377494";

urlStringTelegram = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}`;
urlStringGit = "https://raw.githubusercontent.com/JavierJH99/IDI/master/MF1442.json";

preguntas = document.getElementsByClassName("qtext");
opciones = document.getElementsByClassName("answer");
json = {};

//Si has accedido posteriormente a la revisión: 0
//Si es la revisión que aparece al acabar el test: 1
revision = 0;

setTimeout(() => {
    if (confirm('Primera revision')) revision = 1
    else revision = 0

    for(let i = 0; i < preguntas.length; i++) {
        json[preguntas.item(i).textContent] = [addAnswer(i)];
    }

    if (confirm('Compartir en Telegram')) {
        setTimeout(sendToTelegram(json), 5000);
    }

    if(confirm('Actualizar archivo json con las nuevas preguntas')){
        json = updateJson(json);
    }

    sessionStorage.setItem('jsonQuiz',json);
})

function addAnswer(i){
    if(revision == 0){
        incorrect = 0;
        opciones_test = opciones.item(i).childNodes;
        for(let j = 0; j < opciones_test.length; j += 2){
            if(opciones_test.item(j).getAttribute('class').includes(" correct")){
                return opciones_test.item(j).textContent.slice(3);
            }
            else incorrect += 2;
        }

        if(incorrect == opciones_test.length){
            alert("No se ha encontrado la respuesta correcta a la pregunta " + (i+1));
            return "UNDEFINED";
        }
    }
    else if(revision == 1){
        return opciones.item(i).textContent.slice(26);
    }
    else{
        alert("Ha ocurrido un error");
    }
}

function sendToTelegram(pregunta){    
    xhr.open("GET", urlStringTelegram + `&text=${pregunta}`);
    xhr.send();
}

function updateJson(currentJson){
    xhr.open("GET", urlStringGit, false);
    xhr.send(null);
    oldJson = xhr.responseText;

    return jsonConcat(oldJson,currentJson);
}

function jsonConcat(json1, json2) {
    Object.entries(json2).forEach(([key, value]) => {
        json1[key] = value;
    })

    return json1;
}