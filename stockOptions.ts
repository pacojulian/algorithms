// [4,3,5,3,3]
function stockOptions(stocks: number[]): number {
    let i = 0;
    let j = 0
    let max = 0
    let maxPosition = 0
    let shares = 0
    let profit = 0
    let accumProfit = 0;
    let gains = 0;
    while (j < stocks.length) {
        if (j === stocks.length - 1) {
            accumProfit += profit - (shares * stocks[maxPosition]);
        }
        if (stocks[j] > max) {
            max = stocks[j];
            maxPosition = j;
            j++;
        } else {
            for (let index = i; index < maxPosition; index++) {
                profit += stocks[index] * -1
                shares++;
            }
            gains = shares * stocks[maxPosition];
            profit = profit + gains
            accumProfit +=profit
            //reset
            max = 0;
            maxPosition = 0
            shares = 0
            profit = 0;
            gains = 0;
            i = j;
            j++;
        }
    }

    return accumProfit;
}
console.log(stockOptions([3, 4, 5, 3, 5, 2]));

