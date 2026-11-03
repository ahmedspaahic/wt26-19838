function procijeni() {
  const vrijednost = Number(prompt("Koja je temperatura"));

  if (isNaN(vrijednost)) return "Nije unesen broj";
  if (vrijednost > 30) return "Vruće je";
  if (vrijednost > 15) return "Okej je";
  return "Hladno je";
}

alert(procijeni());