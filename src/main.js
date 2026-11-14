const el = document.querySelector("#status");

async function carregarStatus() {
  try {
    const res = await fetch("/api/health");
    const dados = await res.json();
    const dataHora = new Date(dados.timestamp).toLocaleString("pt-BR");
    el.textContent = `Status da API: ${dados.status} (${dataHora})`;
  } catch (erro) {
    el.textContent = "Status da API: indisponível";
  }
}

carregarStatus();
