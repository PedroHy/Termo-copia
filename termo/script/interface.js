
document.addEventListener('DOMContentLoaded', ()=>{

    let lines = document.querySelectorAll('.line');
    let inputs = document.querySelectorAll('.input-letter');
    let keys = document.querySelectorAll('.key');
    
    
    lines.forEach((line)=>{
        checkLine(line);
    })
    
    inputs.forEach((input) =>{
        input.addEventListener('keypress', checkChar);
    })

    keys.forEach((key) =>{
        key.addEventListener('click', getKey);
    })

});

/*Verifica a linha que está ativa no game e atualiza as classes de acordo
com cada linha*/
function checkLine(l){

   let atualLine = 'line' + line;
   if (atualLine == l.id){
        updateLine(l)
    }else{
        removeClass(l)
    }
    
    
}
/*Desbloqueia a linha para ser usada*/
function updateLine(l){
    for(let pos =0; pos < 5; pos++){   
        l.children[pos].className += ' input-letter-selected'
        l.children[pos].disabled = false;
    }
    
}

/*Bloqueia as linhas */
function removeClass(l){
    for(let pos =0; pos < 5; pos++){   
        l.children[pos].classList.remove('input-letter-selected')
        l.children[pos].disabled = true;
    }
}

/*Pula para a próxima linha */
function pularLinha(){
    let lines = document.querySelectorAll('.line');

    lines.forEach((line)=>{
        checkLine(line);
    })


}

/*Função para checar se o caractere está entre A-Z, se não estiver
bloqueia o comportameto padrão que é exibir na tela*/
function checkChar(event){
    if(!blockChar(event)){
        event.preventDefault();
    }
}

/*Verifica se o caractere está no padrão [a-zA-Z] se estiver ele
retornará true se não retornará false bloqueando esse caractere*/
function blockChar(event){
    const char = String.fromCharCode(event.keyCode);
    const PATTERN = '[a-zA-Z]';
    if(char.match(PATTERN)){
        return true;
    }

    return false;
}



/*captura a palavra digitada pelo user */
function getWord(){
    let inputs = document.querySelectorAll('.input-letter-selected');
    inputs.forEach((input) =>{
        word += input.value;
    })

    console.log('User: ' + word);
}

//Muda o desing das letras corrigidas
function correctLetter(pos){
    let inputs = document.querySelectorAll('.input-letter-selected');
    inputs[pos].className += ' input-letter-correct'
    checkLetter(inputs[pos].value, 'key-correct')
}

function wrongPosition(pos){
   let inputs = document.querySelectorAll('.input-letter-selected');
    inputs[pos].className += ' input-letter-right'
    checkLetter(inputs[pos].value, 'key-wrong-position')
}

function wrongLetter(pos){
    let inputs = document.querySelectorAll('.input-letter-selected');
    inputs[pos].className += ' input-letter-wrong'
    checkLetter(inputs[pos].value, 'key-disabled')
}


//exibe a tela de gameOver
function showGameOverScreen(){
    screenGameOver = document.querySelector('.gameOver');
    msg = document.getElementById("msg-gameOver")
    img = document.getElementById("img-gameOver")
    answer = document.getElementById("answer")
    if(result == 'winner'){
        msg.innerText = 'Parábens!'
        img.innerHTML = '<img src="./assets/trofeu.png" alt="Troféu">'
    }else{
        msg.innerText = 'Não foi dessa vez'
        img.innerHTML = '<img src="./assets/cara-triste.png" alt="Emoji chorando">'
        
        answer.innerText = 'A palavra era: ' + WORD.toUpperCase();
    }
    screenGameOver.style.display = 'flex'
}

