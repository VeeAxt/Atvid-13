document.querySelector("#atvd3").addEventListener("click", atividade3)

function atividade3() {
    html.innerHTML = ""

    const form = document.createElement("form")
    form.onsubmit = event => handleSubmit(
        event,
        salario => salario <= 1000 ? salario * 8/100 : (salario <= 1500 ? salario * 8.5/100 : salario * 9/100),
        params => {
            const {nome, salario, taxaDeDescontoDoINSS, salarioLiquido} = params
            html.innerHTML += `<p>O salário de ${nome} foi de ${salarioLiquido}</p>`
            html.innerHTML += `<p>A taxa de INSS foi de ${taxaDeDescontoDoINSS / salario * 100}%</p>`
            html.innerHTML += `<p>O valor do INSS foi de ${taxaDeDescontoDoINSS}</p>`
        }
    )

    criarInput(form, "nome", "text")
    criarInput(form, "salario", "number")
    
    form.innerHTML += '<button type="submit">Calcular</button>'
    html.appendChild(form)

}