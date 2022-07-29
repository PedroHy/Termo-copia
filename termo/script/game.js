const WORD = 'raios'
let line = 1;
let word = ''
let gameOver = false;
let result = ''

function checkWord(){
    gameOver = setGameOver()
    
    for(let pos = 0; pos <= 4; pos++){
            if(WORD[pos].toLowerCase() == word[pos].toLowerCase()){
                console.log(word[pos] + ' - correto')
                correctLetter(pos);
            }else if(WORD.indexOf(word[pos].toLowerCase()) != -1){
                console.log(word[pos].toLowerCase() + '- posiçao errada')
                wrongPosition(pos);
            }else{
                console.log(word[pos].toLowerCase() + '- errada')
                wrongLetter(pos);
            }
            
    }
    
    line += 1;
    setInterval(()=>{
        if(gameOver != true){
            pularLinha()
            resetWord()
        }else{
            showGameOverScreen()
        }
    }, 1200)
}

function resetWord(){
    word = ''
}

function setGameOver(){
    if(word.toLowerCase() == WORD.toLowerCase()){
        result = 'winner'
        return true;
    }
    if(line == 6 && word.toLowerCase() != WORD.toLowerCase()){
        result = 'loser'
        return true;
    }
    return false;
}