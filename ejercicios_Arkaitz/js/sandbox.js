function init(){
    console.log("Página cargada");
    $("div.module").css("color", "red");
    $("#myList li:nth-child(3)").css("background-color","lightblue");
    $("#myList li:nth-last-child(5)").css("background-color","yellow");
    $("#myListItem").css("background-color","pink");
    $("label").css("background-color","yellow");
}
$("document").ready(init);