let tickers = JSON.parse(localStorage.getItem("tickers")) || [];
let lastPrices = {};
let counter = 12;

function startUpdateCycle() {
  updatePrices();
  setInterval(function () {
    counter--;
    $("#counter").text(counter);
    if (counter <= 0) {
      updatePrices();
      counter = 15;
    }
  }, 1000);
}

$(document).ready(function () {
  tickers.forEach(function (ticker) {
    addTickerToGrid(ticker);
  });
  updatePrices();

  $("#add-ticker-form").submit(function(e) {
    e.preventDefault();
    let newTicker = $("#new-ticker").val().toUpperCase();
    if (!tickers.includes(newTicker)) {
      tickers.push(newTicker);
      localStorage.setItem("tickers", JSON.stringify(tickers));
      addTickerToGrid(newTicker);
    }

    $("#new-ticker").val(""); // Corrected: Added '#'
    updatePrices();
  });

  $('#tickers-grid').on('click', '.remove-btn', function () {
    let tickerToRemove = $(this).data('ticker');
    tickers = tickers.filter((t) => t !== tickerToRemove);
    localStorage.setItem('tickers', JSON.stringify(tickers));
    $(`#${tickerToRemove}`).remove(); // This should work if IDs are correct
  });

  startUpdateCycle();
});

const addTickerToGrid = (ticker) => {
  $("#tickers-grid").append(
    `<div id="${ticker}" class="stock-box"> <h2>${ticker}</h2> <p id="${ticker}--price"></p> <p id="${ticker}--pct"></p><button class="remove-btn" data-ticker="${ticker}">Remove</button></div>`
  );
};

const updatePrices = () => {
  tickers.forEach((ticker) => {
    $.ajax({
      url: "/get_stock_data",
      type: "POST",
      data: JSON.stringify({ ticker: ticker }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data) {
        let changePercent =
          ((data.currentPrice - data.openPrice) / data.openPrice) * 100;
        let colorClass;
        if (changePercent <= -2) {
          colorClass = "dark-red";
        } else if (changePercent < 0) {
          colorClass = "red";
        } else if (changePercent == 0) {
          colorClass = "gray";
        } else if (changePercent <= 2) {
          colorClass = "green";
        } else {
          colorClass = "dark-green";
        }

        console.log(ticker);

        $(`#${ticker}--price`).text(`$${data.currentPrice.toFixed(2)}`);
        $(`#${ticker}--pct`).text(`${changePercent.toFixed(2)}%`);
        $(`#${ticker}--price`)
          .removeClass("dark-red red gray green dark-green")
          .addClass(colorClass);
        $(`#${ticker}--pct`)
          .removeClass("dark-red red gray green dark-green")
          .addClass(colorClass);

        let flashClass;
        if (typeof lastPrices[ticker] === 'undefined') {
          lastPrices[ticker] = data.currentPrice; // Initialize first time
        }

        if (lastPrices[ticker] > data.currentPrice) {
          flashClass = "red-flash";
        } else if (lastPrices[ticker] < data.currentPrice) {
          flashClass = "green-flash";
        } else {
          flashClass = "gray-flash";
        }

        // Use toggleClass with forced reflow for reliable flashing
        $(`#${ticker}`).removeClass(flashClass); // Remove class first
        void $(`#${ticker}`)[0].offsetWidth; // Force reflow
        $(`#${ticker}`).addClass(flashClass); // Add class to trigger animation

        setTimeout(function () {
          $(`#${ticker}`).removeClass(flashClass); // Remove again after timeout
        }, 1000);

        lastPrices[ticker] = data.currentPrice; // Update lastPrice after the comparison
      },
    });
  });
};

