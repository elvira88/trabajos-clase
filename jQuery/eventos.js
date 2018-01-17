/*
1.- Crea un fichero eventos.html e incluye JQuery
2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla
3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón
3.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón
4.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola
5.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla
6.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos
7.- Coloca un botón en el HTML y haz que cuando me hagan click en el saque un mensaje por consola
8.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también
9.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado
*/
function botonPulsado(){
   console.log ("Botón pulsado");
}

function boton2(){
    $("#otroboton").css("border-color","red");
    //podría ser
    //$("#otroboton").css("border","1px red solid");
}

function botonVerde(){
    $("#tercerboton").css("background-color", "green");
    //podría ser
    // $(this).css("background-color", "green");
    //xq el mismo objeto que modifico es el que dispara el elemento
}

function campoFocuseado(){
    $("#campo").focusin(
    console.log("Campo focusado"));
    //podría ser
    //$("#campo").focus(
    //console.log("Campo focusado"));
}

function campoNoFocuseado(){
    $("#campo").blur(
    console.log("Campo desfocusado"));
}

function gestionaLogin(evento){
    if($("#usuario").val()!="" && $("#password").val()!=""){
       //caso de que el formulario valide. Los campos no pueden ser = a cadena vacía
    }else{
       //caso de no validación
         evento.preventDefault();
    }
}

function entraRaton(){
    $("#enlace").mouseover(
    console.log("El ratón está sobre el enlace"));
    //podrías hacerlo con mouseenter
}

function salRaton(){
    $("#enlace").mouseout(
    console.log("El ratón ha salido del enlace"));
    //podrías hacerlo con mouseleave
}

function validaCampo(){
    if ($("#campo").val()!=""){
        $("#campo").css("border","2px solid green");
    }else{
        $("#campo").css("border","2px solid red");
    }
};

function init(){
    console.log("DOM cargado");
    $("#miboton").click(botonPulsado);
    $("#otroboton").click(boton2);
    $("#tercerboton").click(botonVerde);
    $("#campo").focusin(campoFocuseado);
    $("#campo").blur(campoNoFocuseado);
    $("#login").submit(gestionaLogin);
    $("#ultimoboton").click(botonPulsado);
    $("#enlace").mouseover(entraRaton);
    $("#enlace").mouseout(salRaton);
    $("#campo").blur(validaCampo);
    
}
$("document").ready(init);