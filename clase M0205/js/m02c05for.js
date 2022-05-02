for(i=0;i<10;i++){
    console.log ("el valor de i es: "+ i);
}
//...........para contar 2 de 2
for(i=0;i<10;i+=2){
    console.log ("el valor de i es: "+ i);
}
//..............para contar de 3 en 3
for(i=0;i<11;i+=3){
    console.log ("el valor de i es: "+ i);
}
//........... da el indice alreves
for(i=0;i>0;i--){
    console.log ("el valor de i es: "+ i);
}
//............ para buscar una letra 
var letras="abcdefghij";
for(i=0; i<letras.length;i++){

    console.log (letras[i]);
}

///............copiar pantallaso





/////................desafia a partir de una palabra que cuente las letras de para en un par 
let palabra="hola como estas buen dia"
for(i=0; i<palabra.length; i+=2){
    console.log (palabra[i]);
}
console.log("-----------------------------------")
///....................ejercicio generar el arreglo alrrevez   

let palabra2="mucho gusto fjdk"
let resultado=[];
for(i=palabra.length-1;i>=0;i--){//porque el indice no puede contar desde 0 hacia abajo el indice que//  empezaria el -1 porque empieza dxe la ultima
    console.log (palabra[i]);
    resultado.push(palabra[i]);
}
console.log(resultado);

/////...lo mismo de arriba pero deja arreglar cualquier arreglo

