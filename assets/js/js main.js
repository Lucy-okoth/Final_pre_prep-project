/*Calculation for daily produce/litre*/
const sheds=["A","B","C","D"]
const prices=[510, 308, 486, 572]
let total=0;
for(let index=0;index<prices.length;index++){
    console.log(" your produce in shed"+sheds[index]+"is"+prices[index]+"litres per day")
    total=total+prices[index]
}

console.log("the total production is"+total+"litres per day")