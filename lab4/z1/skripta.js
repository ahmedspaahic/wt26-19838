const stavke = document.querySelectorAll("#lista li");
const sazetak = document.getElementById("sazetak");
const dugmeReset = document.getElementById("reset");

// Postavlja izgled jedne stavke prema stanju
function postaviStanje(stavka, zavrsena) {
  const dugme = stavka.querySelector("button");
  const tekst = stavka.querySelector(".tekst");
  const osnovniTekst = tekst.dataset.original;

  if (zavrsena) {
    stavka.classList.add("zavrseno");
    tekst.textContent = osnovniTekst + " (završeno)";
    dugme.textContent = "Vrati";
  } else {
    stavka.classList.remove("zavrseno");
    tekst.textContent = osnovniTekst;
    dugme.textContent = "Završi";
  }
}

// Sažetak se uvijek računa iz stvarnog stanja u DOM-u
function osvjeziSazetak() {
  const ukupno = stavke.length;
  const zavrseno = document.querySelectorAll("#lista li.zavrseno").length;
  sazetak.textContent = "Završeno: " + zavrseno + " od " + ukupno;
}

stavke.forEach(function (stavka) {
  const tekst = stavka.querySelector(".tekst");
  tekst.dataset.original = tekst.textContent;

  // Klik bilo gdje na stavci (uključujući dugme, jer se događaj propagira) mijenja stanje
  stavka.addEventListener("click", function () {
    postaviStanje(stavka, !stavka.classList.contains("zavrseno"));
    osvjeziSazetak();
  });
});

dugmeReset.addEventListener("click", function () {
  stavke.forEach(function (stavka) {
    postaviStanje(stavka, false);
  });
  osvjeziSazetak();
});

osvjeziSazetak();