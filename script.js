// Data inicial fixa
const dataInicial = new Date("2025-08-27T06:00:00").getTime();

const intervalo = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = agora - dataInicial; // diferença do agora para a data inicial

    // Cálculo dos tempos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    const milissegundos = distancia % 1000;

    // Atualização do HTML
    document.getElementById("dias").innerText = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").innerText = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").innerText = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").innerText = segundos < 10 ? "0" + segundos : segundos;
    document.getElementById("milissegundos").innerText = String(milissegundos).padStart(3, '0');
}, 1); // Atualiza a cada milissegundo
