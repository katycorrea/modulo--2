//funciones
//------------------------------esto no se ejecuta sin un llamado
function miPrimeraFuncion (){
    alert("Esta es mi primera función");
}

function happyBirthday(){
    console.log ("feliz cumpleaño a ti")
    console.log ("feliz cumpleaños a ti")
    console.log ("feliz cumpleaños paula")
    console.log ("que los cumplas feliz")
}


function happyBirthdayConNombre(Nombre){//este nombre eexiste solo en este bloque de codigo
    console.log ("feliz cumpleaño a ti")
    console.log ("feliz cumpleaños a ti")
    console.log ("feliz cumpleaños " + Nombre)// da lo mismo donde este la funcion pero es mejor arriba por orden
    console.log ("que los cumplas feliz")

}
 function potencia(base,exponente){
     
 }

 //ejecutables-----------------------------------------------------------------------
miPrimeraFuncion();  //no olvidar poner los parentesis y ;
  
//con while----------------------esto es mas simple de una sola linea
var contador=0;
while (contador<0){
    miPrimeraFuncion();
    contador++;
}

//es lo mismo a  pero no es optimo
// miPrimeraFuncion();
// miPrimeraFuncion();
// miPrimeraFuncion();
// miPrimeraFuncion();

//-------------------------------------

happyBirthday();//esto es optimo
happyBirthday();
happyBirthday();
 //--------------------------------

 var nombre="Alexis"
happyBirthdayConNombre("katy");
happyBirthdayConNombre(nombre); //esta existe en todo el codigo.
///..............................................




