var imagem1 = "https://via.placeholder.com/200x120?text=Imagem+1";
var imagem2 = "https://via.placeholder.com/200x120?text=Imagem+2";
var atual = 1;

function trocar() {
  var imagem = document.getElementById("imagem");

  if (atual == 1) {
    imagem.src = imagem2;
    atual = 2;
  } else {
    imagem.src = imagem1;
    atual = 1;
  }
}