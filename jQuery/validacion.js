/*
Validaciones
1. crea un formulario típico de login en el HTML, con dos campos usuario y contraseña
2. Haz que cuando se pulse el botón de enviar el formulario valide si el nombre de usuario y la contraseña están rellenados o no y sólo si es así deje enviar el formulario, en caso contrario deberá informar al usuario de qué campo o campos faltan por rellenar.
3. Haz el típico formulario de registro con los campos: nombre, email, repetir email, contraseña, repetir contraseña y aceptar condiciones del servicio. Con el botón de enviar el formulario
4. Valida el formulario, haciendo que el nombre tenga al menos 2 caracteres y sea requerido, el email sea valido y coincida en ambos campos, la contraseña tenga al menos 8 caracteres y coincidan y haya aceptado las condiciones del servicio.
(validador equalTo())
*/

function init(){
    console.log("DOM cargado");
    $("#form").validate();
    $("#form2").validate({
        rules:{
            name2:{
                required:true,
                minlength:2
            },
            email:{
                required:true,
            },
            email2:{
                required:true,
                equalTo:"#email",
            },
            password2:{
                minlength:8,
                required:true
            },
            password3:{
                equalTo:"#password2",
                required:true
            },
            aceptoCondiciones:{
                required:true,
            },
        },
        messages:{
            name2:{
                required: "Por favor, introduzca su nombre",
                minlength:"Su nombre es demasiado corto"
            },
            password2:{
                required:"Necesita una contraseña",
                minlength:"Mínimo 8 caracteres"
            }
        },
    });
}
$("document").ready(init);