var imagens = [
  "https://via.placeholder.com/300x160?text=Imagem+1",
  "https://via.placeholder.com/300x160?text=Imagem+2",
  "https://via.placeholder.com/300x160?text=Imagem+3"
];
var posicao = 0;

function proxima() {
  posicao++;

  if (posicao >= imagens.length) {
    posicao = 0;
  }

  document.getElementById("imagem").src = imagens[posicao];
}