function adicionar() {
  var item = document.createElement("li");
  item.innerText = "Novo item";
  document.getElementById("lista").appendChild(item);
}