const hora = window.document.getElementById("hora")
const minuto = window.document.getElementById("minuto")
const segundo = window.document.getElementById("segundo")

const relogio = setInterval(function time(){
    let now = new Date();
    let h = 24 - now.getHours();
    let m = 60 - now.getMinutes();
    let s = 60 - now.getSeconds();

    if(h < 10) h = '0' + h
    if(m < 10) m = '0' + m
    if(s < 10) s = '0' + s

    hora.textContent = h;
    minuto.textContent = m;
    segundo.textContent = s;
})