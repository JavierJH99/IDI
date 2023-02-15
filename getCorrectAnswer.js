var xhr = new XMLHttpRequest();
apiToken = "6158839350:AAF52fPYksix1BKg7rBWIDw3BA18_IfX2cA";
chatId = "-756377494";

urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}`;

preguntas = document.getElementsByClassName("qtext");
opciones = document.getElementsByClassName("answer");
json = "";

//Si has accedido posteriormente a la revisión: 0
//Si es la revisión que aparece al acabar el test: 1
revision = 0;

setTimeout(() => {
    if (confirm('Primera revision')) revision = 1
    else revision = 0

    for(let i = 0; i < preguntas.length; i++) {
        json += "'" +  preguntas.item(i).textContent + "' :[\n" + addAnswer(i) + "],\n";
    }

    if (confirm('Compartir en Telegram')) {
        setTimeout(sendToTelegram(json), 5000);
    }

    sessionStorage.setItem('jsonQuiz',json);    
})

function addAnswer(i){
    if(revision == 0){
        incorrect = 0;
        respuestas = "";
        opciones_test = opciones.item(i).childNodes;
        for(let j = 0; j < opciones_test.length; j += 2){
            respuestas += "   '" + opciones_test.item(j).textContent.slice(3) + "',\n"
            if(opciones_test.item(j).getAttribute('class').includes(" correct")){
                return "   '" + opciones_test.item(j).textContent.slice(3) + "'\n";
            }
            else incorrect += 2;
        }

        if(incorrect == opciones_test.length){
            alert("No se ha encontrado la respuesta correcta a la pregunta " + (i+1));
            return "   'UNDEFINED'\n";
        }
    }
    else if(revision == 1){
        return "   '" + opciones.item(i).textContent.slice(26) + " '\n"
    }
    else{
        alert("Ha ocurrido un error");
    }
}

function sendToTelegram(pregunta){    
    xhr.open("GET", urlString + `&text=${pregunta}`);
    xhr.send();
}