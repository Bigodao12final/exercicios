function calcularmedia(){
    var ra = parseFloat(document.getElementById("rainput").value);
    var nome = document.getElementById("nomeinput").value;
    var nota1 = parseFloat(document.getElementById("N1input").value);
    var nota2 = parseFloat(document.getElementById("N2input").value);
    var nota3 = parseFloat(document.getElementById("N3input").value);
    var nota4 = parseFloat(document.getElementById("N4input").value);
    var nota5 = parseFloat(document.getElementById("NEinput").value);

    var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    var conceito = "";
    var status = "";

    
    Ma=(nota1 + nota2 + nota3 + nota4 + nota5) / 5;
   if (Ma >= 9){
     conceito = "A";
   } else if (Ma >= 7.5 && Ma < 9){
     conceito = "B";
   } else if (Ma >= 6 && Ma < 7.5){
     conceito = "C";
   }else if (Ma >= 4 && Ma < 6){
    conceito = "D";
   } else if (Ma >= 0 && Ma < 4){
    conceito = "E";
   }
     if (conceito == "A" || conceito == "B" || conceito == "C") {
        status = "APROVADO";
    } else {
        status = "REPROVADO";
    }
     document.getElementById("resultado").innerHTML =
        "<strong>RA:</strong> " + ra + "<br>" +
        "<strong>Nome:</strong> " + nome + "<br>" +
        "<strong>Notas:</strong> " + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4 + "<br>" +
        "<strong>ME:</strong> " + nota5 + "<br>" +
        "<strong>Média de Aproveitamento:</strong> " + Ma.toFixed(2) + "<br>" +
        "<strong>Conceito:</strong> " + conceito + "<br>" +
        "<strong>Status:</strong> " + status;
}