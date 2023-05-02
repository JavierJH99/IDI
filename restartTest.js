var listAnswer = document.getElementsByClassName("answer");
//var ticksVerdes = document.getElementsByClassName("icon fa fa-check text-success fa-fw ");

for (let i = 0; i < listAnswer.length; i++) {
    for (let j = 0; j < listAnswer.item(i).childNodes.length; j++) {
        if(listAnswer.item(i).childNodes.item(j).firstChild != null){
            //.removeAttribute("disabled")
            listAnswer.item(i).childNodes.item(j).firstChild.removeAttribute("disabled");
            // .removeAttribute("checked")
            listAnswer.item(i).childNodes.item(j).firstChild.removeAttribute("checked");
        }
    }
}

removeElementsByClass("icon fa fa-check text-success fa-fw ")

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}