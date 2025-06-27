const container = document.createElement("div")
container.setAttribute("class","container")
const novoElemento = document.createElement("div")
novoElemento.setAttribute("class","div1")
const itens = ["JavaScript","HTML","CSS","Python","MySQL"]
const itensJuntos = itens.map((el,ind)=>{
    const divs = document.createElement("div")
    divs.setAttribute("class","divs")
    divs.setAttribute("ïd","d"+ind)
    divs.textContent = el
    novoElemento.appendChild(divs)
})

container.appendChild(novoElemento)
document.body.appendChild(container)

const destacar = document.querySelectorAll(".divs").forEach((el)=>{
    el.addEventListener("click",()=>{
        el.classList.toggle("destaque")
    })
})
