var Product = function (props) {
  this.id = props.id;
  this.cost = props.cost;
  this.revenue = props.revenue;
  this.sellPrice = props.sellPrice;
};

var getSum = function(pageSize, productList, selector){

  var arr = [], sum = 0;

  productList.forEach(function(v, i){
    sum += v[selector];

    if( i % pageSize === pageSize - 1 ){
      arr.push(sum);
      sum = 0;
    }

    if( i === productList.length - 1 && sum > 0 ){
      arr.push(sum);
    }
  });

  return arr;
};

exports.getSum = getSum;
exports.Product = Product;