 //ejercicio 1
var array200 = [];

for (var i=0;i<200;i++){
    array200.push(1);       //puede ser array200[i]=0;
}                               //si el console.log estuviera dentro del {} habría que poner console.log(array200[i]);
 //ejercicio 2
   console.log(array200);

//ejercicio 3
array200[4]="Hola caracola";
array200[7]="¿Qué haces?";
array200[18]="Programando ando";

//ejercicio 4
array200[9]=true;
array200[34]=false;
array200[45]=true;

//ejercicio 5
var array30=[];
for (var i=0;i<30;i++){
    array30.push(30);             //puede ser array30[i]=0;
}

//ejercicio 6
// (bucle while)
var i=0
while (i<30){
    console.log(array30[i]);
    i++;
}

//  (bucle do-while)
var i=0
do{
    console.log(array30[i]);
    i++
}while (i<30)
    
//  (bucle for)
for (i=0;i<30;i++){
    console.log(array30[i])
}

//(bucle for in)
for (var i in array30){
    console.log(array30[i])
}

//ejercicio 7
var tengoCarnet=true;

//ejercicio 8
if (tengoCarnet){
    console.log("Puedes conducir")
}

//ejercicio 9
var nota=9

//ejercicio 10
if(nota < 5){
    console.log("Suspenso");
} else if (nota>=5 && nota<7){
    console.log("Aprobado");
} else if (nota>=7 && nota<9){
    console.log("Notable");
} else if (nota>=9 && nota<=10){
    console.log("Sobresaliente");
} else if (nota>10){
    console.log("Matrícula de honor")
}
/* 
podríamos añadir esto por si el valor de la var nota fuera una string x ejemplo
else{
    console.log("¿Pero cómo va esto?")
}
*/