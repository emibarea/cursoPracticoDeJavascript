function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

function calcularMedia(lista) {
  if (esPar(lista.length)) {
    const mitadLista = parseInt(lista.length / 2);
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    mediana = (elemento1 + elemento2) / 2;
    return mediana;
  } else {
    const mitadLista = parseInt(lista.length / 2);
    mediana = lista[mitadLista];
    return mediana;
  }
}
