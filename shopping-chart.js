let items = [
    {name:'shoes', price: 400},
    {name:'shoes', price: 600},
    {name:'shoes', price: 400},
    {name:'shoes', price: 600},
    {name:'shoes', price: 600}
];
function shoppingChart(products){
    let totalSum = 0;
    for(let i =0; i < products.length; i++){
        const product = products[i];
        totalSum = totalSum + product.price;
    }
    return totalSum;
}
const totalCost = shoppingChart(items);
console.log(totalCost); 