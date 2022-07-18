const sheds=["A","B","C","D"]
const prices=[510,308,486,572,]
let total=0;
for(let index=0;index<prices.length;index++){
    console.log("your production in shed"+sheds[index]+"is"+prices[index]+"litres per day")
    total=total+prices[index]
}
console.log("the total production is"+total+"litres per day")
/*
var x="buying";
var y="rates";
var result=x+y;
console.log(x+y)
*/

function totalProduction(A, B,C, D) {
    Array.from(dailyTable)
      .slice(0, tableDaily.length - 1)
      .forEach((element, index) => {
        element.textContent = arguments[index];
        daySum += Number(arguments[index]);
      });
    tableDaily[tableDaly.length - 1].textContent = daySum;
    weeklyProduction(A, B, C, D, daysTotal);
  }
  function weeklyProduction(A, B, C, D, totalDay) {
    weeklyTable.forEach((element, index) => {
      element.textContent = Number(arguments[index]) * Week_days;
    });
    incomeOverTime(sellingPrice, totalDay);
    getYearlyStats(daysTotal, sellingPrice);
  }
  const incomeOverTime = (sellingPrice, opDay, time = 1) => {
    weeklyIncome.textContent = sellingPrice * opDay * Week_days;
    yearlyIncome.textContent = sellingPrice * opDay * Week_days;
    yearTotals.textContent = opDay * Week_days;
    totalIncome.textContent = sellingPrice * opDay * Year_days;
  };

/*
function buying_rates(){
    var x=prompt("Input values:");
    var y="Brookside buying at ksh45/litre"
    console.log(x+y);
    const period=["Jan","Feb","March","April","May","June","July","August","September","October","November","December"]
   
}
*/

