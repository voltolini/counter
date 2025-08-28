async function carregarContador() {
  try {
    const res = await fetch("/.netlify/functions/contador");
    const data = await res.json();

    const mensagem = `Estamos há ${data.dias} dias sem paradas no Benner. Podemos ir tomar café tranquilinhos!`;

    document.getElementById("mensagem").innerText = mensagem;
  } catch (error) {
    document.getElementById("mensagem").innerText = "Erro ao carregar contador 😢";
  }
}

carregarContador();
