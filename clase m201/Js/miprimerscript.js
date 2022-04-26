//declaracion de variable(numeros)
/*este es un comentario de varias lineas*/



var edad = 26;
var decada = 10

edad = 26;
edad = 40;
edad = 34;

edad = decada; //asignar el valor 10 (contenido en decada) a la variable edad
edad = decada +5; // le asigno el resultado de 10+5 (10 es lo que contiene la variable decada)
edad = edad + 1; // le sumo a si mismo
edad = decada*5; // le asigno 50 5*1 (porque decada aun vale 10)  
edad = decada*6+ 20; //le asigna 80
edad = (decada*6)+20 // le asigna 80
edad = decada*(6+20); // le asigna 260


///............//
//variable de tipo texto/

 var nombre = "katherine";
 var apellido = "correa"
 var nombrecompleto = nombre + " " + apellido;

 //-----------//

 //variables de tipo booleano esto es de verdadero o falso

 var sinceridad = true;
 var maldad = false;
 var calculo = 5 > 4; //( retorna el resultado de la operacion mayor que) 

//----------------//
//contantes

const valor =10; 
const pi = 3.14

//------------//
//uso de consola en chrome
console.log ("hola mundo!!!!!!!!!");
var agnoActual = 2022;
console.log (" el año actual es " + agnoActual)

var pago = 10000;
console.log (pago);
pago =20000;
console.log (pago);
pago =50000
console.log (pago);
  ///................//
//interatividad con aler y prompt
 // alert ("como estas?");
 // alert ("su pago es de " + pago );


 //....ejercicio 1 preguntar como estas y devolver respuesta al usuario
 //
//  var respuesta =prompt ("como estas?")
  //alert("la respuesta fue: " + respuesta);
//console.log ("la respuesta de usuario fue:" + respuesta);


//ejercicio 2 año nacimiento

77
var agnoNacimiento = prompt ("ingrese su año de nacimiento")
var edad = 2022- agnoNacimiento;
var mayoredad = Number (agnoNacimiento) + 18
alert("su edad es " + edad)
alert ("usted cumplio 18 años en:" + mayoredad); 
















