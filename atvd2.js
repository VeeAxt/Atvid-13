document.querySelector("#atvd2").addEventListener("click", atividade2)

function atividade2() {
    html.innerHTML = ""

    const form = document.createElement("form")
    form.onsubmit = event => handleSubmit(event, salario => salario * 8 / 100, params => {
        const {nome, salario} = params
        html.innerHTML += `<p>${nome} recebeu ${salario.toFixed(2)}</p>`
    })

    criarInput(form, "nome", "text")
    criarInput(form, "salario", "number")
    
    form.innerHTML += '<button type="submit">Calcular</button>'
    html.appendChild(form)

}

function handleSubmit(event, calcularTaxaDeDesconto, handleShow) {
    event.preventDefault()

    const nome = document.querySelector("#nome").value
    const salario = Number(document.querySelector("#salario").value)
    const taxaDeDescontoDoINSS = calcularTaxaDeDesconto(salario)
    
    const salarioLiquido = salario - taxaDeDescontoDoINSS
    
    console.clear()
    console.log(`O funcionário: ${nome}`)
    console.log(`Recebe o salário de ${salario}`)
    console.log(`Recebe a taxa de desconto do INSS de ${taxaDeDescontoDoINSS}`)
    console.log(`Recebe o salário líquido de ${salarioLiquido}`)

    handleShow({ nome, salario, taxaDeDescontoDoINSS, salarioLiquido })
}

function criarInput(form, nome, type) {
    form.innerHTML += `
        <label>${nome}: <input type=${type} id="${nome}"/></label>
        <br />
    `
}