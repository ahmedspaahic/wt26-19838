const forma = document.getElementById("forma");
const poljeNaziv = document.getElementById("naziv");
const poljeIznos = document.getElementById("iznos");
const greska = document.getElementById("greska");
const tabela = document.getElementById("tabela");
const zbirRed = document.getElementById("zbir");
const zbirNaziv = document.getElementById("zbirNaziv");
const zbirIznos = document.getElementById("zbirIznos");

function prikaziGresku(poruka) {
  greska.textContent = poruka;
  greska.hidden = false;
}

function sakrijGresku() {
  greska.textContent = "";
  greska.hidden = true;
}


function osvjeziZbir() {
  let zbir = 0;
  let brojStavki = 0;

  // Prvi red je zaglavlje, a posljednji je red sa zbirom
  for (let i = 1; i < tabela.rows.length - 1; i++) {
    zbir += Number(tabela.rows[i].cells[1].dataset.iznos);
    brojStavki++;
  }

  zbirNaziv.textContent = "Ukupno (" + brojStavki + " stavki)";
  zbirIznos.textContent = zbir.toFixed(2);
}

forma.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const naziv = poljeNaziv.value.trim();
  const iznosTekst = poljeIznos.value.trim();

  if (naziv === "") {
    prikaziGresku("Naziv ne smije biti prazan.");
    return;
  }

  // Number("") je 0, zato se prazan unos provjerava posebno
  const iznos = Number(iznosTekst);
  if (iznosTekst === "" || isNaN(iznos) || !isFinite(iznos)) {
    prikaziGresku("Iznos mora biti broj (decimalni separator je tačka).");
    return;
  }
  if (iznos < 0) {
    prikaziGresku("Iznos ne smije biti negativan.");
    return;
  }

  sakrijGresku();

  // Novi red ide neposredno prije reda sa zbirom
  const red = tabela.insertRow(zbirRed.rowIndex);
  const celijaNaziv = red.insertCell(0);
  const celijaIznos = red.insertCell(1);

  celijaNaziv.textContent = naziv; // isključivo kao tekst
  celijaIznos.textContent = iznos.toFixed(2);
  celijaIznos.dataset.iznos = iznos;

  osvjeziZbir();
  forma.reset();
  poljeNaziv.focus();
});

osvjeziZbir(); 