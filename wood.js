function woodCalculator ( chairQuantity, tableQuantity, bedQuantity ){
    const chairWood = chairQuantity * 3;
    const tableWood = tableQuantity * 10;
    const bedWood = bedQuantity * 50;
  const totalQuantity = chairWood + tableWood + bedWood;
    return totalQuantity;

}
const totalWood = woodCalculator(1,10,3);
console.log(totalWood,'cft' );