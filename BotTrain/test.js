const ccxt = require("ccxt");


const exchange = new ccxt.binance({
    apiKey: "WdaunAaVgs4YvW3uTdx1idBsqRRjPQ3stLcw2ZzK8zH0wVn8lJDestz1JzQ4GkQj",
    secret: "XBRYauXkUZkpFA2hDGZ9FHgbSZrepOTKdDnRYpbwh2KnstCnPYAMAUcydL9GHHNb",
    enableRateLimit: true,
});

const symbol = "BTC/USDT";

// Lấy giá hiện tại của cặp tiền BTC/USDT
const ticker = await exchange.fetchTicker(symbol);
const currentPrice = ticker.last;

// Tính toán số tiền cần để đặt lệnh mua 1% tài khoản
const balance = await exchange.fetchBalance();
const equity = balance.total.USDT;
const orderSize = equity * 0.01;

// Tính toán giá mua dựa trên giá hiện tại, lấy giá thấp hơn 1% so với giá hiện tại
const buyPrice = currentPrice * 0.99;

// Đặt lệnh mua với đòn bẩy 10 và giá đã tính toán được
const order = await exchange.createOrder('BTC/USDT', 'limit', 'buy', orderSize, buyPrice, {
    leverage: 10,
    type: 'future'
});