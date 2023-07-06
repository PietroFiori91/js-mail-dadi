let casualNumberPc = Math.floor(Math.random() * 6) + 1;
let casualNumberUtente = Math.floor(Math.random() * 6) + 1;
let casualNumberUtente = casualNumberPc;

let pc = document.getElementById("casualNumPc");
let utente = document.getElementById("casualNumUtente");

if (pc > utente) {
    console.log("PC WINS")
} else (utente > pc) {
    console.log("UTENTE WINS")
}
