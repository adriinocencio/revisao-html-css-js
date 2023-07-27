var nome;
var idade;
var resultado;

function verificarFaseVida(event) {

    event.preventDefault();

    nome = document.getElementById("nome").value;
    idade = parseFloat(document.getElementById("idade").value);
    resultado = document.getElementById("resultado");

    if (idade <= 11) {
        resultado.innerHTML = `<p>${nome}, você é uma criança.</p>`;
    } else if (idade >= 12 && idade <= 20) {
        resultado.innerHTML = `<p>${nome}, você é um adolescente.</p>`;
    } else if (idade >= 21 && idade <= 65) {
        resultado.innerHTML = `<p>${nome}, você é um adulto.</p>`;
    } else if (idade > 65) {
        resultado.innerHTML = `<p>${nome}, você é um idoso.</p>`;
    } else {
        resultado.innerHTML = `<p>Algo deu errado ${nome}, tente novamente.</p>`;
    }
}