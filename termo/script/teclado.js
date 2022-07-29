/*Verifica se a tecla enter foi teclada por enquanto  */
function getKey(event){
    let id = event.target.id;
    console.log(id)
    if(id=='enter'){
        getWord();
        if(word.length == 5){
            checkWord();
        }else{
            resetWord();
        }
    }else if(id=='backspace'){
        deleteLastInput()
    }else{
        innerScreen(id);
    }
}

function innerScreen(key){
    let inputs = document.querySelectorAll('.input-letter-selected');

    if(inputs[0].value == ''){
        inputs[0].value = key
    }else if(inputs[1].value == ''){
        inputs[1].value = key
    }else if(inputs[2].value == ''){
        inputs[2].value = key
    }else if(inputs[3].value == ''){
        inputs[3].value = key
    }else if(inputs[4].value == ''){
        inputs[4].value = key
    }
}

function deleteLastInput(){
    let inputs = document.querySelectorAll('.input-letter-selected');

    if(inputs[4].value != ''){
        inputs[4].value = ''
    }else if(inputs[3].value != ''){
        inputs[3].value = ''
    }else if(inputs[2].value != ''){
        inputs[2].value = ''
    }else if(inputs[1].value != ''){
        inputs[1].value = ''
    }else if(inputs[0].value != ''){
        inputs[0].value = ''
    }
}

function checkLetter(keyValue, classType){
    let keys = document.querySelectorAll('.key');

    keys.forEach((key) =>{
        if(key.id == keyValue){
            key.className += ' ' + classType;
        }
    })
}