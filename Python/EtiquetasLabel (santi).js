// Palabra reservada break y Etiqeuitas Labels
for(Let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando);
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer numero par");

// La palabra continue

for(Let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue inicio; // ir a la siguiente iteracion
    }
    console.log(contando);
}
console.log("Termina el ciclo");


//TAMBIEL LO DEJO CON EL BREAK POR LAS DUDAS


for(Let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        break inicio; // ir a la siguiente iteracion
    }
    console.log(contando);
}
console.log("Termina el ciclo");
