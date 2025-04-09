// script.js
function calculateFinalAmount() {
    const capital = parseFloat(document.getElementById('capitalPerTrade').value);
    const profitPercentage = parseFloat(document.getElementById('profitPercentage').value);
    const numberOfTrades = parseInt(document.getElementById('numberOfTrades').value);

    if (isNaN(capital) || isNaN(profitPercentage) || isNaN(numberOfTrades)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    let finalAmount = capital * Math.pow(1 + (profitPercentage / 100), numberOfTrades);
    document.getElementById('result').innerText = `Final Amount: ${finalAmount.toFixed(2)}`;
}

function showMeaning() {
    const term = document.getElementById('meanings').value;
    const meaningDisplay = document.getElementById('meaningDisplay');

    switch (term) {
        case 'capital':
            meaningDisplay.innerText = "Adventure Capital: The initial amount you invest in each trade.";
            break;
        case 'profit':
            meaningDisplay.innerText = "Quest Profit: The percentage gain you expect from each trade.";
            break;
        case 'trades':
            meaningDisplay.innerText = "Number of Challenges: The total number of trades you plan to make.";
            break;
        default:
            meaningDisplay.innerText = "";
    }
}