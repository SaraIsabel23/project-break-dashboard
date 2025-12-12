

const inputNombre = document.getElementById("name-input");
const inputUrl    = document.getElementById("url-input");
const botonAñadir = document.getElementById("link-button");
const lista       = document.getElementById("links-container");


function añadirLink(){
    const nombre = inputNombre.value;
    const url    = inputUrl.value;

    if(nombre === "" || url === ""){
        alert("Por favor, completa ambos campos");
        return;
    }
    const nuevoLink = {nombre, url};

    const linksGuardados = localStorage.getItem("arrayLinks");

    let listaLinks;

    if(linksGuardados === null){
        listaLinks = [];   
    }else {
        listaLinks = JSON.parse(linksGuardados);
    }

    listaLinks.push(nuevoLink);
    localStorage.setItem("arrayLinks", JSON.stringify(listaLinks));

    inputNombre.value = "";
    inputUrl.value    = "";
    
    pintarLinks()
}

function eliminarLink(indice){
    const linksGuardados = localStorage.getItem("arrayLinks");

    if(linksGuardados === null)
        return;

    const arrayLinks = JSON.parse(linksGuardados);
    arrayLinks.splice(indice, 1);

    localStorage.setItem("arrayLinks", JSON.stringify(arrayLinks));

    pintarLinks();
}


function pintarLinks(){
    lista.innerHTML = "";
    const datosGuardados = localStorage.getItem("arrayLinks");

    if(datosGuardados === null)
        return;

    const arrayLinks = JSON.parse(datosGuardados);

    for(let i = 0; i < arrayLinks.length; i++){
        const link = arrayLinks[i];

        const li   = document.createElement("li");
        const a    = document.createElement("a");
        const btnX = document.createElement("button");

        a.textContent = link.nombre;
        a.href        = link.url;
        a.target      = "_blank";

        btnX.textContent = "x";
        btnX.className   = "boton-eliminar";
        btnX.addEventListener("click", function(){
            eliminarLink(i);
        });

        li.appendChild(a);
        li.appendChild(btnX);
        lista.appendChild(li);

    }

}


botonAñadir.addEventListener("click", añadirLink);
pintarLinks()


