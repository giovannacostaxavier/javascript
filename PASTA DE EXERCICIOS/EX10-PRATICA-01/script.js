const numero = [10,20,30,40,50]
const dobro = numero.map((el)=>{
    return el*2
})
console.log(dobro);


const celcius = [10,20,30,40,50]
const farenhite = celcius.map((el)=>{
    return  (el * 9/5) + 32
})
console.log(farenhite);

const dados1 = [
    {nome:'Carla', idade:28},
    {nome:'Pedro', idade:28},
    {nome:'Joao', idade:2},
    {nome:'Jose', idade:1}

]
const soNome = dados.map((el)=>{
    return el.nome
})
console.log(soNome);

const nomes1 = ["Carla","Joao","Jose","Pedro"]
const maiusculas = nomes.map(el => el.toUpperCase())
console.log(maiusculas);

const numeros1 = [10,20,30,40,50]
const novoNumero = numeros.map((el=>{
    return `Numero:${el}`
}))
console.log(novoNumero);

const dados = [
    {nome:"Carla", idade:29},
    {nome:"Pedro", idade:28},
    {nome:"Joao", idade:2},
    {nome:"Jose", idade:1},
]

const novosDados = dados.map((el=>{
    return `A pessoa se chama ${el.nome} e tem ${el.idade} anos!`
}))
console.log(novosDados);

const numeros = [10,34,27,50,55,8]
const pares = numeros.filter(el => el%2===0)
console.log(pares);

const idade = [10,16,20,25,55,14]
const maiorIdade = idade.filter((el=>{
    if (el >= 18){
        return el
    }
}))
console.log(maiorIdade);

const nomes2 = ["Giovanna","Gabriela","Jorge","Pedro","Gilvan","Gerson","Ruan"]
const comG = nomes.filter(el=> el[0] === "G")
console.log(comG);

const estoque = [
    {produto: "geladeira", estoque:5},
    {produto: "microondas", estoque:0},
    {produto: "ferro de passar", estoque:3},
    {produto: "aquecedor", estoque:0},
    {produto: "celular", estoque:1},
    {produto: "TV", estoque:5},
   
]
const emEstoque = estoque.filter(el=> el.estoque > 0)
console.log(emEstoque);

const notas = [
    {aluno: "Carla", nota: 7},
    {aluno: "Joao", nota: 10},
    {aluno: "Jose", nota: 8},
    {aluno: "Pedro", nota: 5},
] 
const aprovado = notas.filter(el=> el.nota >=7)
console.log(aprovado);

const nomes = ["Pedro","Carla","Luana","Joao","Barbara","Ricardo"]
const letrasNome = nomes.filter(el=> el.length===5)
console.log(letrasNome);

const usuarios =[
    {usuario: "Carla", posicao: "ativo"},
    {usuario: "Pedro", posicao: "inativo"},
    {usuario: "Junior", posicao: "ativo"},
    {usuario: "Joao", posicao: "ativo"},
]

const ativos = usuarios.filter(el=> el.posicao === "ativo")
console.log(ativos);








