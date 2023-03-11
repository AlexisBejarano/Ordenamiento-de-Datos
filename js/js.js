let lista = [9,6,5,8,2,1];

function capturar() {

    let dato = document.getElementById("dato").value;
    lista.push(dato);
    console.log(lista);

}

function busquedaSucesiva() {
    let busqueda = document.getElementById("datoBusqueda").value;
    var bandera = true;


    for (i = 0; i <= lista.length; i++) {
        if (lista[i] == busqueda) {
            console.log('el numero ' + busqueda + ' esta en la posiscion numero ' + i);
            bandera = false;
            i = lista.length + 1;
        }

    }
    if (bandera == true) {
        console.log('No se encontro el numero');
    }
}

function ordenarBurbuja() {
    for (l = 0; l < lista.length - 1; l++) {
        for (k = 0; k <= lista.length - 2 - l; k++) {
            if (lista[k] > lista[k + 1]) {
                let aux = lista[k];
                lista[k] = lista[k + 1];
                lista[k + 1] = aux;
                
            }
            console.log(lista);
        }
        console.log('resultado final '+lista);
    }
    console.log('resultado finallito '+lista);
}

function ordenarBidireccional() {
    for (l = 0; l < lista.length - 1; l++) {
        for (k = 0; k <= lista.length - 2 - l; k++) {
            if (lista[k] > lista[k + 1]) {
                let aux = lista[k];
                lista[k] = lista[k + 1];
                lista[k + 1] = aux;
                console.log('resultado final if1 '+lista);
            }
            console.log('resultado final for1 '+lista);
        }
        for(m=0; m<lista.length-2;m++){
            if (lista[lista.length-1-m] < lista[lista.length- 2-m]) {
                let aux2 = lista[lista.length-1-m];
                lista[lista.length-2-m] = lista[lista.length-1-m];
                lista[lista.length-1-m] = aux2;
                console.log('resultado if '+lista);
            }
            console.log('resultado del for 2 '+lista);
        }
        console.log('resultado final de los dos for '+lista);
    }
    console.log('resultado final del for main '+lista);
    
}