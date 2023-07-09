const apresentacao__links__subtitulo = document.querySelector(".apresentacao__links__subtitulo");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      apresentacao__links__subtitulo.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 200);
  } else {
    setTimeout(() => {
      apresentacao__links__subtitulo.textContent = ""; // Limpa o conteúdo
      digitacao(texto, 0); // Reinicia a animação
    }, 2500); // Tempo de pausa após digitar todo o texto
  }
}

digitacao("Acesse minhas redes :)", 0);
