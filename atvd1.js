document.querySelector("#atvd1").addEventListener("click", atividade1)

function atividade1() {
    html.innerHTML = ""

    const A = 42
    const B = 72

    html.innerText += A - B
    html.innerText += 2 * A + 3 * B
    html.innerText += A * B

    console.log(`${[A, B].sort((a, b) => a - b)}`)
}