// Codigo del cuadrado

console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del triangulo

console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base
}

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 6;
// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm")

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm")

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base * altura) / 2
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo

console.group("Circulo");

// const radioCirculo = 4;
// console.log("El radio del circulo es de: " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2
}

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo ds de: " + diametroCirculo + "cm");

const PI = Math.PI;
function perimetroCirculo(radio){
const diametro = diametroCirculo(radio);
return parseInt(diametro * PI);
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es de: " + parseInt(perimetroCirculo) + "cm");

function areaCirculo(radio){
    return PI * radio * radio
}

// const areaCirculo = PI * radioCirculo * radioCirculo;
// console.log("El area del circulo es de: " + parseInt(areaCirculo) + "cm^2");

console.groupEnd();