const produtos = [
    {nome: 'maquina de lavar', valor: 50.00, desconto: true},
    {nome: 'ferro de passar',  valor: 20.00, desconto: false},
    {nome: 'secador de cabelo', valor: 100.00, desconto: true},
    {nome: 'microondas', valor: 30.00, desconto: true},
    {nome: 'fogão', valor: 200.00, desconto: false},
    {nome: 'celular', valor: 500.00, desconto: true}
]
const novosprodutos = produtos.map(produto =>{
    const novovalor = produto.desconto ?  produto.valor * 0.9 : produto.valor
    return{
        nome: produto.nome,
        valor: novovalor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        desconto: produto.desconto
    }
   
    
})
    console.log(novosprodutos);


    const numeros = [10,20,30,40,50]
    const dobro = numeros.map((dobrar)=>{
        return dobrar * 2
        
    })
    console.log(dobro);

    const nomes = ['Joao','Jose','Pedro','Carla']
    const saudacao = nomes.map(saunome =>{
        return `Olá ${saunome}!`
    })
    console.log(saudacao);

    const retangulo = [
        {largura:5, altura: 20},
        {largura:10, altura: 10},
        {largura:8, altura: 20},
        {largura:5, altura: 30},
    ]
    const calculoArea = retangulo.map(calculo =>{
        return calculo.largura * calculo.altura
    })
    console.log(calculoArea);
    
    
    
    