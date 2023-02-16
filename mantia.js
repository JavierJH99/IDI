var xhr = new XMLHttpRequest();
urlString = "https://raw.githubusercontent.com/JavierJH99/IDI/master/MF1442";

preguntas = document.getElementsByClassName("qtext");
opciones = document.getElementsByClassName("answer");
color = "0000FF";

// bbdd = {
//     '¿De qué iniciativa forman parte los programas públicos de empleo y formación?' :[
//         'Formación en alternancia con el empleo. '
//     ],
//     'La formación de oferta está dirigida prioritariamente a desempleados:' :[
//         'Falso '
//     ],
//     'La formación programada por las empresas responde a las necesidades del mercado laboral y las gestionan las empresas:' :[
//         'Falso '
//     ],
//     'Si quiero realizar una consulta de las cualificaciones profesionales existentes a cuál de los siguientes instrumentos consultaría:' :[
//         'Catálogo Nacional de las Cualificaciones Profesionales. '
//     ],
//     'La formación profesional inicial está dentro de la estructura del sistema educativo de nuestro país, pero tiene como referencia el Catalogo Nacional de las Cualificaciones profesionales para la elaboración de sus títulos.' :[
//         'Verdadero. '
//     ],
//     'El  título de Técnico le obtengo si supero los estudios de:' :[
//         'Formación Profesional de Grado Medio. '
//     ],
//     'Si supero los estudios de Formación Profesional Básica que titulación obtendré:' :[
//         'Título Profesional Básico. '
//     ],
//     '¿Cuál de las siguientes situaciones me facilita acceder al Formación Profesional de Grado Superior?' :[
//         'Estar en posesión del Título de Bachiller, o de un certificado acreditativo de haber superado todas las materias del Bachillerato. '
//     ],
//     '¿Cuál de las siguientes situaciones me facilita acceder al Formación Profesional de Grado Superior?' :[
//         'Estar en posesión del Título de Bachiller, o de un certificado acreditativo de haber superado todas las materias del Bachillerato. '
//     ],
//     'Una cualificación es:' :[
//         'El conjunto de competencias profesionales con significación para el empleo que pueden ser adquiridas mediante formación modular u otros tipos de formación e incluso por la experiencia laboral. '
//     ],
//     'Si tengo 15 años  ¿a cuál de los siguientes niveles de Formación Profesional puedo acceder?' :[
//         'Formación Profesional Básica. '
//     ],
//     'Es el instrumento técnico, dotado de capacidad e independencia de criterios, que apoya al Consejo General de Formación Profesional para alcanzar los objetivos del Sistema Nacional de Cualificaciones y Formación Profesional:' :[
//         'Instituto Nacional de las Cualificaciones. '
//     ],
//     'La siguiente definición: “Está integrado por el conjunto de instrumentos y acciones que tienen por objeto impulsar y extender entre las empresas y los trabajadores ocupados y desempleados una formación que responda a sus necesidades y contribuya al desarrollo de una economía basada en el conocimiento” a qué término corresponde:' :[
//         'Ninguna es correcta. '
//     ],
//     'La formación  en alternancia con el empleo es una de las iniciativas de:' :[
//         'Formación profesional para el empleo. '
//     ],
//     'La formación en alternancia con el empleo es una de las iniciativas de:' :[
//         'Formación profesional para el empleo. '
//     ],
//     'La formación dual  se formaliza mediante el contrato para la formación y el aprendizaje:' :[
//         'Verdadero. '
//     ],
//     'La siguiente definición: “Es un conjunto de instrumentos y acciones necesarios para promover y desarrollar la integración de las ofertas de la formación profesional” a qué termino corresponde:' :[
//         'Sistema Nacional de las Cualificaciones y de la Formación Profesional. '
//     ],
//     'El crédito de formación de las empresas se calcula teniendo en cuenta entre otros elementos las cotizaciones a la Seguridad Social y el número de trabajadores de la empresa:' :[
//         'Verdadero. '
//     ],
//     '¿En qué áreas se organiza el INCUAL?:' :[
//         'Observatorio Profesional; investigación, metodología y articulación del SNCFP; diseño de las Cualificaciones e información y gestión de recursos. '
//     ],
//     'Los Certificados de profesionalidad de iniciativa privada están pendientes de desarrollo normativo:' :[
//         'Falso '
//     ],
//     'La formación profesional básica NO sustituye a los Programas de Cualificación Profesional Inicial:' :[
//         'Falso '
//     ],
//     'Las empresas que tienen una plantilla de 1 a 5 trabajadores NO tienen obligación de realizar aportación privada en formación bonificada.' :[
//         'Verdadero '
//     ],
//     'Las empresas que tienen una plantilla de 1 a 5 trabajadores NO tienen obligación de realizar aportación privada en formación bonificada.' :[
//         'Verdadero '
//     ],
// }

bbdd = getBBDD();

setTimeout(() => {
    getBBDD();
    pregunta = []
    for(let i = 0; i < preguntas.length; i++) {
        pregunta[i] = preguntas.item(i).textContent
    }

    for(let j = 0; j < pregunta.length; j++) {
        Object.entries(bbdd).forEach(([key, value]) => {
            if (pregunta[j].includes(key)) {
                preguntas.item(j).setAttribute("style","color:#" + color);
                opciones_test = opciones.item(j).childNodes;

                for (let k=0; k < (opciones_test.length); k+=2) {
                    respuesta = opciones_test.item(k).textContent.slice(3);

                    if (value[0].includes(respuesta)) {
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