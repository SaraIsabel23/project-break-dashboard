

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

function pintarLinks(){
    lista.innerHTML = "";
    const datosGuardados = localStorage.getItem("arrayLinks");

    if(datosGuardados === null)
        return;

    const arrayLinks = JSON.parse(datosGuardados);

    for(const link of arrayLinks){
        const li = document.createElement("li");
        const a  = document.createElement("a");

        a.textContent = link.nombre;
        a.href        = link.url;

        li.appendChild(a);
        lista.appendChild(li);
    }

}


botonAñadir.addEventListener("click", añadirLink);
pintarLinks()

//ME FALTA PONERLE EL BOTON DE ELIMINAR A LOS ENLACES. 
//ESTOY SATURADA, SIGO MAÑANA

