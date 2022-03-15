var lista1 = [];
var input;

function ingresarDato(){
  
  input = document.getElementById("dato");
  lista1.push(input.value);
}

var lista1Count = {};

function resultado(){
lista1.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

var lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

var moda = lista1Array[lista1Array.length - 1];
alert(moda);
}

