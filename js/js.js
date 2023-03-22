let lista = [9,7,6,4,3,2,1];
let preLista = [];
let cantidadDatosLista = 0;
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
    title: 'Datos Registrados',
    font: {
        size: 18
    }
};
var config = {
    responsive: true
}
Plotly.newPlot('graficaDesordenada', data, layout, config);
//fin grafica
//console.log(lista);
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
        //console.log(archivoLeido);
        //separamos el archivo por Enter y lo metemos al arreglo con el metodo .split('\n').
        //con .map(number) cambiamos el arreglo que era String a Entero.
        lista = archivoLeido.split('\n').map(Number);
        //console.log("El arreglo es: ", lista);
        //Metemos en variable la cantidad que contiene la Lista.
        cantidadDatosLista = lista.length;
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
            title: 'Datos Registrados',
            font: {
                size: 18
            }
        };
        var config = {
            responsive: true
        }
        Plotly.newPlot('graficaDesordenada', data, layout, config);
        //fin grafica
    }
    reader.readAsText(file);
}
//Leer digitos ingresados.
function capturar() {
    let dato = document.getElementById("dato").value;
    if (dato == "") {
        window.alert("No se permite caracter String");
        document.getElementById("dato").value = "";
    } else preLista.push(dato);
    lista = preLista.map(Number);
    //console.log(lista);
    document.getElementById('contenido').innerHTML = lista;
    document.getElementById("dato").value = "";
    document.getElementById('cantidadDatosIngresados').innerHTML = "La cantidad de datos ingresados son: " + lista.length;
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
        title: 'Datos Registrados',
        font: {
            size: 18
        }
    };
    var config = {
        responsive: true
    }
    Plotly.newPlot('graficaDesordenada', data, layout, config);
    //fin grafica
}

function busquedaSucesiva() {
    console.time();
    let busqueda = document.getElementById("datoBusqueda").value;
    //console.log(busqueda);
    if (busqueda == "") {
        window.alert("No se permite caracter String");
        document.getElementById("datoBusqueda").value = "";
    } else var bandera = true;
    for (i = 0; i <= lista.length; i++) {
        if (lista[i] == busqueda) {
            document.getElementById("busquedaSucesivaDato").innerHTML = "el numero " + busqueda + " esta en la posiscion numero " + i;
            bandera = false;
            i = lista.length + 1;
        }
    }
    if (bandera == true) {
        document.getElementById("busquedaSucesivaDato").innerHTML = "No se encontro el numero";
    }
     console.timeEnd();
}

function ordenarBurbuja() {
    console.time();

    for (l = 0; l < lista.length - 1; l++) {
        for (k = 0; k <= lista.length - 2 - l; k++) {
            if (lista[k] > lista[k + 1]) {
                let aux = lista[k];
                lista[k] = lista[k + 1];
                lista[k + 1] = aux;
                console.log("if: " +lista);
            }
        }
    }
    console.timeEnd();
    console.log('resultado final ' + lista);
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
        title: 'Datos Ordenados Burbuja',
        font: {
            size: 18
        }
    };
    var config = {
        responsive: true
    }
    Plotly.newPlot('graficaBurbuja', data, layout, config)
    //fin grafica
    document.getElementById('DatosOrdenadosBurbuja').innerHTML = lista;
}

function ordenarBidireccional() {
    console.log('Lista inicial: '+lista);
    console.time();
    for (l = 0; l < lista.length - 1; l++) {
        for (k = 0; k <= lista.length - 2 - l; k++) {
            if (lista[k] > lista[k + 1]) {
                let aux = lista[k];
                lista[k] = lista[k + 1];
                lista[k + 1] = aux;
                console.log('Izquiera a derecha: '+lista);
            }
        }
        for (m = 0; m < lista.length - 2; m++) {
            if (lista[lista.length - 2 - m] < lista[lista.length - 3 - m]) {
                let aux2 = lista[lista.length - 3 - m];
                lista[lista.length - 3 - m] = lista[lista.length - 2 - m];
                lista[lista.length - 2 - m] = aux2;
                console.log('Derecha a Izquierda'+lista);
            }
        }
    }
    console.log('resultado del metodo bidireccional ' + lista);
    console.timeEnd();
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
        title: 'Datos casillas',
        font: {
            size: 18
        }
    };
    var config = {
        responsive: true
    }
    Plotly.newPlot('graficaBidireccional', data, layout, config);
    //fin grafica
    document.getElementById('DatosOrdenadosBidireccional').innerHTML = lista;
}

function MetodoIncersion() {
    console.time();
    for (let n = 0; n < lista.length; n++) {
        const element = lista[n];
        let  o=n-1;
        while (o>=0 && lista[o]>element){
            lista[o+1]=lista[o];
            o--;
        }
        lista[o+1]=element;
    }
    //console.log('resultado del metodo de insercion ' + lista);
    console.timeEnd();

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
        title: 'Datos insercion',
        font: {
            size: 18
        }
    };
    var config = {
        responsive: true
    }
    Plotly.newPlot('graficaInsercion', data, layout, config);
    //fin grafica
    document.getElementById('DatosOrdenadosInsercion').innerHTML = lista;
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
    //console.log("Resultadod el metodo de casillas" + bucketSort(lista));
    console.timeEnd();
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
        title: 'Datos casillas',
        font: {
            size: 18
        }
    };
    var config = {
        responsive: true
    }
    Plotly.newPlot('graficaCasillas', data, layout, config);
    //fin grafica
    document.getElementById('DatosOrdenadosCasillas').innerHTML = lista;
}

function MetodoShell() {
    console.time();
    let incremento = lista.length / 2;

    while (incremento > 0) {
        for (let i = 0; i < lista.length; i++) {
            let j = i;
            let dato = lista[i];

            while (j >= incremento && lista[j - incremento] > dato) {
                lista[j] = lista[j - incremento];
                j -= incremento;
            }

            lista[j] = dato;
        }

        if (incremento == 2) {
            incremento = 1;
        } else {
            incremento = parseInt(incremento * 5 / 11);
        }
    }
    console.timeEnd();


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
        title: 'Datos Shell',
        font: {
            size: 18
        }
    };
    var config = {
        responsive: true
    }
    Plotly.newPlot('graficaShell', data, layout, config);
    //fin grafica
    document.getElementById('DatosOrdenadosShell').innerHTML = lista;
}

function radixSort() {
    console.time();
    var idx1, idx2, idx3, len1, len2, radix, radixKey;
    var radices = {},
        buckets = {},
        curr;
    var currLen, currBucket;
    len1 = lista.length;
    len2 = 10;
    for (idx1 = 0; idx1 < len1; idx1++) {
        radices[lista[idx1].toString().length] = 0;
    }
    for (radix in radices) {
        len1 = lista.length;
        for (idx1 = 0; idx1 < len1; idx1++) {
            curr = lista[idx1];
            currLen = curr.toString().length;
            if (currLen >= radix) {
                radixKey = curr.toString()[currLen - radix];
                if (!buckets.hasOwnProperty(radixKey)) {
                    buckets[radixKey] = [];
                }
                buckets[radixKey].push(curr);
            } else {
                if (!buckets.hasOwnProperty('0')) {
                    buckets['0'] = [];
                }
                buckets['0'].push(curr);
            }
        }
        idx1 = 0;
        for (idx2 = 0; idx2 < len2; idx2++) {
            if (buckets[idx2] != null) {
                currBucket = buckets[idx2];
                len1 = currBucket.length;
                for (idx3 = 0; idx3 < len1; idx3++) {
                    lista[idx1++] = currBucket[idx3];
                }
            }
        }
        buckets = {};
    }
     console.timeEnd();
    //console.log("Resultado del metodo Radix "+lista); 
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
        title: 'Datos Radix',
        font: {
            size: 18
        }
    };
    var config = {
        responsive: true
    }
    Plotly.newPlot('graficaRadix', data, layout, config);
    //fin grafica
    document.getElementById('DatosOrdenadosRadix').innerHTML = lista;
}