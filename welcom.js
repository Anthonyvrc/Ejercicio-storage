let botonElim = document.getElementById("botonElim");
let encabezado1 = document.getElementsByTagName("h1").item(0);

//Welcome

if (localStorage.getItem("nombre") !=null){
    let nombre = localStorage.getItem ("nombre");
    encabezado1.innerText = `Hola ${nombre}, bienvenido de nuevo`;

} else {
    encabezado1.innerText = "Por favor vuelve al inicio e ingresa tu nombre";
}

botonElim.addEventListener("click", function (event){
event.preventDefault();
localStorage.removeItem("nombre");
encabezado1.innerText = "Por favor vuelve al inicio e ingresa tu nombre";

});