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

// Aca interactuamos con el html

//Codigo Cuadrado
function calcularPerimetroCuadrado(){
 const input = document.getElementById("inputCuadrado");
 const value = input.value;
 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Codigo Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("input1Triangulo");
    const value1 = parseInt(input1.value);

    const input2 = document.getElementById("input2Triangulo");
    const value2 = parseInt(input2.value);

    const input3 = document.getElementById("input3Triangulo");
    const value3 = parseInt(input3.value);

    const input4 = document.getElementById("input4Triangulo");
    const value4 = parseInt(input4.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("input3Triangulo");
    const value3 = parseInt(input3.value);

    const input4 = document.getElementById("input4Triangulo");
    const value4 = parseInt(input4.value);

    const area = areaTriangulo(value3,value4);
    alert(area);
}

//Codigo Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}