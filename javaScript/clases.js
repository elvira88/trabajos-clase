/*
1.- Crea un fichero HTML que incluya un fichero JS externo
2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
3.- Di que la clase Moto tiene una característica llamada matricula
4.- Crea un objeto de la clase Moto llamado miburra
5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H"
6.- Imprime por pantalla el valor de la matrícula de miburra
7.- Coloca dentro de la clase Moto otra propiedad llamada km
8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
9.- Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla
10.- Crea los getter y setter de km y matricula para la clase Moto
11.- Utilízalos desde el objeto miburra
12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetros y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor
14.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
15.- Crea un objeto de la clase Aminal, llamado animalico
16.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
17.- Cambia la edad de animalico a 3
18.- Imprime por pantalla la edad de animalico
*/
var Moto=function(){
    this.matricula="";
    this.km=0;
    this.getMatricula=function(){
        return this.matricula;
    };
    this.setMatricula=function(matricula){
        this.matricula=matricula;
    };
    this.getKm=function(){
        return this.km;
    };
    this.setKm=function(kilometro){
        this.km=kilometro;
    }
};
var miburra= new Moto;
miburra.matricula="SA1234H";
console.log(miburra.matricula);

var miMoto= new Moto();
console.log(miMoto.km);

console.log(miburra.getKm());
miburra.setKm(3544);
console.log(miburra.getKm());
miburra.setMatricula("7736FPH");
console.log(miburra.getMatricula());

var Moto=function(km,matricula){
    this.km=km;
    this.matricula=matricula;
}
var suMoto = new Moto(1000,"7777BMV");

var Animal=function(){
    this.edad=0;
};
var animalico = new Animal();
console.log(animalico);
console.log(animalico.edad);
animalico.edad=3;
console.log(animalico.edad);