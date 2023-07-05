// VARIABLES

const mailUtente = document.getElementById("mailutente");
const btnGenera = document.querySelector(".btn-genera");

// EVENT LISTENER - CLICK

btnGenera.addEventListener("click", function () {
  document.getElementById("my-container").classList.toggle("d-none");

  console.log("sono cliccato");

  const listaMail = [
    "aaa@mail.io",
    "bbb@mail.io",
    "ccc@mail.io",
    "ddd@mail.io",
    "eee@mail.io",
    "fff@mail.io",
  ];

  console.log(listaMail);

  const enteredMail = mailUtente.value;

  let mailTrovata = false;

  for (let i = 0; i < listaMail.length; i++) {
    const selectMail = listaMail[i];

    if (selectMail === enteredMail) {
      console.log("Mail valida");
      mailTrovata = true;
      document.getElementById(
        "nomeutente"
      ).innerHTML = `Benvenuto ${enteredMail}`;
    }
  }

  if (mailTrovata === false) {
    console.log("Mail non valida");
    document.getElementById("nomeutente").innerHTML = "Mail non valida";
  }
});
