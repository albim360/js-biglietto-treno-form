const nomeCognomeInput = document.getElementById("nomeCognomeInput");
const kmInput = document.getElementById("kmInput");
const discountSelect = document.getElementById("discountSelect");
const generaBtn = document.getElementById("generaBtn");
const annullaBtn = document.getElementById("annullaBtn");
const nomeCognomeDisplay = document.getElementById("nomeCognomeDisplay");
const KmTotaliDisplay = document.getElementById("KmTotaliDisplay");
const prezzoInteroDisplay = document.getElementById("prezzoInteroDisplay");
const prezzoFinaleDisplay = document.getElementById("prezzoFinaleDisplay");
const valoreSconto = document.getElementById("valoreSconto");
const scontoDisplay = document.getElementById("scontoDisplay");

generaBtn.addEventListener("click", function () {
const nomeCognome = nomeCognomeInput.value;
const km = kmInput.value;
const sconto = discountSelect.value;

nomeCognomeDisplay.innerHTML = nomeCognome;
KmTotaliDisplay.innerHTML = km;
prezzoInteroDisplay.innerHTML = "€" + (km * 0.21).toFixed(2);

if (sconto === "minorenne") {
prezzoFinaleDisplay.innerHTML = "€" + (km * 0.21 * 0.8).toFixed(2);
valoreSconto.innerHTML = "20%";
scontoDisplay.innerHTML = "Minorenne";
} else if (sconto === "over65") {
prezzoFinaleDisplay.innerHTML = "€" + (km * 0.21 * 0.7).toFixed(2);
valoreSconto.innerHTML = "30%";
scontoDisplay.innerHTML = "Over 65";
} else {
prezzoFinaleDisplay.innerHTML = "€" + (km * 0.21).toFixed(2);
valoreSconto.innerHTML = "0%";
scontoDisplay.innerHTML = "Nessuno";
}
});

annullaBtn.addEventListener("click", function () {
nomeCognomeInput.value = "";
kmInput.value = "";
discountSelect.value = "";
nomeCognomeDisplay.innerHTML = "";
KmTotaliDisplay.innerHTML = "";
prezzoInteroDisplay.innerHTML = "€0.00";
prezzoFinaleDisplay.innerHTML = "€0.00";
valoreSconto.innerHTML = "0%";
scontoDisplay.innerHTML = "Nessuno";
});