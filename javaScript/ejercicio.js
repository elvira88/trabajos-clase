/*
1.- Crea un html con un archivo externo JS asociado para resolver estos ejercicios
2.- Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades: nombre del cliente, direccion_fisica, email ,tlf y persona_contacto. Al crear el objeto colócale valores a cada propiedad.
3.- Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores.
4.- Imprime por pantalla el nombre del primer objeto
5.- Imprime por pantalla el email del segundo objeto
6.- Cambia el nombre del primero objeto por el valor "Maderas Peralta"
7.- Imprime el valor del nombre del primer objeto
8.- Cambia el email del segundo objeto por el valor "info@micasuci.com"
9.- Imprime el email por pantalla del segundo objeto
10.- Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena de caracteres con los datos de las propiedades de ese objeto, indicando el nombre del objeto el nombre de cada propiedad y el valor asociado a cada propiedad
11.- Imprime por pantalla el valor devuelto por el método toString del primer objeto
12.- Añade un método toString similar en el segundo objeto
13.- Imprime por pantalla el valor devuelvo por el método toString del segundo objeto
14.- Añade un método setter y otro getter al primero objeto por cada propiedad definida en él, sin contar los métodos. 
15.- Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS
16.- Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2 posiciones con dos elementos de tipo numérico 4 y 25
17.- Imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto
18.- Haz un método dentro del primer objeto llamado addFactura, al que se le pase como parámetro un número, que almacene ese valor como una nueva posición al final del array de facturacion del primer objeto
19.- Al imprimir por pantalla el número de elementos de array facturacion debería indicar que tiene 3 elementos
20.- Crea un nuevo método en el primer objeto que sea capaz de devolver el total de facturación de ese objeto, total de los valores almacenados en el array facturacion del primero objeto.El método se llamara totalFacturacion
21.- Imprime por pantalla el valor devuelto por la llamada al método totalFacturacion del primer objeto
22.- Coloca en el primer objeto una nueva propiedad llamada direccionFiscal, el valor de esta propiedad será un objeto, las propiedades de este nuevo objeto serán calle, ciudad, piso, puerta y CP.
23.- Imprime por pantalla el valor de la ciudad de la dirección fiscal del primer objeto
24.- Cambia el CP de la dirección fiscal del primer objeto e imprime por pantalla dicho valor.
*/

/*function init(){
    console.log("Dom cargado");
}
document.addEventListener("DOMContentLoaded",init);*/

var cliente={
    nombreCliente:"Cementos Pepe",
    direccionFisica:"Valladolid",
    email:"cementos_pepe@hotmail.com",
    tlf:983866200,
    personaContacto:"Pepe Pérez",
    toString:function(){
       return "Cliente[nombre:"+this.nombreCliente+",direccion fisica:"+this.direccionFisica+",email:"+this.email+",tlf:"+this.tlf+",persona contacto:"+this.personaContacto+"]";
    },
    getNombreCliente:function(){
        return this.nombreCliente;
    },
    getDireccion:function(){
        return this.direccionFisica;
    },
    getEmail:function(){
        return this.email;
    },
    getTlf:function(){
        return this.tlf;
    },
    getPersonaContacto:function(){
        return this.personaContacto;
    },
    setNombreCliente:function(n){
        this.nombreCliente=n;
    },
    setDireccion:function(n){
        this.direccionFisica=n;
    },
    setEmail:function(n){
        this.email=n;
    },
    setTlf:function(n){
        this.tlf=(n);
    },
    setPersonaContacto:function(n){
        this.personaContacto=n;
    },
    facturacion:[4,25],
    addFactura:function(numero){
        this.facturacion.push(numero);
    },
    
    totalFacturacion:function(){
        var acum=0;
        for(var i in this.facturacion){
            var acum= acum + this.facturacion[i];
        };
        return acum;
    },  
    /* otra manera de hacerlo
    
    totalFacturacion:function(){
        var acum=0;
        for ( let item of this.facturacion){
            acum+=item;
        }
        return acum;    
    }
    
    */
    direccionFiscal:{
        calle:"Mayor",
        ciudad:"Avila",
        piso:"2º",
        puerta:"D",
        CP:"34219",
    }
};
var segundoCliente={
    nombreCliente:"Encofrados Josemari",
    direccionFisica:"Palencia",
    email:"encofrados_josemari@hotmail.com",
    tlf:947866299,
    personaContacto:"Josemari Rodríguez",
    toString:function(){
       return "segundoCliente[nombre:"+this.nombreCliente+",direccion fisica:"+this.direccionFisica+",email:"+this.email+",tlf:"+this.tlf+",persona contacto:"+this.personaContacto+"]";
    },
    getNombreCliente:function(){
        return this.nombreCliente;
    },
    getDireccion:function(){
        return this.direccionFisica;
    },
    getEmail:function(){
        return this.email;
    },
    getTlf:function(){
        return this.tlf;
    },
    getPersonaContacto:function(){
        return this.personaContacto;
    },
    setNombreCliente:function(n){
        this.nombreCliente=n;
    },
    setDireccion:function(n){
        this.direccionFisica=n;
    },
    setEmail:function(n){
        this.email=n;
    },
    setTlf:function(n){
        this.tlf=(n);
    },
    setPersonaContacto:function(n){
        this.personaContacto=n;
    },
};

console.log(cliente.nombreCliente);
console.log(segundoCliente.email);
cliente.nombreCliente="Maderas Peralta";
console.log(cliente.nombreCliente);
segundoCliente.email="info@micasuci.com";
console.log(segundoCliente.email);
console.log(cliente.toString());
console.log(segundoCliente.toString());
console.log(cliente.getEmail());
cliente.setNombreCliente("Mariano Rajoy");
console.log(cliente.getNombreCliente());
console.log(segundoCliente.getDireccion());
segundoCliente.setDireccion("Valencia");
console.log(segundoCliente.getDireccion());
segundoCliente.setEmail("ejemplo@gmail.com");
console.log(segundoCliente.getEmail());
cliente.setTlf("655654488");
console.log(cliente.getTlf());
cliente.setPersonaContacto("Inés Arrimadas");
console.log(cliente.getPersonaContacto());
// para añadir una propiedad al objeto también podría ser 
// cliente.facturacion=[4,25]; pero aquí no está muy bien colocado
console.log(cliente.facturacion[0]);
console.log(cliente.facturacion);
cliente.addFactura(8);
console.log(cliente.facturacion.length);
console.log(cliente.totalFacturacion());
console.log(cliente.direccionFiscal);
console.log(cliente.direccionFiscal.ciudad);
cliente.direccionFiscal.CP="47005";
console.log(cliente.direccionFiscal.CP);




