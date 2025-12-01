const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");
const mensaje = document.getElementById("mensaje");


function formatearNumero(numero){
    let mensaje = ""
    if(numero < 10){
        mensaje = `0${numero}`;
    }else{
        mensaje = numero;
    }

    return mensaje;
}


//console.log(formatearNumero(4));

function actualizarHora(){
    const ahora = new Date();

    const hours = ahora.getHours();
    const min   = ahora.getMinutes();
    const sec   = ahora.getSeconds();

    const horasFormateadas = formatearNumero(hours);
    const minFormateados   = formatearNumero(min);
    const secFormateados   = formatearNumero(sec);

    const horaCompletaActualizada = `${horasFormateadas}:${minFormateados}:${secFormateados}`;
    hora.textContent = horaCompletaActualizada;

    actualizarFecha();
    actualizarMensaje();
}

actualizarHora();
setInterval(actualizarHora,1000);

function actualizarFecha(){
    const fechaActual = new Date();

    const dias  = fechaActual.getDate();
    const meses = fechaActual.getMonth() + 1;
    const año   = fechaActual.getFullYear();

    const diasFormateados  = formatearNumero(dias);
    const mesesFormateados = formatearNumero(meses);

    const fechaCompletaActualizada = `${diasFormateados}/${mesesFormateados}/${año}`;
    fecha.textContent = fechaCompletaActualizada;
}



function actualizarMensaje(){
    const getHora = new Date();

    const horaActual = getHora.getHours();
    let mensajeActualizado = ""

    if(horaActual >= 0 && horaActual < 7){
        mensajeActualizado = `Si no duermes no rindes.¡A la cama!`;

    }else if(horaActual >= 7 && horaActual < 12){
        mensajeActualizado = `¡Buenos días! Desayuna rico y a por el día`;

    }else if(horaActual >= 12 && horaActual < 14){
        mensajeActualizado = `Hora de soltar todo y comer, ¡ÑAM ÑAM!`;

    }else if(horaActual >= 14 && horaActual < 16){
        mensajeActualizado = `¿Qué tal el menú de hoy?`;

    }else if(horaActual >= 16 && horaActual < 18){
        mensajeActualizado = `Pasea un poco y come fruta`;

    }else if(horaActual >= 18 && horaActual < 22){
        mensajeActualizado = `Ya va siendo hora de parar`;

    }else{
        mensajeActualizado = `Has hecho un gran trabajo hoy, buenas noches`;
    }
    mensaje.textContent = mensajeActualizado;
}