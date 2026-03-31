let pontosA = 0;
let pontosB = 0;
let setsA = 0;
let setsB = 0;
let saque = "Nenhum";

/* 🔥 CRONÔMETRO */
let segundos = 0;
let intervalo = null;

function atualizarTela() {
  document.getElementById("pontosA").innerText = pontosA;
  document.getElementById("pontosB").innerText = pontosB;
  document.getElementById("setsA").innerText = setsA;
  document.getElementById("setsB").innerText = setsB;
  document.getElementById("saque").innerText = saque;
}

function addPonto(time) {
  if (time === 'A') {
    pontosA++;
  } else {
    pontosB++;
  }
  verificarSet();
  atualizarTela();
}

function removerPonto(time) {
  if (time === 'A' && pontosA > 0) {
    pontosA--;
  } else if (time === 'B' && pontosB > 0) {
    pontosB--;
  }
  atualizarTela();
}

function setSaque(time) {
  saque = time === 'A' ? "Time A" : "Time B";
  atualizarTela();
}

function verificarSet() {
  if (pontosA >= 25 && pontosA - pontosB >= 2) {
    setsA++;
    alert("Time A venceu o set!");
    resetSet();
  }

  if (pontosB >= 25 && pontosB - pontosA >= 2) {
    setsB++;
    alert("Time B venceu o set!");
    resetSet();
  }

  if (setsA === 3) {
    alert("Time A venceu o jogo!");
    resetJogo();
  }

  if (setsB === 3) {
    alert("Time B venceu o jogo!");
    resetJogo();
  }
}

function resetSet() {
  pontosA = 0;
  pontosB = 0;
  atualizarTela();
}

function resetJogo() {
  pontosA = 0;
  pontosB = 0;
  setsA = 0;
  setsB = 0;
  saque = "Nenhum";
  atualizarTela();
}

/* 🔥 FUNÇÕES DO TEMPO */
function atualizarTempo() {
  let min = Math.floor(segundos / 60);
  let seg = segundos % 60;

  min = min < 10 ? "0" + min : min;
  seg = seg < 10 ? "0" + seg : seg;

  document.getElementById("tempo").innerText = `${min}:${seg}`;
}

function iniciarTempo() {
  if (intervalo) return;

  intervalo = setInterval(() => {
    segundos++;
    atualizarTempo();
  }, 1000);
}

function pausarTempo() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetarTempo() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  atualizarTempo();
}

atualizarTela();
atualizarTempo();