function processText(text) {
    if (Array.isArray(text)) {
        let textArray = [];

        text.forEach(element => {
            textArray.push(processText(element));
        });

        return textArray;
    }
    else {
        return text.replace(/\s+/gm, " ").trim();
    }
}

function getOpciones(type, nodos) {
    if (type == 1) {
        let correctas = [];
        let incorrect = 0;

        for (let element of nodos) {
            if (element.nodeType === Node.ELEMENT_NODE && element.getAttribute('class').includes(' correct')) correctas.push(element.textContent.slice(3));
            else incorrect++;
        }

        if (incorrect == nodos.length) return 'undefined';
        else return correctas;
    }
    else if (type == 2) {
        opciones = [];
        for (let element of nodos) {
            if (element.nodeType === Node.ELEMENT_NODE) opciones.push(processText(element.textContent.slice(3)));
        }
        return opciones;
    }
}