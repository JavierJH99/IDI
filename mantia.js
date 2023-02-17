var xhr = new XMLHttpRequest();
urlString = "https://raw.githubusercontent.com/JavierJH99/IDI/master/MF1442.json";

preguntas = document.getElementsByClassName("qtext");
opciones = document.getElementsByClassName("answer");
color = "0000FF";

bbdd = JSON.parse(getBBDD())

setTimeout(() => {
    pregunta = []
    for(let i = 0; i < preguntas.length; i++) {
                               texto_pregunta = preguntas.item(i).textContent
        pregunta[i] = process_question_answer(texto_pregunta)
    }

    for(let j = 0; j < pregunta.length; j++) {
        Object.entries(bbdd).forEach(([key, value]) => {
            pregunta_bbdd = process_question_answer(key)
            pregunta_questionario = process_question_answer(pregunta[j])
                                               

            if (pregunta_questionario.includes(pregunta_bbdd)) {
                preguntas.item(j).setAttribute("style","color:#" + color);
                opciones_test = opciones.item(j).childNodes;

                for (let k=0; k < (opciones_test.length); k+=2) {
                    respuesta_texto = opciones_test.item(k).textContent.slice(3);
                    respuesta = process_question_answer(respuesta_texto)
                    respuesta_para_comparar = process_question_answer(value[0])


                    if (respuesta_para_comparar.includes(respuesta)) {
                        document.getElementsByClassName("qtext").item(j).onclick = function(event) {
                            if (event === undefined) event = window.event;
                            document.getElementsByClassName("answer").item(j).childNodes[k].childNodes[0].click();
                        };
                        
                        opciones_test.item(k).childNodes[1].setAttribute("style","color:#" + color);
                    }
                }
            }
        });
    }
})

function getBBDD(){
    xhr.open("GET", urlString, false);
    xhr.send(null);
    return xhr.responseText;
}

function process_question_answer(text){
	t = text.replace(/\s+/gm, " ")
	t = t.trim()

	return t
}
