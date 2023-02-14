var xhr = new XMLHttpRequest();
apiToken = "6158839350:AAF52fPYksix1BKg7rBWIDw3BA18_IfX2cA";
chatId = "-756377494";

urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}`;

preguntas = document.getElementsByClassName("qtext");
opciones = document.getElementsByClassName("answer");
json = "";

setTimeout(() => {
    for(let i = 0; i < preguntas.length; i++) {
        json += "'" +  preguntas.item(i).textContent + "' :[\n" 
            + "   '" + opciones.item(i).textContent.slice(26) + " '\n"
            + "],\n";

        setTimeout(sendToTelegram(json), 5000);

        // for(let j = 0; j < opciones_test.length; j += 2){
        //     if(opciones_test.item(j).getAttribute('class').includes("correct")){
        //         json += "   '" + opciones_test.item(j).textContent.slice(3) + "'\n";
        //     }
        // }
    }

    sessionStorage.setItem('jsonQuiz',json);    
})

function sendToTelegram(pregunta){    
    xhr.open("GET", urlString + `&text=${pregunta}`);
    xhr.send();
}