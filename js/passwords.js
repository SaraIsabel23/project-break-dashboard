const input = document.getElementById("length");
const btn   = document.getElementById("getPassword");
const passw = document.getElementById("resultPassword");

const letrasMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinus = "abcdefghijklmnopqrstuvwxyz";
const numeros     = "0123456789";
const simbolos    = "!@#$%^&*()-_=+";
const todosCaract = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";


function getCharacter(string){
    const aleatorio = Math.floor(Math.random()* string.length);

    const character = string[aleatorio];
    return character;
};

//console.log(getCharacter(letrasMayus));

function generarPassword(){
    const valor = input.value;
    
    if(valor === "" || parseInt(valor) < 12 || parseInt(valor) >50){
        passw.textContent = "Error, introduce un número válido entre 12 y 50";
        return;
    }

    let passwordGenerada = "";

    passwordGenerada += getCharacter(letrasMayus);
    passwordGenerada += getCharacter(letrasMinus);
    passwordGenerada += getCharacter(numeros);
    passwordGenerada += getCharacter(simbolos);

    let faltantes = parseInt(valor -4);



    for(let i = 0; i < faltantes; i++){
        passwordGenerada += getCharacter(todosCaract);
    }

    passw.textContent = passwordGenerada;

}

btn.addEventListener("click", generarPassword);


