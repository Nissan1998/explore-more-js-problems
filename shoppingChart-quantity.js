let items = [
    {name:'shoes', price: 400, quantity: 2},
    {name:'shoes', price: 400,quantity: 2},
    {name:'shoes', price: 600,quantity: 2},
    {name:'shoes', price: 600,quantity: 5},
    {name:'shoes', price: 600,quantity: 1}
];
function shoppingChart(products){
    let totalSum = 0;
    for(let i =0; i < products.length; i++){
        const product = products[i];
        totalSum = totalSum + product.price * product.quantity;
    }
    return totalSum;
}
const totalCost = shoppingChart(items);
console.log(totalCost); 