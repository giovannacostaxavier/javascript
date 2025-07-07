/*const caixa = document.querySelector("#caixaCursos")
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const criarTudo = ["HTML", "CSS", "PHP", "React", "MySQL", "Java"]

criarTudo.forEach((el, chave) => {
    const criarElemento = document.createElement("div")
    criarElemento.setAttribute("id", "c" + chave)
    criarElemento.setAttribute("class", "curso")
    criarElemento.textContent = el

    criarElemento.addEventListener("click", () => {
        // Se já está selecionado, desmarca
        if (criarElemento.classList.contains("selecionado")) {
            criarElemento.classList.remove("selecionado")
        } else {
            // Desmarca qualquer outra que esteja marcada
            const anterior = document.querySelector(".curso.selecionado")
            if (anterior) anterior.classList.remove("selecionado")

            // Marca a nova
            criarElemento.classList.add("selecionado")
        }
    })

    caixa.appendChild(criarElemento)
})

const selecionado = () => document.querySelector(".curso.selecionado")

btnCursoSelecionado.addEventListener("click", () => {
    const curso = selecionado()
    if (!curso) {
        alert("Nenhum curso foi selecionado!")
        return
    }
    alert(`Curso selecionado: ${curso.textContent}`)
})

btnRemoverCurso.addEventListener("click", () => {
    const curso = selecionado()
    if (!curso) {
        alert("Nenhum curso foi selecionado!")
        return
    }
    curso.remove()
})*/





