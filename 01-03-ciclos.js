//Ciclo while
let contador=0;
while(contador<3){
    console.log(contador);
    contador++;
}
console.log('Fin del ciclo while');
console.log('---------------------------------------------------------------');

//Do while
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
}while(conteo<3);
console.log('Fin del ciclo do while');
console.log('---------------------------------------------------------------');

//for
for( let contando=0; contando<3; contando++){
    console.log(contando)
}

console.log('Fin del ciclo for')
console.log('---------------------------------------------------------------');

//Palabra reservada Brak
for(contando= 0; contando<=10;contando++){
    if(contando % 2==0){
        console.log(contando); //Muestra todos los pares
        break;
    }
}
console.log('Termina el ciclo al encontrar el primer num par')

//Palabra continue
console.log('---------------------------------------------------------------');

for(contando= 0; contando<=10;contando++){
    if(contando % 2!==0){
        
        continue; //Continuara a la sig iteracion
    }
    console.log(contando);
}
console.log('Termina el ciclo')
console.log('---------------------------------------------------------------');

//Etiqueta Labels
inicio:
for(contando= 0; contando<=10;contando++){
    if(contando % 2!==0){
        break inicio; //Continuara a la sig iteracion
    }
    console.log(contando);
}
console.log('Termina el ciclo')