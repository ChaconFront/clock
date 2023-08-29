
import {digitalClock} from './dom/reloj.js'


const d=document;

//este evento nos va a permitir que nuestra funcion se ejecute a la carga del documento.
d.addEventListener("DOMContentLoaded",(e)=>{  
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");    
});

 
