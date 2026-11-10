const forma = document.getElementById("forma");
const poljeNaslov = document.getElementById("naslov");
const poljeTekst = document.getElementById("tekst");
const greska = document.getElementById("greska");

const prikaz = document.getElementById("prikaz");
const prikazNaslov = document.getElementById("prikazNaslov");
const prikazTekst = document.getElementById("prikazTekst");
const prikazKategorija = document.getElementById("prikazKategorija");

const POCETNI_NASLOV = "Nema pregleda";
const POCETNI_TEKST = "Popunite formu i kliknite na dugme Pregled.";

const NAZIVI = {
  vazno: "Važno",
  informacija: "Informacija"
};

function prikaziGresku(poruka) {
  greska.textContent = poruka;
  greska.hidden = false;
}

function sakrijGresku() {
  greska.textContent = "";
  greska.hidden = true;
}

document.getElementById("pregled").addEventListener("click", function () {
  const naslov = poljeNaslov.value.trim();
  const tekst = poljeTekst.value.trim();
  const odabrana = forma.querySelector('input[name="kategorija"]:checked');

  // Validacija prije bilo kakve izmjene pregleda
  const greske = [];
  if (naslov === "") greske.push("Naslov ne smije biti prazan.");
  if (tekst === "") greske.push("Tekst obavijesti ne smije biti prazan.");
  if (!odabrana) greske.push("Odaberite kategoriju.");

  if (greske.length > 0) {
    prikaziGresku(greske.join(" "));
    return; // pregled ostaje nepromijenjen
  }

  sakrijGresku();

  // textContent osigurava da se unos prikazuje isključivo kao tekst
  prikazNaslov.textContent = naslov;
  prikazTekst.textContent = tekst;
  prikazKategorija.textContent = NAZIVI[odabrana.value];

  // Stil zavisi od kategorije; className zamjenjuje prethodnu klasu
  prikaz.className = "prikaz " + odabrana.value;
});

document.getElementById("ponisti").addEventListener("click", function () {
  forma.reset();
  sakrijGresku();

  prikazNaslov.textContent = POCETNI_NASLOV;
  prikazTekst.textContent = POCETNI_TEKST;
  prikazKategorija.textContent = "";
  prikaz.className = "prikaz";
});