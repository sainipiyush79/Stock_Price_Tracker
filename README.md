** Real-Time Stock Price Tracker **
The Real-Time Stock Price Tracker is a simple and intuitive web application that allows users to search for stock tickers and track real-time stock prices. The app displays the current stock price, the percentage change from the opening price, and provides visual cues using colors to indicate price movement.

Features
Add Tickers: Users can search for and add stock tickers they want to track.
Real-Time Data: Automatically fetches and updates the latest stock prices at regular intervals.
Visual Indicators: Stock prices are color-coded based on price movements:
Green: Positive price change.
Dark Green: Large positive price change.
Red: Negative price change.
Dark Red: Large negative price change.
Gray: No significant change.
Price Flashes: Brief color flashes to indicate whether the price has gone up (green), down (red), or stayed the same (gray).
Responsive Grid: Displays multiple stock tickers in a neat, responsive grid layout.
How It Works
Users can enter a stock ticker (e.g., AAPL for Apple, TSLA for Tesla) into the input field and press "Add."
The app fetches the current stock price and percentage change from the stock's open price.
Each stock is displayed in a card format with its current price, percentage change, and a "Remove" button to delete it from the tracker.
Stocks are updated every 15 seconds automatically.
If the stock price changes, a flash animation (green for an increase, red for a decrease) is triggered.
Technologies Used
Frontend:
HTML5, CSS3, JavaScript (ES6+)
jQuery for DOM manipulation and AJAX requests
Backend:
RESTful API to fetch real-time stock data
LocalStorage:
Ticker symbols are stored in localStorage, allowing users to persist their selections across sessions.


Usage
Enter a stock ticker symbol into the input field (e.g., AAPL for Apple, TSLA for Tesla).
Click the "Add" button to add the stock to your tracker.
View the current stock price and percentage change from the opening price.
The app updates every 15 seconds, and the price data will flash when there is a change in the stock price.
To remove a stock from the tracker, click the "Remove" button on the card.