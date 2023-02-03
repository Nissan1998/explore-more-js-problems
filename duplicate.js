const names = ['Bangladesh','Butan','India','Bangladesh', 'Butan', 'India'];
function uniqueName(names){
    let partialName = [];
    for (let i = 0; i< names.length; i++){
        let name = names[i];
        if(partialName.includes(name) === false){
            partialName.push(name);
        }
    }
    return partialName;
}
const originalName = uniqueName(names)
console.log(originalName);