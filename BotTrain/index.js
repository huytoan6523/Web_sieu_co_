const ccxt = require("ccxt");

const exchange = new ccxt.binance({
    apiKey: "WdaunAaVgs4YvW3uTdx1idBsqRRjPQ3stLcw2ZzK8zH0wVn8lJDestz1JzQ4GkQj",
    secret: "XBRYauXkUZkpFA2hDGZ9FHgbSZrepOTKdDnRYpbwh2KnstCnPYAMAUcydL9GHHNb",
    enableRateLimit: true,
    options: {
        defaultType: 'future',
        adjustForTimeDifference: true,
        createMarketBuyOrderRequiresPrice: false
    }
  });


  exchange.setSandboxMode(true);

  async function printBinance() {
    const balance = await exchange.fetchBalance();
    console.log(balance);
  } 

// async function profitStrategy() {
  

//   const symbol = "BTC/USDT";
//   const orderSize = 0.01; // Đặt lệnh mua với kích thước 0.01 BTC
//   const profitTarget = 1.01; // Đặt mục tiêu lãi 1%

//   // Lấy giá trị hiện tại của cặp tiền
//   const ticker = await exchange.fetchTicker(symbol);
//   const currentPrice = ticker.last;

//   // Tính toán giá đặt mua và mức giá bán cần đạt để đạt được lợi nhuận 1%
//   const buyPrice = currentPrice;
//   const sellPrice = buyPrice * profitTarget;

//   // Đặt lệnh mua
// //   const buyOrder = await exchange.createOrder(
// //     symbol,
// //     "limit",
// //     "buy",
// //     orderSize,
// //     buyPrice
// //   );
//   const buyOrder = await exchange.create_order(symbol, 'market', 'buy', orderSize, buyPrice, {
//     leverage: 10
// });
//   console.log(`Đặt lệnh mua. ID lệnh: ${buyOrder.id}`);

//   // Lặp lại việc kiểm tra giá trị để đạt được lợi nhuận 1%
//   setInterval(async () => {
//     // Lấy giá trị hiện tại của cặp tiền
//     const ticker = await exchange.fetchTicker(symbol);
//     const currentPrice = ticker.last;

//     // Tính toán mức giá bán cần đạt để đạt được lợi nhuận 1%
//     const requiredSellPrice = buyPrice * profitTarget;

//     if (currentPrice >= requiredSellPrice) {
//       // Đặt lệnh bán để đạt mục tiêu lãi 1%
//       const sellOrder = await exchange.createOrder(
//         symbol,
//         "limit",
//         "sell",
//         orderSize,
//         requiredSellPrice
//       );
//       console.log(
//         `Đạt mục tiêu lãi 1%. Đặt lệnh bán. ID lệnh: ${sellOrder.id}`
//       );
//       clearInterval(this);
//     }
//   }, 60000); // Lặp sau mỗi 60s
// }

// profitStrategy();

printBinance();
