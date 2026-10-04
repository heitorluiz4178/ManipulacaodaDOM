function mudarFundo() {
  var cores = ["red", "blue", "green", "yellow", "orange", "purple"];
  var numero = Math.floor(Math.random() * cores.length);
  document.body.style.backgroundColor = cores[numero];
}