
/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount){
    const discounted =[];
    const finalPrice = 0;
    for(let i=0; i<prices.length; i++){
        const discountedPrice = prices[i]*(1-discount);
        finalPrice = Math.round(discountedPrice*100)/100;
        discounted.push(finalPrice);
    }
  //  console.log(length);
    return discounted;
}
discountPrices([100,200,300],0.5);