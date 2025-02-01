// ========================================================================
// Exercice : Système de Caisse Automatique pour le Rendu de Monnaie
// ========================================================================
const denominations = [100, 50, 20, 10, 5, 2, 1];
const htmlCashierButton = document.getElementById("cashierButton");
const htmlCashierDetail = document.getElementById("cashierDetail");

htmlCashierButton.addEventListener("click", calculCashback);

function calculCashback() {
  const htmlAmountInput = document.getElementById("amount");
  const amount = parseInt(htmlAmountInput.value);

  let remaining = amount;
  let result = [];

  for (let i = 0; i < denominations.length; i++) {
    const value = denominations[i];
    let count = Math.floor(remaining / value);

    if (count > 0) {
      result.push(`${count} x ${value}`);
      remaining -= count * value;
    }
  }

  console.log(result.join(", "));
  htmlCashierDetail.innerText = `Rendu : ${result.join(", ")}`;
}
