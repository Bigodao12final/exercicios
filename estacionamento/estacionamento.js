function Analisar(){
let horas = parseFloat(document.getElementById("estacionarH").value);
let cliente = (document.getElementById("ClienteF").value);
let veiculo = (document.getElementById("VG").value);

 let valor = 0;

  if (horas < 24) {
        if (horas <= 1) {
            valor = 5;
        } else {
            valor = 5 + (horas - 1) * 2.5;
        }
    } else {
        let dias = Math.floor(horas / 24);
        let horasRestantes = horas % 24;

        valor = dias * 60;

        if (horasRestantes > 0) {
            if (horasRestantes <= 1) {
                valor += 5;
            } else {
                valor += 5 + (horasRestantes - 1) * 2.5;
            }
        }
    }

   if (veiculo === "sim") {
        valor *= 1.25;
    } 
    
    if (cliente === "sim") {
        valor *= 0.95;
    }

    document.getElementById("Resposta").innerHTML =
        "O valor total é R$ " + valor.toFixed(2);
}