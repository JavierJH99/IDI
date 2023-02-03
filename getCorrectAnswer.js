preguntas = document.getElementsByClassName("qtext")
opciones = document.getElementsByClassName("answer")
json = "";

setTimeout(() => {
    for(let i = 0; i < preguntas.length; i++) {
        json += "'" +  preguntas.item(i).textContent + "' :[\n"
        opciones_test = opciones.item(i).childNodes

        for(let j = 0; j < opciones_test.length; j += 2){
            if(opciones_test.item(j).getAttribute('class').includes("correct")){
                json += "   '" + opciones_test.item(j).textContent.slice(3) + "'\n"
            }
        }

        json += "],\n"
    }
    sessionStorage.setItem('jsonQuiz',json)

    apiToken = "6158839350:AAF52fPYksix1BKg7rBWIDw3BA18_IfX2cA"
    chatId = "-756377494"
    urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${json}`
    var xhr = new XMLHttpRequest()
    xhr.open("GET", urlString)
    xhr.send()
})



