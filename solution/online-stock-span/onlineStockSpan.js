
var StockSpanner = function() {
    this.stockSpanner = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    while(this.stockSpanner.length &&  this.stockSpanner[this.stockSpanner.length - 1][0] <= price){
        span += this.stockSpanner.pop()[1];
    };
    this.stockSpanner.push([price,span]);
    return span;
};