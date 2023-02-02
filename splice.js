const friends = [34,53,53,123,54,54,64];
const cutSplice = friends.splice(2,5, 100, 500, 700);
// how to work splice?
// example of splice = .splice(from delete, how many value deletes, then add any values)

console.log(cutSplice);
console.log(friends);