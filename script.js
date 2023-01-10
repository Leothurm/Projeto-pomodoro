let acao = document.getElementById("acao");
let pausa = document.getElementById("pausa");
let sessions = document.getElementById("sessions");
let segundos;

var bell = new Audio("./audio/bell.mp3");
var volta = new Audio("./audio/volta.mp3");
var final = new Audio("./audio/final.mp3");

var lofi = document.getElementById("lofi");
var pause = document.getElementById("pause");
var play = document.getElementById("play");


function pausar(){
  lofi.pause()

}

function executar(){
  lofi.play()

}




function iniciar() {
  if (acao.value == 0) {
    document.getElementById("action_error").innerHTML = "Adicione os minutos";
    acao.focus();
  } else if (pausa.value == 0) {
    document.getElementById("pause_error").innerHTML =
      "Adicione o tempo de pause";
    pausa.focus();
  } else if (sessions.value == 0) {
    document.getElementById("sessions_error").innerHTML =
      "Adicione o número de sessões";
    sessions.focus();
  } else {
    lofi.play();
    pause.style.setProperty("display", "block", "important");
    play.style.setProperty("display", "block", "important");
    

    localStorage.setItem("acao", String(acao.value));
    localStorage.setItem("pausa", String(pausa.value));
    localStorage.setItem("sessions", String(sessions.value));

    document
      .getElementById("config")
      .style.setProperty("display", "none", "important");
    document
      .getElementById("timer")
      .style.setProperty("display", "block", "important");

      PLAY()
  }
}

function PLAY() {
  let valueSessions = localStorage.getItem("sessions");

  if (valueSessions != "1") {
    document.getElementById('title_sessao').innerHTML = sessions.value + ' sessões restantes'
} else {
    document.getElementById('title_sessao').innerHTML = sessions.value + ' sessão restante'
}

  let title = document.getElementById("title");
  title.innerHTML = "TIME TO FOCUS!";
  title.style.fontSize = "30px";
  title.style.fontWeight = "bold";
  title.style.setProperty("color", "#75ff75", "important");

  min = Number(localStorage.getItem("acao"));
  min -= 1;
  segundos = 59;

  document.getElementById("minutes_ok").innerHTML = min;
  document.getElementById("seconds_ok").innerHTML = segundos;

  var min_interval = setInterval(minTimer, 60000);
  var seg_interval = setInterval(segTimer, 1000);

  function minTimer() {
    min -= 1;
    document.getElementById("minutes_ok").innerHTML = min;
  }

  function segTimer() {
    segundos -= 1;
    document.getElementById("seconds_ok").innerHTML = segundos;

    if (segundos <= 0) {
      if (min <= 0) {
        clearInterval(min_interval);
        clearInterval(seg_interval);

        bell.play();

        momentoPausa();
      }
      segundos = 60;
    }
  }
}

function momentoPausa() {
  let title = document.getElementById("title");
  title.innerHTML = "PAUSA";
  title.style.fontSize = "30px";
  title.style.fontWeight = "bold";
  title.style.setProperty("color", "#dc3545", "important");

  min_pausa = Number(localStorage.getItem("pausa"));
  min_pausa -= 1;
  segundos = 59;

  document.getElementById('minutes_ok').innerHTML = min_pausa
  document.getElementById('seconds_ok').innerHTML = segundos

  var min_interval = setInterval(minTimer, 60000)
  var seg_interval = setInterval(segTimer, 1000)

  function minTimer() {
    min_pausa -= 1
    document.getElementById('minutes_ok').innerHTML = min_pausa
 }

 function segTimer(){
    segundos = segundos - 1
   document.getElementById('seconds_ok').innerHTML = segundos

   if (segundos <= 0) {
      if (min_pausa <= 0) {
         ses = Number(localStorage.getItem('sessions'))
         ses -= 1
         localStorage.setItem('sessions', String(ses))
         clearInterval(min_interval)
         clearInterval(seg_interval)

         if (ses <= 0) {
            final.play()
            localStorage.clear()

            document.getElementById('config').style.setProperty('display', 'none', 'important')
            document.getElementById('timer').style.setProperty('display', 'none', 'important')
            document.getElementById('fim').style.setProperty('display', 'block', 'important')
         } else {
            volta.play();
            PLAY()
        }
    }
    segundos = 60
 }
}

}