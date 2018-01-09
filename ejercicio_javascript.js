                                        //ejercicio 1

var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

for(i in meses){
    console.log(meses[i]);
}

                                        //ejercicio 2

var valores=[true, 5, false, "hola", "adiós", 2]
    
    console.log(valores[1]);
    console.log(valores[5]);
    
    console.log(valores[3]);
    console.log(valores[4]);
    


    console.log(valores[1]+valores[5]);


    if (valores[1]>valores[5]){
        console.log("Es mayor!!")
        }
          
                                        //ejercicio 3

var nuevo_array=["pepe","juan","gianmarco","vir","edu","jose","rajoy","paco","eva","ana"]


//ejercicio profe

var diez=[];
for (var i=0; i<10; i++){
    diez.push(0);   //necesario para que el array no esté vacío
}
    console.log(diez);
    
//bucle while
    var i = 0;
    while (i<nuevo_array.length){           //while (i<10){
        console.log(nuevo_array[i]);
        i++;
    }
  
//bucle do while
    var i=0                                 //ya estaba definida arriba, no haría falta ponerla otra vez
    do {    
        console.log(nuevo_array[i]);        //hacerlo tb con (i<10)
        i++;
    }while (i<nuevo_array.length)
        
//bucle for
    for (var i=0; i<nuevo_array.length;i++){        //hacerlo tb con (i<10)
        console.log(nuevo_array[i])
    }
    
//bucle for each
    for (i in nuevo_array){                     //for (var i in nuevo_array){   sería más formal
        console.log(nuevo_array[i]);
    }  
       
//otro array

var otro_array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


/*ejercicio profe

var veinte=[];
for (var i=0; i<20; i++){
    veinte.push(0);   //necesario para que el array no esté vacío
}
    console.log(veinte);
 */   
 
 //bucle while
var i=0
 while (i<20){
        console.log(otro_array[i]);
        i++;
    }


//bucle do while
    var i=0
    do {
        console.log(otro_array[i]);
        i++;
    }while(i<otro_array.length)
    
//bucle for
    for (var i=0;i<otro_array.length;i++){
        console.log(otro_array[i])
    }
        
for (i in otro_array){
     console.log(otro_array[i]);
     }  
        
                                    //otro bloque del ejercicio 3        
var numero_errores="Black"                              //los paréntesis del case (1) y etc no son necesarios
switch(numero_errores){
            case 1:
                console.log("No lo has hecho mal");
                break;
            case 2:
                console.log("Puede pasar");
                break;
            case "Black":
                console.log("¿Cuántos consejeros tiene Bankia?")
                break;
            default:
                console.log("Suspendido!")
   }


var ultimo_array=[1,2,3,4,5,6,7,8,9,10]
for (var i=0;i<10;i+=2){
    console.log(i);
}///muestra valores pares

/*console.log(ultimo_array[i])      muestra los valores impares*/