// Prezzo al km fisso
const prezzoAlKm = 0.21;

// Prezzo finale display element
const prezzoFinaleDisplay = document.getElementById("prezzoFinaleDisplay");

// Dropdown menu element
const discountSelect = document.getElementById("discountSelect");

// Calcola il prezzo finale al click del bottone "Genera"
document.querySelector('input[type="submit"]').addEventListener("click", function(e) {
  // Prevenire l'invio di form
  e.preventDefault();

  // Valore dei km inseriti dall'utente
  const kmInseriti = document.querySelector('input[type="number"]').value;

  // Fix per input 0 + prompt per sapere e calcolare km total
  let kmTotali = parseFloat(kmInseriti);
  if (isNaN(kmTotali)) {
    alert("Devi inserire un numero");
    kmTotali = 0;
  }

  // Calcolo il totale in base ai km
  let prezzoFinale = kmTotali * prezzoAlKm;
  prezzoFinale = prezzoFinale.toFixed(2);

  // Calcola lo sconto per minori di età o over 65
  let discount;
  if (discountSelect && discountSelect.value === "minorenne") {
    discount = prezzoFinale - (prezzoFinale / 100) * 20;
  } else if (discountSelect && discountSelect.value === "over65") {
    discount = prezzoFinale - (prezzoFinale / 100) * 40;
  } else if (!discountSelect || discountSelect.value === "nessuno") {
    discount = prezzoFinale;
  } else
    discount = prezzoFinale;

  // Mostra il prezzo finale con eventuale sconto
  prezzoFinaleDisplay.innerHTML = "Prezzo finale: € " + discount;
});
