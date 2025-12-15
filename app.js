let jogadoras = ["Jogadora 1", "Jogadora 2"];
let indiceJogadora = 0;

let cartas = null;

// carregar cartas
fetch("cartas.json")
  .then(res => res.json())
  .then(data => cartas = data);

const btnJogar = document.getElementById("btnJogar");
const btnProxima = document.getElementById("btnProxima");

btnJogar.onclick = jogar;
btnProxima.onclick = proximaJogadora;

function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function jogar() {
  if (!cartas) return;

  const dado = rolarDado();

  let tipo = dado <= 2 ? "verdade" : "desafio";
  let nivel = dado <= 2 ? "media" : dado <= 4 ? "leve" : "intenso";

  const lista = cartas[tipo][nivel];
  const carta = lista[Math.floor(Math.random() * lista.length)];

  document.getElementById("jogadoraAtual").innerText =
    `🎯 Turno de ${jogadoras[indiceJogadora]}`;

  document.getElementById("resultado").innerText =
    `🎲 ${tipo.toUpperCase()} • ${nivel.toUpperCase()}`;

  document.getElementById("carta").innerText = carta;
}

function proximaJogadora() {
  indiceJogadora = (indiceJogadora + 1) % jogadoras.length;
  document.getElementById("jogadoraAtual").innerText =
    `🎯 Turno de ${jogadoras[indiceJogadora]}`;
}
