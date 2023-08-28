const saida = document.querySelector(".saida");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 80);
  } else {
    // Reiniciar a animação após completar
    setTimeout(() => {
      saida.textContent = ""; // Limpa o conteúdo da saída
      digitacao(texto, 0); // Reinicia a animação
    }, 2000); // Intervalo após completar a animação
  }
}

digitacao("Além disso, gostaria de ressaltar que possuo vários outros projetos disponíveis no GitHub. Fique à vontade para conferir e explorar! 🙃", 0);
