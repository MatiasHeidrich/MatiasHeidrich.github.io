
let menuVisible = false;
// Funcion que muestra u oculta el menú

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } 

    else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
// Funcion que oculta el menu una vez que se selecciona una opción
    document.getElementById("nav").classList ="";
    menuVisible = false;
}