let lista = [9,6,5,8,2,1,18,1000,15,0];

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