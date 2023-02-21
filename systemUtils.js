console.log(text2);
if (Array.isArray(text)) {
    let textArray = [];

    text.forEach(element => {
        textArray.push(element.replace(/\s+/gm, " ").trim());
    });

    return textArray;
}
else {
    return text.replace(/\s+/gm, " ").trim();
}