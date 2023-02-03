preguntas = document.getElementsByClassName("qtext")
opciones = document.getElementsByClassName("answer")

bbdd = {

    '¿Por qué se caracteriza la pizarra electromagnética?' :[
      'Porque utiliza una malla formada por cables en su interior que cubre toda su superficie para percibir las señales de un lápiz '
    ],
    '¿Cuál de las siguientes finalidades didácticas del uso de la pizarra digital interactiva está enfocada al profesorado?' :[
        'La pizarra digital interactiva se puede adaptar a las diferentes estrategias didácticas '
    ],
    'Indica si la siguiente afirmación es Verdadera o Falsa. “Se debe evitar la instalación de ordenadores y videoproyectores en espacios húmedos y fríos?' :[
        'Verdadero '
    ],
    '¿Cuál es la función de la barra de menús en una pizarra digital interactiva?' :[
        'Mostrar los diferentes comandos de menú por los que se puede utilizar el software '
    ],
    '¿Dónde debe estar ubicado el ordenador de la pizarra digital interactiva?' :[
        'Al lado de la mesa del docente '
    ],
    '¿Cuál de los siguientes elementos en un elemento básico de la pizarra digital interactiva?' :[
        'El proyector multimedia '
    ],
    '¿Cuál de las siguientes premisas es una medida de mantenimiento de la pizarra digital interactiva?' :[
        'No utilizar sustancias abrasivas para su limpieza '
    ],
    '¿Cuál de los siguientes objetivos se persigue con la utilización de la pizarra digital interactiva en el aula?' :[
        'Favorecer el trabajo colaborativo y la elaboración de trabajos en equipo potenciando la toma de decisiones y ciertos valores como la escucha activa '
    ],
    '¿Cuándo debe hacer el calibrado del a pizarra digital interactiva?' :[
        'Cuando se utilice la pizarra por primera vez y cuando se observe dificultades entre la orden del usuario que utiliza la PDI y la respuesta del sistema '
    ],
    '¿Qué función realiza la herramienta enfoque en una pizarra digital interactiva?' :[
        'Sirve para centrar la atención en algún punto concreto de la información que se esté mostrando en la pantalla '
    ],
    '¿Cuáles de las siguientes funcionalidades permite la pizarra digital interactiva?' :[
        'Llevar a cabo una videoconferencia '
    ],
    '¿Qué es el sistema de voto de una pizarra digital interactiva?' :[
        'Sistema donde el alumnado puede responder a preguntas que se plantean desde la pizarra digital interactiva '
    ],
    '¿Con qué medios de conexión debe contar la pizarra digital interactiva para la conexión de los elementos básicos?' :[
        'Un puerto USB Y un cable VGA '
    ],
    '¿Dónde debe ubicarse la pantalla de la pizarra digital interactiva por norma general?' :[
        'En la parte frontal de la clase '
    ],
    '¿Qué función realiza el reconocimiento de escritura en una pizarra digital interactiva?' :[
        'Transforma la palabra escrita a mano a letra de ordenador '
    ],
    '¿Cómo se denomina a la PDI que se instala en un lugar concreto y va a mantenerse en ese lugar durante un largo período de tiempo?' :[
        'Fija '
    ],
    '¿Qué tipo de tecnología utiliza el software Lynx?' :[
        'Tecnología electromagnética '
    ],
    '¿A qué hace referencia cuando hablamos de la resolución de la pizarra digital interactiva?' :[
        'A la densidad de la imagen en la pantalla '
    ],
    'Indica si la siguiente afirmación es Verdadera o Falsa. “Antes del comienzo de la sesión formativa cuando se vaya a hacer uso de la pizarra digital interactiva debemos conectar por orden ordenador-videoproyector-pantalla”.' :[
        'Verdadero '
    ],
    '¿Cuáles de las siguientes características resaltan en la pizarra digital interactiva como herramienta tecnológica?' :[
        'Acceso a Internet '
    ],
    '¿Qué criterios debemos tener en cuenta en la elección del material impreso según Santos Guerra atendiendo a sus funciones didácticas?' :[
        'Relación con la realidad, estimulación, adaptación, papel activo del alumnado, la toma de decisiones y centrados en el alumnado. '
    ],
    '¿Qué es un material autoinstructivo?' :[
        'Material didáctico para que el alumnado asimile el contenido sin la intervención directa del formador/a. '
    ],
    '¿Qué tipos de márgenes son los más utilizados?' :[
        'Márgenes uniformes, márgenes especiales y márgenes tradicionales. '
    ],
    '¿Qué colores conforman el modelo de color RGB?' :[
        'Rojo, azul y verde. '
    ],
    '¿Qué son las infografías?' :[
        'Aportación informativa, realizada con elementos icónicos y tipográficos, que permite o facilita la comprensión de los contenidos que se desarrollan en el guión didáctico. '
    ],
    '¿Cuál es la finalidad del diseño gráfico?' :[
        'Programar, coordinar, seleccionar y organizar una serie de elementos visuales para comunicar mensajes a un colectivo determinado. '
    ],
    '¿Qué es el brazo de una letra?' :[
        'La parte terminal que se proyecta horizontalmente o hacia arriba y que surge de un asta vertical. '
    ],
    '¿Qué características definen a las variantes versalitas de una letra?' :[
        'Tienen la forma de las mayúsculas pero con un tamaño más cercano al de las minúsculas. '
    ],
    '¿Qué es la propiedad intelectual?' :[
        'Conjunto de derechos que corresponden a los autores y a otros titulares respecto de las obras y prestaciones fruto de su creación. '
    ],
    '¿Qué significa la regla de las 3R referente a la protección medioambiental?' :[
        'Reducción, reutilización  y reciclaje. '
    ],
    '¿Cuál de las siguientes medidas evitarían una fatiga postural?' :[
        'Cambiar de postura frecuentemente. '
    ],
    '¿Qué son los medios didácticos?' :[
        'Instrumentos que utiliza el docente para que el alumnado construya su propio aprendizaje. '
    ],
    '¿Cómo se clasifican las tipografías romanas?' :[
        'Romanas antiguas, romanas modernas y egipcias. '
    ],
    '¿Qué es un glosario?' :[
        'Anexo que se agrega al final del documento y se encuentran términos definidos. '
    ],
    '¿Cuáles son los elementos que nos podemos encontrar en una página?' :[
        'El encabezado, el título, el cuerpo de texto, la imagen, el pie de foto, el número de páginas y el pie de página. '
    ],
    '¿A qué se refieren los derechos morales que establece la propiedad intelectual?' :[
        'Se trata de aquellos que permiten al titular de la obra adoptar medidas para preservar la titularidad de la obra. '
    ],
    'Un material didáctico es adecuado si…' :[
        'Todos los recursos gráficos que se utilicen en el material didáctico son representativos de la información que se está transmitiendo. '
    ],
    '¿Qué debe realizar el docente referente a los materiales didácticos impresos previamente a llevar a cabo la acción formativa?' :[
        'Hacer una selección previa de libros, periódicos, revistas u otros materiales impresos que se mostrarán en clase. '
    ],
    '¿Cuáles son elementos específicos de un guión didáctico?' :[
        'Introducción, objetivos, contenidos, resúmenes, infografías, actividades y autoevaluación. '
    ],
    '¿Qué tipo de párrafo se caracteriza por llevar sangría en la primera línea y su última línea puede ser corta o completa?' :[
        'Párrafo ordinario. '
    ],
    '¿Qué es un diagrama causa-efecto?' :[
        'Representación gráfica compuesta de líneas y símbolos que tiene por objeto representar una relación entre un efecto y sus causas '
    ],
    '¿Qué finalidad tiene un organigrama informativo?' :[
        'Informar a todas las personas a las que sea accesible '
    ],
    '¿Qué son los distractores en el aula?' :[
        'Hacen referencia a ruidos externos, el tráfico del exterior, las ventanas, adornos, etc '
    ],
    '¿Cuáles son las dimensiones ideales del aula?' :[
        'Son de dos metros cuadrados por personas asistentes inclusive el docente '
    ],
    '¿Cuál es la temperatura ideal del aula?' :[
        'Entre 20ºC y 22ºC, dependiendo de la actividad que se esté realizando '
    ],
    '¿Qué es un mapa conceptual?' :[
        'Diagrama bidimensional que muestra relaciones jerárquicas entre conceptos de una disciplina y que derivan su existencia de la propia estructura de la disciplina '
    ],
    '¿Cuál de los siguientes aspectos sobre la ubicación del espacio en el aula contribuye a la interacción entre el alumnado según Díaz?' :[
        'La mesa del profesorado y la pizarra son un elemento más en la clase y no el foco central de la actividad. '
    ],
    '¿Cuál de las siguientes afirmaciones es una finalidad didáctica de los recursos didácticos gráficos?' :[
        'El docente puede utilizarlo como instrumento de evaluación '
    ],
    '¿Cuál de las siguientes ventajas presenta el uso de la pizarra?' :[
        'Se trata de un apoyo visual que sirve de apoyo al alumnado '
    ],
    '¿Cuál de las siguientes recomendaciones de utilización hay que tener en cuenta para hacer uso del proyector?' :[
        'Comprobar antes de comenzar la clase que el aparato funciona correctamente '
    ],
    '¿Cuál de las siguientes afirmaciones es una ventaja del uso de las láminas?' :[
        'Dirigen la actividad cognoscitiva del alumnado '
    ],
    '¿Cuáles de las siguientes funciones cumple el guión didáctico?' :[
        'Función facilitadora, función orientadora, función motivadora y función evaluadora '
    ],
    '¿Cuál de las siguientes premisas hay que adoptar para hacer un buen uso del rotafolios?' :[
        'Elaborar las preposiciones con el menor número de palabras posibles '
    ],
    '¿Cuál de los siguientes elementos es un elemento del mapa de ideas?' :[
        'Imágenes '
    ],
    '¿Cuáles son las partes en las que se divide el guión didáctico de una sesión formativa?' :[
        'Presentación, introducción y objetivos, conceptos principales y secundarios, actividades de enseñanza-aprendizaje, conclusión y evaluación '
    ],
    '¿Cómo se pueden clasificar los organigramas según su finalidad?' :[
        'Informativo, analítico, formal e informal '
    ],
    '¿Qué son los conceptos según Novak?' :[
        'Imágenes mentales que se crean los individuos a partir de las palabras o signos '
    ],
    '¿Qué es un organizador gráfico?' :[
        'Métodos visuales para organizar información, con los objetivos de ayudar al alumnado por medio de la relación de conceptos, a pensar y a aprender de forma eficiente y eficaz '
    ],
    '¿Cuál es el primer paso para elaborar una línea del tiempo?' :[
        'Identificar los eventos junto con las fechas iniciales y finales '
    ],
    'Una de las premisas que establece Bernal para que un mural sea óptimo y cumpla con una finalidad didáctica es:' :[
        'Se debe cuidar la parte en la que se coloca la información. Según diversos estudios, la parte donde se presta mayor atención es la parte superior izquierda '
    ],
    '¿Cómo se define un proyector multimedia?' :[
        'Dispositivo electrónico que conectado a un ordenador puede proyectar imágenes fijas o dinámicas, vídeos, gráficos, entre otros, en una pantalla o pared a través del uso de un sistema de lentes. '
    ],
    'Según la modalidad de uso, ¿cómo pueden ser las presentaciones multimedia?' :[
        'Grupales e individuales. '
    ],
    '¿Con cuál de las siguientes aplicaciones se pueden elaborar presentaciones multimedia?' :[
        'Prezi. '
    ],
    '¿Desde qué pestaña de la aplicación de Power Point podemos insertar sonidos?' :[
        'Pestaña insertar. '
    ],
    '¿Cuál de las siguientes medidas preventivas podemos adoptar para evitar la fatiga visual?' :[
        'Utilizar la luz natural antes que la luz artificial. '
    ],
    '¿Cuál de las siguientes acciones debe realizar un docente en la fase de acondicionamiento de la secuenciación de las presentaciones multimedia?' :[
        'Repasar todas las diapositivas con antelación. '
    ],
    '¿Cuál de las siguientes ventajas presenta los proyectores CRT?' :[
        'Reproduce los colores fielmente. '
    ],
    '¿Cómo debe ser el texto que incluyamos en una presentación multimedia?' :[
        'Se debe utilizar frases sencillas y claras. '
    ],
    '¿A qué hace referencia SGAE?' :[
        'Se trata de una entidad privada dedicada a la defensa de los derechos de propiedad intelectual de autores y editores. '
    ],
    '¿Cómo debe ser la conclusión de una presentación multimedia?' :[
        'Ser breve. '
    ],
    '¿Cuál de las siguientes afirmaciones se considera una recomendación de uso del proyector multimedia?' :[
        'Se debe mantener en un sitio seco. '
    ],
    '¿Para qué se deben utilizar animaciones en las presentaciones multimedia?' :[
        'Para captar la atención del alumnado en algún factor concreto. '
    ],
    '¿Qué es objeto de propiedad intelectual?' :[
        'Todas las creaciones originales literarias, artísticas o científicas expresadas por cualquier medio o soporte, tangible o intangible, actualmente conocido o que se invente en el futuro. '
    ],
    '¿Cuáles de las siguientes medidas preventivas debemos adoptar en cuanto al uso del ordenador en la elaboración de presentaciones multimedia?' :[
        'Ajustar la luminosidad y el contraste en las propiedades del ordenador. '
    ],
    '¿Cuál se considera la distribución más adecuado para el alumnado generalmente?' :[
        'En forma de U, siempre que las características del aula lo permitan. '
    ],
    'Uno de los pasos que debe seguir el docente en la elaboración de una presentación es la delimitación del área de trabajo, ¿a qué hace referencia?' :[
        'Establecer la idea principal de la presentación. '
    ],
    '¿Cómo se estructura generalmente una presentación multimedia?' :[
        'Introducción, desarrollo y conclusión. '
    ],
    '¿Cuál de las siguientes afirmaciones es una característica del proyector multimedia como recurso didáctico?' :[
        'Favorece el aprendizaje colaborativo. '
    ],
    '¿Qué Real Decreto regula la propiedad intelectual?' :[
        'El Real Decreto Legislativo 1/1996, de 12 de Abril. '
    ],
    '¿Qué tipo de formas son las que tienen mayor peso visual en una presentación multimedia?' :[
        'Las formas regulares y cerradas. '
    ],
    '¿Qué significa el indicador legibilidad de selección de recursos didácticos en la web?' :[
        'Que debe tener una letra legible, un buen contraste entre fondo y tipografía, buena distribución de los elementos, entre otros. '
    ],
    '¿Qué permite la red de área extensa?' :[
        'Permite la unión de varios centros entre diferentes zonas geográficas. '
    ],
    '¿Cuál es la función del códec en un equipo de videoconferencia?' :[
        'Capturar señales de video y audio para transmitirlas a un sitio web. '
    ],
    '¿Qué indicadores debemos tener en cuenta en la selección de recursos didácticos en la web?' :[
        'Actualización, adecuación al destinario, eficacia, organización, navegabilidad, selección de contenidos y legibilidad. '
    ],
    '¿Qué partes puede tener el FrontEnd de un blog?' :[
        'Cabecera, entradas del blog y barra lateral. '
    ],
    '¿Por qué partes está formada una webquest?' :[
        'Introducción, tarea, proceso, recursos, evaluación y conclusión. '
    ],
    '¿Qué participantes se pueden diferenciar en una videoconferencia?' :[
        'Moderador, presentadores, asistentes y técnicos. '
    ],
    '¿Cómo podemos definir que los contenidos de un sitio web poseen adecuación a los destinatarios?' :[
        'Teniendo en cuenta el vocabulario, los conceptos y el lenguaje, entre otros. '
    ],
    '¿Qué partes deben aparecer en una web docente según Mirete et al?' :[
        'Información del material, desarrollo de contenidos o módulos, ejercicios prácticos, recursos, cronograma, apartado de noticias, herramientas de comunicación sincrónica y asincrónica, y finalmente, recursos complementarios. '
    ],
    '¿Cómo se define la World Wide Web?' :[
        'Forma de ver toda la información disponible en Internet como un continuo, sin rupturas. '
    ],
    '¿Cuál es la característica principal del Tumbleblog?' :[
        'Es muy poco estructurado. '
    ],
    '¿Con qué finalidad puede utilizar un docente una wiki?' :[
        'Elaboración de trabajos grupales, almacenamiento de textos, recolección de opiniones, entre otros. '
    ],
    '¿Qué función tiene la herramienta Tikatok?' :[
        'Permite la creación de libros virtuales. '
    ],
    '¿Para qué sirve el esquema mailto en una URL?' :[
        'Para direcciones de correo electrónico. '
    ],
    '¿Qué significan las siglas HTML?' :[
        'Hiper, texto, marcado y lenguaje. '
    ],
    '¿A qué nos referimos cuando hablamos del FrontEnd de un blog?' :[
        'Del área pública del blog. '
    ],
    'Una de las ventajas del uso de las TIC  en el ámbito de la educación son:' :[
        'Alto grado de interdisciplinariedad. '
    ],
    '¿Qué significa Cc en un correo electrónico?' :[
        'Nombre o dirección del destinatario o destinatarios a los que se les envía una copia del mensaje. '
    ],
    '¿Cuál es la diferencia entre mensajería instantánea y chat?' :[
        'Que en la mensajería instantánea el usuario establece contacto con otro que ya es conocido y en el chat los usuarios no tienen por qué haber establecido contacto previamente. '
    ],
    '¿Cómo podemos visualizar el código HTML de una página?' :[
        'Haciendo clic con el botón derecho del ratón en cualquier parte del página y seleccionar “ver código fuente de la página”. '
    ],
    '¿Qué fases debe incluir un videotutorial?' :[
        'Introducción, orientación inicial, aplicación y retroalimentación. '
    ],
    '¿Qué evalúan las pruebas de evaluación de competencia?' :[
        'El “saber hacer”. '
    ],
    'En la elaboración de videotutoriales, ¿de qué se trata el segundo paso?' :[
        'De la estructura que va a seguir el videotutorial. '
    ],
    '¿Con cuál de las siguientes herramientas se pueden diseñar textos electrónicos?' :[
        'EdiLim. '
    ],
    '¿A qué generación pertenecen los programas autoinstructivos?' :[
        '3º Generación. '
    ],
    '¿Cuál de las siguientes herramientas es una herramienta de comunicación en grupo asincrónica?' :[
        'Foro. '
    ],
    '¿Cuál de las siguientes definiciones caracteriza a las plataformas de software libre?' :[
        'Se caracterizan por poder acceder a ellas de forma gratuita y poder realizar modificaciones para su mejora. '
    ],
    '¿Cuál de las siguientes afirmaciones es una desventaja de la formación e-Learning?' :[
        'Supone un cambio en la forma de aprender que requiere más organización por parte del alumnado. '
    ],
    '¿Cuál de las siguientes afirmaciones es una ventaja de los cuestionarios de evaluación de preguntas cerradas?' :[
        'Su aplicación necesita poco tiempo. '
    ],
    '¿Qué significa que las herramientas de autor utilizadas para la formación online deben ser independientes?' :[
        'No deben exigir elementos adicionales para ser utilizadas. '
    ],
    '¿Qué tipo de herramienta se considera la biblioteca dentro de una plataforma virtual?' :[
        'Herramienta de soporte de formación. '
    ],
    '¿Cuál de las siguientes afirmaciones es una diferencia entre la formación presencial y la formación e-Learning?' :[
        'El aspecto temporal, en la formación presencial existe rigidez temporal mientras que en la formación e-Learning hay flexibilidad temporal. '
    ],
    '¿Con cuál de las siguientes herramientas se pueden elaborar mapas conceptuales?' :[
        'FreeMind. '
    ],
    '¿Con cuál de las siguientes herramientas se puede elaborar un videotutorial?' :[
        'Camtasia Studio. '
    ],
    '¿Cuál de las siguientes afirmaciones es un consejo para asegurar una comunicación personalizada en la formación online?' :[
        'Dirigirse al alumnado por su nombre. '
    ],
    '¿Cuál es la función del tutor/a dentro de la plataforma virtual?' :[
        'Organizar las herramientas útiles para la acción tutorial. '
    ],
    '¿Cuál es el papel del gestor en una plataforma virtual?' :[
        'Gestionar la estructura necesaria del curso, matricular al alumnado, dinamizar el funcionamiento de los cursos, entre otros. '
    ],
    '¿Qué es la comunicación sincrónica?' :[
        'El intercambio de información a través de Internet en tiempo real. '
    ],
    '¿Para qué se utiliza la herramienta Hot Potatoes?' :[
        'Para crear actividades. '
    ],
    '¿Qué tres momentos hay que tener en cuenta cuando se va a hacer uso del chat en la formación e-Learning?' :[
        'Preparación de la sesión, desarrollo de la sesión y cierre de la sesión. '
    ],
    '¿Qué fases debe incluir un videotutorial?' :[
        'Introducción, orientación inicial, aplicación y retroalimentación. '
    ],
    '¿Qué evalúan las pruebas de evaluación de competencia?' :[
        'El “saber hacer”. '
    ],
    'En la elaboración de videotutoriales, ¿de qué se trata el segundo paso?' :[
        'De la estructura que va a seguir el videotutorial. '
    ],
    '¿Con cuál de las siguientes herramientas se pueden diseñar textos electrónicos?' :[
        'EdiLim. '
    ],
    '¿A qué generación pertenecen los programas autoinstructivos?' :[
        '3º Generación. '
    ],
    '¿Cuál de las siguientes herramientas es una herramienta de comunicación en grupo asincrónica?' :[
        'Foro. '
    ],
    '¿Cuál de las siguientes definiciones caracteriza a las plataformas de software libre?' :[
        'Se caracterizan por poder acceder a ellas de forma gratuita y poder realizar modificaciones para su mejora. '
    ],
    '¿Cuál de las siguientes afirmaciones es una desventaja de la formación e-Learning?' :[
        'Supone un cambio en la forma de aprender que requiere más organización por parte del alumnado. '
    ],
    '¿Cuál de las siguientes afirmaciones es una ventaja de los cuestionarios de evaluación de preguntas cerradas?' :[
        'Su aplicación necesita poco tiempo. '
    ],
    '¿Qué significa que las herramientas de autor utilizadas para la formación online deben ser independientes?' :[
        'No deben exigir elementos adicionales para ser utilizadas. '
    ],
    '¿Qué tipo de herramienta se considera la biblioteca dentro de una plataforma virtual?' :[
        'Herramienta de soporte de formación. '
    ],
    '¿Cuál de las siguientes afirmaciones es una diferencia entre la formación presencial y la formación e-Learning?' :[
        'El aspecto temporal, en la formación presencial existe rigidez temporal mientras que en la formación e-Learning hay flexibilidad temporal. '
    ],
    '¿Con cuál de las siguientes herramientas se pueden elaborar mapas conceptuales?' :[
        'FreeMind. '
    ],
    '¿Con cuál de las siguientes herramientas se puede elaborar un videotutorial?' :[
        'Camtasia Studio. '
    ],
    '¿Cuál de las siguientes afirmaciones es un consejo para asegurar una comunicación personalizada en la formación online?' :[
        'Dirigirse al alumnado por su nombre. '
    ],
    '¿Cuál es la función del tutor/a dentro de la plataforma virtual?' :[
        'Organizar las herramientas útiles para la acción tutorial. '
    ],
    '¿Cuál es el papel del gestor en una plataforma virtual?' :[
        'Gestionar la estructura necesaria del curso, matricular al alumnado, dinamizar el funcionamiento de los cursos, entre otros. '
    ],
    '¿Qué es la comunicación sincrónica?' :[
        'El intercambio de información a través de Internet en tiempo real. '
    ],
    '¿Para qué se utiliza la herramienta Hot Potatoes?' :[
        'Para crear actividades. '
    ],
    '¿Qué tres momentos hay que tener en cuenta cuando se va a hacer uso del chat en la formación e-Learning?' :[
        'Preparación de la sesión, desarrollo de la sesión y cierre de la sesión. '
    ]
}

setTimeout(() => {
    pregunta = []
    for(let i = 0; i < preguntas.length; i++) {
        pregunta[i] = preguntas.item(i).textContent
    }

    for(let j = 0; j < pregunta.length; j++) {
        Object.entries(bbdd).forEach(([key, value]) => {
            if (pregunta[j].includes(key)) {

                preguntas.item(j).setAttribute("style","color:#0000ff")
                opciones_test = opciones.item(j).childNodes

                for (let k=0; k < (opciones_test.length); k+=2) {
                    respuesta = opciones_test.item(k).textContent.slice(3)

                    if (value[0].includes(respuesta)) {
                        opciones_test.item(k).childNodes[1].setAttribute("style","color:#0000ff")
                    }
                }
            }
        });
    }
})