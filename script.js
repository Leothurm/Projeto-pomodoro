let acao = document.getElementById('acao')
let pausa = document.getElementById('pausa')
let sessions = document.getElementById('sessions')
let segundos

var bell = new Audio("./audio/bell.mp3")
var volta = new Audio("./audio/volta.mp3")
var final = new Audio("./audio/final.mp3")

var lofi = document.getElementById('lofi')
var pause = document.getElementById('pause')
var play = document.getElementById('play')


function iniciar(){
    if(acao.value == 0){
        document.getElementById('action_error').innerHTML = "Adicione os minutos"
        acao.focus();
    } else if(pausa.value == 0){
        document.getElementById('pause_error').innerHTML = "Adicione o tempo de pause"
        pausa.focus();
    } else if(sessions.value == 0){
        document.getElementById('sessions_error').innerHTML = "Adicione o número de sessões"
        sessions.focus();
    } else {
        lofi.play()
        pause.style.setProperty('display','block','important')
    }

}