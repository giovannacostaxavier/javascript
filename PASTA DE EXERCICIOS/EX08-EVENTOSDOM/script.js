const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const botao = document.querySelector("button")
const cursos = [...document.querySelectorAll(".cursos")]

cursos.map((el) => {
    el.addEventListener("click", (evt) => { 
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

botao.addEventListener('click',()=>{
    const CursosSelecionados=[...document.querySelectorAll('.selecionado')]
    const CursosNaoSelecionados=[...document.querySelectorAll('.cursos:not(.selecionado)')]
    CursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    CursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})