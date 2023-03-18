let lista = [];
let cantidadDatosLista = 0;
console.log(lista);
//Leer archivo
const input = document.getElementById('file');
const editor = document.getElementById('contenido');
input.addEventListener('change', function() {
    if (input.files.length > 0) {
        readFile(input.files[0]);
    }
});

function readFile(file) {
    const reader = new FileReader();
    reader.onload = function() {
        editor.value = reader.result;
        //metemos los datos capturados a una variable
        let archivoLeido = editor.value;
        console.log(archivoLeido);
        //separamos el archivo por Enter y lo metemos al arreglo con el metodo .split('\n').
        //con .map(number) cambiamos el arreglo que era String a Entero.
        lista = archivoLeido.split('\n').map(Number);
        console.log("El arreglo es : ", lista);
        //Metemos en variable la cantidad que contiene la Lista.
        cantidadDatosLista = lista.length;
        
    }
    reader.readAsText(file);
}
//Leer digitos ingresados.
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
            //console.log(lista);
        }
        //console.log('resultado final '+lista);
    }
    console.log('resultado finallito ' + lista);
    //Grafica
        var trace1 = {
            type: 'bar',
            x: cantidadDatosLista,
            y: lista,
            marker: {
                color: '#C8A2C8',
                line: {
                    width: 1
                }
            }
        };
        var data = [trace1];
        var layout = {
            title: 'Responsive to window\'s size!',
            font: {
                size: 18
            }
        };
        var config = {
            responsive: true
        }
        Plotly.newPlot('myDiv', data, layout, config);
        //fin grafica
}

function ordenarBidireccional() {
    //console.log('La lista es: ' + lista);
    for (l = 0; l < lista.length - 1; l++) {
        for (k = 0; k <= lista.length - 2 - l; k++) {
            if (lista[k] > lista[k + 1]) {
                let aux = lista[k];
                lista[k] = lista[k + 1];
                lista[k + 1] = aux;
                //console.log('resultado final if 1 | '+lista);
            }
            //console.log('resultado final for 1 | '+lista);
        }
        for (m = 0; m < lista.length - 1; m++) {
            if (lista[lista.length - 1 - m] < lista[lista.length - 2 - m]) {
                let aux2 = lista[lista.length - 2 - m];
                lista[lista.length - 2 - m] = lista[lista.length - 1 - m];
                lista[lista.length - 1 - m] = aux2;
                //console.log('resultado if '+lista);
            }
            //console.log('resultado del for 2 | '+lista);
        }
        //console.log('resultado final de los dos for | '+lista);
    }
    console.log('resultado final del for main | ' + lista);
}

function MetodoIncersion() {
    console.time();
    for (n = 0; n < lista.length - 1; n++) {
        for (o = n + 1; o >= 0; o--) {
            if ((lista[o - 1] > lista[o])) {
                let aux = lista[o - 1];
                lista[o - 1] = lista[o];
                lista[o] = aux;
            }
            //  console.log(lista);
        }
        //console.log('resultado de la vuelta '+ n +" lista: "+lista);
    }
    console.log('resultado finallito ' + lista);
    console.timeEnd();
}

function MetodoporCasillas() {
    console.time();
    const bucketSort = lista => {
        if (lista.length === 0) {
            return lista;
        }
        let i,
            minValue = lista[0],
            maxValue = lista[0],
            bucketSize = 5;
        lista.forEach(function(currentVal) {
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                maxValue = currentVal;
            }
        })
        let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
        let allBuckets = new Array(bucketCount);
        for (i = 0; i < allBuckets.length; i++) {
            allBuckets[i] = [];
        }
        lista.forEach(function(currentVal) {
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
        });
        lista.length = 0;
        allBuckets.forEach(function(bucket) {
            insertion(bucket);
            bucket.forEach(function(element) {
                lista.push(element)
            });
        });
        return lista;
    }
    const insertion = lista => {
        let length = lista.length;
        let i, j;
        for (i = 1; i < length; i++) {
            let temp = lista[i];
            for (j = i - 1; j >= 0 && lista[j] > temp; j--) {
                lista[j + 1] = lista[j];
            }
            lista[j + 1] = temp;
        }
        return lista;
    };
    console.log(bucketSort(lista));
    console.timeEnd();
}

function MetodoShell() {
    console.time();
    for (n = 0; n < lista.length - 1; n++) {
        for (o = n + 1; o >= 0; o--) {
            if ((lista[o - 1] > lista[o])) {
                let aux = lista[o - 1];
                lista[o - 1] = lista[o];
                lista[o] = aux;
            }
            //  console.log(lista);
        }
        //console.log('resultado de la vuelta '+ n +" lista: "+lista);
    }
    console.log('resultado del metodo de Shell ' + lista);
    console.timeEnd();
}

function radixSort(arr) {
    const getMax = () => {
        let max = 0;
        for (let num of arr) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
    const countSort = (arr, exp) => {
        const output = new Array(arr.length);
        const count = new Array(10).fill(0);
        for (let num of arr) {
            const digit = Math.floor(num / exp) % 10;
            count[digit]++;
        }
        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    }
    const max = getMax();
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(arr, exp);
    }
    return arr;
    console.log(max);
}