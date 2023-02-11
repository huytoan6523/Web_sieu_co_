const ccxt = require("ccxt");
const moment = require("moment/moment");

const binance = new ccxt.binance(
    {
        apiKey: "mOPUG23vebn5vKSTUfFCgKGoicIwqXKWSaAkaAhueqeOGMGBWaiHNEQTgGYMj9ed",
        secret: "dKJfvFwbKxuxdITkY8IMIX50jfSuulQnkbKDXs02qKQfiC5Fj4EIl8gtcSnRYKdm"
    }
);

binance.setSandboxMode(true);

async function printBinance(){
    const banance = await binance.fetchBalance();
    console.log(banance);
}



async function main() {

    

    const price = await binance.fetchOHLCV("BTC/USDT","1m");

    const hPrice = price.map(price =>{
        return{
            time: moment(price[0]).format(),
            open: price[1],
            high: price[2],
            low: price[3],
            close: price[4],
            volume: price[5]
        }
    })



    console.log(hPrice);


}   
//main();
printBinance(); 
