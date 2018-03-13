function pideCosas(){
    $.getJSON("http://localhost:3000/api/", function (datos) {
        $("body").append("<h1>" + datos.propiedad + "</h1>");
    });

    $.getJSON("http://localhost:3000/api/libros/", function (datos) {
        var html = "<ul>";
        for (var item of datos) {
            html += "<li>" + item.titulo + " de " + item.autor + "</li>";
        }
        html += "</ul>";
        $("body").append(html);
    });
}

function enviaForm(event){
    event.preventDefault();
    var usuarioValor = $("#usuario").val();
    var passwordValor = $("#password").val();
    var datosFormulario = {
        usuario: usuarioValor,
        password: passwordValor
    };
    $.post("http://localhost:3000/api/login/", datosFormulario, function (datos) {
            console.log(datos);
            if(datos.result==true){ //datos correctos
                $("#muestraLogin").html("Login correcto");
            }else{ //datos incorrectos
                $("#muestraLogin").html("Login incorrecto");
            }
        })
        .fail(function () {
            console.log("error");
        });
}

function init() {
    console.log("Todo va bien!");
    $("#login").submit(enviaForm);
    $("#pide").click(pideCosas);
};
$(document).ready(init);
