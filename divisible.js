// we  have to show 1 to 50;
// of any number divisible by 3 than it would be foo,
// and if any number divisible by 5 than it would be bar,
// last if any number divisible by both 3 and 5 it would be foobar,

for (let i =1; i<=50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if (i % 3 === 0  ){
        console.log('foo');
    }
    else if( i % 5 ===0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}