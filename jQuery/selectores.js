function init(){
    console.log("Página cargada");
    $("p").css("background-color","yellow");
    $(".parrafo1").css("background-color","lightblue");
    $("#parrafo2").css("background-color","orange");
    $("a[href='http://google.es']").css("background-color","#ff00ff");
    $("ul li:first").css("background-color","red");
    $("ul li:last").css("background-color","lightblue");
    $("ul li:nth-child(5)").css("background-color","yellow");
    $("input").css("background-color","lightblue");
}
$("document").ready(init);