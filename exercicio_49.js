var escuro = false;

function tema() {
  if (escuro == false) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    escuro = true;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    escuro = false;
  }
}