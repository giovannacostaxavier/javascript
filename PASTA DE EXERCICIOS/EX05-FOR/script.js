//CONTADOR 0 A 10
for (let num1 = 0; num1 < 10; num1++) {
    console.log(num1);
    
    
}
//CONTAGEM REGRESSIVA
for(let num1 = 10; num1 >= 1; num1 --){
    console.log(num1);
    
}
//DIVISIVEIS POR 5
let contador = 0
for (let num = 0; num <= 50; num++) {
    if (num % 5 == 0) {
        contador ++
        
    }   
}
console.log(contador);

//FATORIAL DE 5
let fatorial = 1
for (let i = 10; i >= 1; i--) {
    fatorial *= i
    
}
console.log(fatorial);

const cursos = ['JavaScript','CSS','HTML']

for (const curso of cursos) {
    console.log(`Você esta cursando ${curso}`);
    
}

const nome = {
    nome: 'Carla',
    idade: 28,
    curso: 'Engenharia de Software'
}
for (const dados in nome) 
   

console.log(`${dados}: ${nome[dados]}`);
const animais = ['cachorro','gato','papagaio']
for (const animal in animais) {
   console.log(`Na posição ${animal}: ${animais[animal]}`); 
}

const frutas = {
    manga: 20.00,
    banana: 30.00,
    maça: 10.00
}
for (const fruta in frutas){
   console.log(`A ${fruta} custa ${frutas[fruta].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    
}
const cidades =['Buritirama','Brasilia','Porto']
    for (const i in cidades){
        console.log(`A cidade número ${Number(i) + 1} é a cidade de ${cidades[i]} `);
        
    }



    
