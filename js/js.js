let lista = [3,1,8,6,10,1];

//Leer archivo
const input = document.getElementById('file');
const editor = document.getElementById('contenido');
input.addEventListener('change', function () {
  if (input.files.length > 0) {
    readFile(input.files[0]);
  }
});

function readFile(file) {
  const reader = new FileReader();

  reader.onload = function() {
    editor.value= reader.result; 
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
            console.log(lista);
        }
        console.log('resultado final '+lista);
    }
    console.log('resultado finallito '+lista);
}

function ordenarBidireccional() {
    console.log('La lista es: ' + lista);

    for (l = 0; l < lista.length - 1; l++) {
        for (k = 0; k <= lista.length - 2 - l; k++) {
            if (lista[k] > lista[k + 1]) {
                let aux = lista[k];
                lista[k] = lista[k + 1];
                lista[k + 1] = aux;
                console.log('resultado final if 1 | '+lista);
            }
            console.log('resultado final for 1 | '+lista);
        }
        for(m=0; m<lista.length-1;m++){
            if (lista[lista.length-1-m] < lista[lista.length-2-m]) {
                let aux2 = lista[lista.length-2-m];
                lista[lista.length-2-m] = lista[lista.length-1-m];
                lista[lista.length-1-m] = aux2;
                console.log('resultado if '+lista);
            }
            console.log('resultado del for 2 | '+lista);
        }
        console.log('resultado final de los dos for | '+lista);
    }
    console.log('resultado final del for main | '+lista);
    
}

function MetodoIncersion() {
    console.time();
    for (n = 0; n < lista.length - 1; n++) {
        for (o = n+1; o >= 0 ; o--) {
            if ((lista[o-1] > lista[o])) {
                let aux = lista[o-1];
                lista[o-1] = lista[o];
                lista[o] = aux;
                
            }
          //  console.log(lista);
        }
        //console.log('resultado de la vuelta '+ n +" lista: "+lista);
    }
    console.log('resultado finallito '+lista);
    console.timeEnd();
}

function MetodoporCasillas() {
    console.time();
    for (n = 0; n < lista.length - 1; n++) {
        for (o = n+1; o >= 0 ; o--) {
            if ((lista[o-1] > lista[o])) {
                let aux = lista[o-1];
                lista[o-1] = lista[o];
                lista[o] = aux;
                
            }
          //  console.log(lista);
        }
        //console.log('resultado de la vuelta '+ n +" lista: "+lista);
    }
    console.log('resultado finallito '+lista);
    console.timeEnd();
}

function MetodoShell() {
    console.time();
    for (n = 0; n < lista.length - 1; n++) {
        for (o = n+1; o >= 0 ; o--) {
            if ((lista[o-1] > lista[o])) {
                let aux = lista[o-1];
                lista[o-1] = lista[o];
                lista[o] = aux;
                
            }
          //  console.log(lista);
        }
        //console.log('resultado de la vuelta '+ n +" lista: "+lista);
    }
    console.log('resultado del metodo de Shell '+lista);
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