const phones =[
    {
        name: 'samsung', camera : 20, storage: 32, price : 30000 ,
    },

    {
        name: 'Oppo', camera : 20, storage: 32, price : 20000 ,
    },

    {
        name: 'redmi', camera : 20, storage: 32, price : 18000 ,
    },

    {
        name: 'Walton', camera : 20, storage: 32, price : 25000 ,
    },

    {
        name: 'nokia', camera : 20, storage: 32, price : 10000 ,
    }
];

function cheapestPhone( phones){
    let cheapPhone = phones[0];
    for( let i =0; i< phones.length; i++){
        const phone = phones[i];
        if( phone.price < cheapPhone.price){
            cheapPhone = phone;
        }
    }
    return cheapPhone;
}
const myPhone = cheapestPhone(phones);
console.log(myPhone);
function call(){
    let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
return sum;
}
const lara= call();
console.log(lara);