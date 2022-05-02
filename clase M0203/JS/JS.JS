 //pedir un numero y elevarlo al cuadrado)
var numero = prompt("ingrese numero");//pedir numero y guardarlo en variable
 
if (Number(nuemro)){
    console.log(Number(numero));
     console.log("conversion correcta");
 }else{
     console.log(Number(numero));
     console.log("conversion incorrecta")
 }





 var cuadrado = numero*numero;//calcular el cuadrado
 alert ("el cuadrado de" + numero + "es " + cuadrado);

// // // // //........mismo ejercio para que detecte el valor ingresado els un numero
 var numero = prompt("ingrese numero");//pedir numero y guardarlo en variable
 var cuadrado = numero*numero// calcular el cuadrado del numero


 if(numero=="0"){//caso especial, cuando se ingresa un 0
    alert("el cuadra de 0 es 0")
 }
  if (Number(numero)){//cuando lo ingresado es un numero distinto a 0
      alert ("el cuadrado de " + numero + "es " + cuadrado);
  }else{//caso por defecto: cualquier cosa que no cumpla las condiciones anteriores o no sea numero
      alert("la cifra ingresada no es un numero");

// // // //.........................
//  //ciclos materia pdf
//  //ejercicio cuantos pasajeros entran en la micro

     console.log("inicio,el bus vacio");
  var contador=0 
  while(contador<=20){
      console.log("un nuevo pasajero se ha subido");
     contador=contador+1;
     console.log("hay " + contador + "pasajero(s) en el bus");
     console.log ("__________________________");
  }
  console.log("el bus esta lleno es hora de partir");

// // //........desafio
// ciclo para pedir numero y entregasr la suma de todos ellos hasta que el usuario ingrese 0
  var numero=1;//va a ser la variable desde el promt
 var suma= 0//es la variable donde se van a ir sumando los numero ingresados por el usuario

  while(numero!=0){//preguntamos si el nuemro leido es distinto de 0, si es igual a 0 se termina el ciclo.
   numero =Number(prompt("ingrese un numero (0) para salir"));//leer numero.
   suma=suma+numero;//sumamos al total.
  }
  alert ("la suma es " + suma);//mostramos el resultado.


// //-----------------------------

 var palabra = "";                         //aqui vamos a guardar la palabra que ingrese el ususario

      

 while(palabra!="chao"){                   //si la palabra leido es chao, se sale el ciclo
     palabra=prompt("ingres   e palabra"); //se guarda la palabra ingresada por el usuario
     if(palabra=="hola"){                  // es la palabra hola
         alert("hola que tal");
     }else if (palabra=="chao"){           //es la palabra "chao"
         alert("adios!!")
     }else {                               //la palabra no es ni "chao" ni "hola"
         alert ("no entiendo");
     }
         alert ("fin");
   
//----------------------------------------------
var sumanotas=0;                                   //acumulador, para sumar todas las notas
var contadornotas=0;                               //contador, para contar la cantidad total de notas
var nota;                                          // aqui se guardara lo que ingrese el usuario
 

while(nota!=0) {
    nota= Number (prompt("ingrese nota (0) para salir"));
    if(nota!=0){
         sumanotas+=nota;                             //es lo mismo que sumanotas=
    contadornotas++;
    }
   
    
}

     var promedio = sumanotas/contadornotas; 
alert("promedio=" + promedio);


}
