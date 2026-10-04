function corAleatoria() {
  var cores = ["red", "blue", "green", "yellow", "orange", "purple"];
  var numero = Math.floor(Math.random() * cores.length);
  document.getElementById("caixa").style.backgroundColor = cores[numero];
}