const d = document;

export function digitalClock(clock, btnPLay, btnStop) {
    /*recuerda que para parar un temporizador tienes que expresarlos en variables */
    let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPLay)) {
     clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();//creamos el objeto de tipo fecha(date).
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;//aqui le pasamos la fecha en un contenido html.
      }, 1000);

      //desabilitando el botton
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
        clearInterval(clockTempo);//para parar el reloj
        d.querySelector(clock).innerHTML=null;//para hacer desaparecer al reloj
       d.querySelector(btnPLay).disabled=false;
    }
  });
}
export function alarma() {}
