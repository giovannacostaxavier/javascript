/*function nomeProprio(nome) {
    return `Olá ${nome} !`
}
console.log(nomeProprio("Giovanna"));

function numeros(n1,n2) {
    return n1+n2
}
console.log(numeros(2,5))

function ParouImpar(numero){
     if (numero % 2 === 0) {
        return "Par"
     } else {
        return "Impar"
     }
}
console.log(ParouImpar(5));


function saudacao(nome,idade) {
    return `Olá meu nome é ${nome}, e eu tenho ${idade} anos!`
}
console.log(saudacao("Giovanna", 28));

function PouN(num) {
    if (num >= 0) {
        return "Positivo"
    } else {
       return "Negativo" 
    }
}
console.log(PouN(-1));

const dobrar = (num) => {
     return num * 2
}
console.log(dobrar(5));

const saudacao = (nome) =>{
    return `Olá ${nome} !`
}
console.log(saudacao("Giovanna"));

const par = (numero) =>{
    if (numero % 2 === 0) {
        return `Par`
    }else{
        return `Impar`
    }
}
console.log(par(5));

const soma = (n1,n2) =>{
    return n1+n2
}
console.log(soma(10,20));

const dizerOi = () =>{
    return `Oi`
}
console.log(dizerOi());*/

function* contador(){
    for (let i = 1; i <= 5 ; i++) {
        yield i;
        
    }
}
const itc = contador()

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);





















