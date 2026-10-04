function adicionar() {
  var texto = document.getElementById("tarefa").value;

  if (texto != "") {
    var item = document.createElement("li");
    item.innerText = texto;
    document.getElementById("lista").appendChild(item);
    document.getElementById("tarefa").value = "";
  }
}