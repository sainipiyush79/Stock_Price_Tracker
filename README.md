# Real-Time Stock Price Tracker

The **Real-Time Stock Price Tracker** is a web application that allows users to search and monitor the current stock prices in real-time. It displays the stock price, percentage change from the opening price, and uses color indicators to show price movement visually.

## Features

- **Add Stock Tickers**: Easily search and add stock tickers to the tracker.
- **Real-Time Price Updates**: Automatically fetches updated stock prices every 15 seconds.
- **Visual Indicators**: Color-coded feedback to indicate stock performance:
  - **Green**: Positive price change.
  - **Dark Green**: Significant positive price change.
  - **Red**: Negative price change.
  - **Dark Red**: Significant negative price change.
  - **Gray**: No change in price.
- **Flashing Effect**: Price flash animations indicate an increase (green), decrease (red), or no change (gray) in stock price.
- **Persistent Tickers**: Your selected tickers are saved in the browser's local storage, so you don’t lose them on refresh.

## How It Works

1. Users input a stock ticker symbol (e.g., AAPL for Apple, TSLA for Tesla) and click "Add."
2. The app fetches real-time stock data, including the current price and percentage change from the opening price.
3. Each stock is displayed in a card format with its current price, percentage change, and a "Remove" button to delete it from the tracker.
4. Stocks are updated every 15 seconds automatically.
5. If the stock price changes, a flash animation (green for an increase, red for a decrease) is triggered.

## Technologies Used

- **Frontend**:
  - HTML5, CSS3, JavaScript (ES6+)
  - jQuery for DOM manipulation and AJAX requests
- **Backend**:
  - RESTful API to fetch real-time stock data
- **LocalStorage**:
  - Ticker symbols are stored in localStorage, allowing users to persist their selections across sessions.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/realtime-stock-price-tracker.git
