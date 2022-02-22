// Funciones Helpers

function esPar(numero) {
  return numero % 2 === 0;
}

// Calculadora de mediana

function medianaSalaries(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    e1 = lista[mitad - 1];
    e2 = lista[mitad];
    const mediana = (e1 + e2) / 2;
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

// Mediana general
const salariesCol = colombia.map(function (personas) {
  return personas.salary;
});
const salariesColSorted = salariesCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});
const medianaGeneralCol = medianaSalaries(salariesColSorted);

// Mediana top 10

const spliceStart = (salariesColSorted.length * 90) / 100;

const spliceCount = salariesColSorted.length - spliceStart;

const salariesColTop10 = salariesColSorted.splice(spliceStart, spliceCount);

const medianaGeneral10 = medianaSalaries(salariesColTop10);

console.log({
  medianaGeneralCol,
  medianaGeneral10,
});
