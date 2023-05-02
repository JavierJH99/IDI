var listAnswer = document.getElementsByClassName("answer");
const removeElementsByClass = getFunctionLibrary("removeElementsByClass()");

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

removeElementsByClass("icon fa fa-check text-success fa-fw ");