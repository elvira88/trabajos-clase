/*
1.- Crea un fichero HTML relacionado con un fichero JS
2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email
4.- Añade los getter y setter a las clase Alumno
5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales
12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a []
13.- En el constructor añade un parámetro más que será el array de notas
14.- Crea un getter y un setter para notas
15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas)
*/
var Alumno = function(nombre="",dni="",tlf="",email="",notas=[]){
    this.nombre = nombre;
    this.dni = dni;
    this.tlf = tlf;
    this.email = email;
    this.notas = notas;
    this.getNombre = function(){
        return this.nombre;
    };
    this.setNombre = function (nombre){
        this.nombre = nombre;
    };
    this.getDni = function(){
        return this.dni;
    };
    this.setDni = function (dni){
        this.dni = dni;
    };
    this.getTlf = function(){
        return this.tlf;
    };
    this.setTlf = function (tlf){
        this.tlf = tlf;
    };
    this.getEmail = function(){
        return this.email;
    };
    this.setEmail = function (email){
        this.email = email;
    };
    this.getNotas = function(){
        return this.notas;
    };
    this.setNotas = function (notas){
        this.notas = notas;
    };
    this.meteNotas=function (notas){
        this.notas.push(notas);
    }
};
/*
17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas)
*/
function notaMedia(){
    var acum = 0;
    for (i in this.notas){
        var acum = acum+ this.notas[i]/this.notas.length;
        console.log(notas[i]);
    }
    return acum;
}
/*
3.- Crea un objeto de la clase Alumno
*/
var alum = new Alumno; 
console.log(alum);
/*
6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros
*/
var alum2 = new Alumno("Pepe","71166456X","912825455","alum2@alumno.com");
console.log(alum2);
/*
7.- Crea la clase Nota que tenga dos atributos: valor, asignatura
9.- Mete los getter y los setter de la clase Nota
10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para cada propiedad. Los parámetros deben poder ser opcionales.
*/
var Nota = function(valor="",asignatura=""){
    this.valor = valor;
    this.asignatura = asignatura;
    this.getValor = function(){
        return this.valor;
    };
    this.setValor = function (valor){
        this.valor = valor;
    };
    this.getAsignatura = function(){
        return this.asignatura;
    };
    this.setAsignatura = function (asignatura){
        this.asignatura = asignatura;
    };
}
/*
8.- Crea un objeto de la clase Nota
*/
var nota1 = new Nota;
/*
 
11.- Crea un objeto de la clase Nota pero pasando los dos parámetros en su creación
*/
var nota2 = new Nota("8","Matemáticas");
/*
16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio
*/
var nota3 = new Nota ("5","Francés");
alum2.meteNotas(nota3);
/*
18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso.
*/
