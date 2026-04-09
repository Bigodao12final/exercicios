function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let mensagem = document.getElementById("mensagem");
    let resultado = document.getElementById("resultado");

    mensagem.innerHTML = "";
    resultado.innerHTML = "";

    // Validação
    if (peso === "" || altura === "" || peso <= 0 || altura <= 0) {
        mensagem.innerHTML = "Por favor, preencha os campos corretamente.";
        mensagem.className = "erro";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    // Classificação
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    resultado.innerHTML = `
        Seu IMC é: ${imc.toFixed(2)} <br>
        <span class="destaque">${classificacao}</span>
    `;
    resultado.className = "resultado";
}