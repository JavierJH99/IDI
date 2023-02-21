function processText(text) {
    console.log("Hola");
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

export{processText}