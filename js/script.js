
const imagenes = [
    "../assets/img/ballena.jpg",
    "../assets/img/baños.jpg",
    "../assets/img/cabras.jpg",
    "../assets/img/cebras.jpg",
    "../assets/img/colibri.jpg",
    "../assets/img/cuernos.jpg",
    "../assets/img/cuervo.jpg",
    "../assets/img/elefantes.jpg",
    "../assets/img/flamencos.jpg",
    "../assets/img/fondo marino.jpg",
    "../assets/img/gato.jpg",
    "../assets/img/leon.jpg",
    "../assets/img/lobo.jpg",
    "../assets/img/mar.jpg",
    "../assets/img/mono.jpg",
    "../assets/img/nemo.jpg",
    "../assets/img/oso polar.jpg",
    "../assets/img/perro.jpg",
    "../assets/img/rinoceronte.jpg",
    "../assets/img/tiburones.jpg",
    "../assets/img/tortuga agua.jpg",
    "../assets/img/tortuga byn.jpg",
];

function imagenAleatoria(){
    const aleatorio = Math.floor(Math.random()*imagenes.length);

    const imagen = imagenes[aleatorio];
    document.body.style.backgroundImage = `url('${imagen}')`;

}

imagenAleatoria();
setInterval(imagenAleatoria, 15000);