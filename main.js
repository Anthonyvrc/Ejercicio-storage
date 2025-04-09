let inputNombre = document.getElementById("inputNombre");
let botonG =document.getElementById("botonG");


//Index
botonG.addEventListener("click", function (event){
    event.preventDefault();
    let nombre = inputNombre.value;
    localStorage.setItem("nombre", nombre);
});