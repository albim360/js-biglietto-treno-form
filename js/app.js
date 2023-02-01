const prezzoAlKm = 0.21;

const prezzoFinaleDisplay = document.getElementById("prezzoFinaleDisplay");
const nomeCognomeDisplay = document.getElementById("nomeCognomeDisplay");
const KmTotaliDisplay = document.getElementById("KmTotaliDisplay");
const prezzoScontatoDisplay = document.getElementById("prezzoScontatoDisplay");
const prezzoScontato = document.getElementById("prezzoScontato");
const valoreScontoDisplay = document.getElementById("valoreScontoDisplay");
const valoreSconto = document.getElementById("valoreSconto");
const scontoDisplay = document.getElementById("scontoDisplay");
const sconto = document.getElementById("sconto");

const discountSelect = document.getElementById("discountSelect");

document.querySelector('input[type="submit"]').addEventListener("click", function(e) {
e.preventDefault();

const kmInseriti = document.getElementById("kmInput").value;
let kmTotali = parseFloat(kmInseriti);

if (isNaN(kmTotali)) {
alert("Devi inserire un numero");
kmTotali = 0;
}

const nomeCognomeInseriti = document.getElementById("nomeCognomeInput").value;
let nomeCognome = (nomeCognomeInseriti);

let prezzoFinale = kmTotali * prezzoAlKm;
prezzoFinale = prezzoFinale.toFixed(2);

KmTotaliDisplay.innerHTML = kmTotali + " Km";
nomeCognomeDisplay.innerHTML = nomeCognome;

let discount;
if (discountSelect && discountSelect.value === "minorenne") {
discount = prezzoFinale - (prezzoFinale / 100) * 20;
sconto.innerHTML = "Minorenne";
valoreSconto.innerHTML = "-20%";
} else if (discountSelect && discountSelect.value === "over65") {
discount = prezzoFinale - (prezzoFinale / 100) * 40;
sconto.innerHTML = "Over 65";
valoreSconto.innerHTML = "-40%";
} else if (!discountSelect || discountSelect.value === "") {
discount = prezzoFinale;
sconto.innerHTML = "Nessuno";
valoreSconto.innerHTML = "0%";
}

prezzoFinaleDisplay.innerHTML = "€" + discount;
discount = discount.toFixed(2);
});