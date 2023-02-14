const ccxt = require("ccxt");

(async () => {
  const exchangeId = "binance";
  const exchangeClass = ccxt[exchangeId];
  const exchange = new exchangeClass({
    apiKey: "Ri6SRCrHveUa30WEaCMj6ukGxxKxGqgbxk3NJyNQtQocEIR8KgD0XhRzt8qf76rW",
    secret: "yKjuSdj2JvgktCtmbG0QL7VKi77W69dlP4kTYSm41RqLNoYXOje9FiSIbKRHJC8S",
    enableRateLimit: true,
    options: {
      adjustForTimeDifference: true
    }
  });
  // set sandbox mode
  exchange.setSandboxMode(true);

  // get balance
  const balance = await exchange.fetchBalance();
  console.log(balance);

  // get ticker price
  const symbol = "BTC/USDT";
  const ticker = await exchange.fetchTicker(symbol);
  const price = ticker.last;
  console.log(`Price: ${price}`);

  // place order
  const orderSize = 0.01;
  const buyPrice = price * 0.99; // buy 1% lower than current price
  const sellPrice = price * 1.01; // sell 1% higher than current price

  const buyOrder = await exchange.createOrder(
    symbol,
    "limit",
    "buy",
    orderSize,
    buyPrice
  );

  console.log("Buy order placed:", buyOrder);

  const sellOrder = await exchange.createOrder(
    symbol,
    "limit",
    "sell",
    orderSize,
    sellPrice
  );

  console.log("Sell order placed:", sellOrder);


  
})();