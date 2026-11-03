function pauza() {
  const duzinaUcenja = Number(prompt("Unesi koliko dugo zelis da ucis (u minutama)"));
  const doPauze = Number(prompt("Unesi nakon koliko minuta ide pauza"));

  if (
    !Number.isInteger(duzinaUcenja) || !Number.isInteger(doPauze) ||
    duzinaUcenja <= 0 || doPauze <= 0
  ) {
    console.log("Unesi ispravne cijele brojeve veće od 0");
    return;
  }

  for (let minuta = 1; minuta <= duzinaUcenja; minuta++) {
    if (minuta === duzinaUcenja) {
      console.log("Minuta " + minuta + ": Dosta je ucenja vala");
    } else if (minuta % doPauze === 0) {
      console.log("Minuta " + minuta + ": Odmori 15 min");
    } else {
      console.log("Minuta " + minuta + ": ucis");
    }
  }
}

pauza();