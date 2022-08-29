const initialPrice = document.querySelector("#initial-price");
const noOfStocks = document.querySelector("#qty-of-stocks");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputMsg = document.querySelector("#msg");

const showMessage = (msg) => {
  outputMsg.innerText = msg;
};

const calculateProfitAndLoss = (initial, qty, current) => {
  if (initial > current) {
    //loss
    let loss = (initial - current) * qty;
    let losspercent = (loss * 100) / (initial * qty);
    outputMsg.style.backgroundColor = "red";
    showMessage(
      `Hey The Loss is ${loss} and The Percent Loss is ${losspercent.toFixed(
        2
      )}`
    );
  } else if (current > initial) {
    //profit
    let profit = (current - initial) * qty;
    let profitPercent = (profit * 100) / (initial * qty);
    outputMsg.style.backgroundColor = "green";

    showMessage(
      `Hey The Profit is ${profit} and The Percent Profit is ${profitPercent.toFixed(
        2
      )}`
    );
  } else {
    //no loss no profit
    outputMsg.style.backgroundColor = "#FEB139";
    showMessage(`No Pain No Gain and No Gain No Pain`);
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const initial = Number(initialPrice.value);
  const qty = Number(noOfStocks.value);
  const current = Number(currentPrice.value);
  if (
    initialPrice.value == "" ||
    noOfStocks.value == "" ||
    currentPrice.value == ""
  ) {
    alert("Fill All inputs");
  } else {
    calculateProfitAndLoss(initial, qty, current);
  }
});
