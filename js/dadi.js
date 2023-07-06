document
  .getElementById("generateNumbers")
  .addEventListener("click", function () {
    let casualNumberPc = Math.floor(Math.random() * 6) + 1;
    let casualNumberUtente = Math.floor(Math.random() * 6) + 1;

    document.getElementById("casualNumPc").textContent = casualNumberPc;
    document.getElementById("casualNumUtente").textContent = casualNumberUtente;

    if (casualNumberPc > casualNumberUtente) {
      console.log("PC WINS");
    } else if (casualNumberUtente > casualNumberPc) {
      console.log("UTENTE WINS");
    } else {
      console.log("TIE");
    }
  });
