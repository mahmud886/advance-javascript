const student = [
    {id: 21, name: "babu"},
    {id: 31, name: "snigdho"},
    {id: 41, name: "priya"},
    {id: 71, name: "tanha"}
];
const names = student.map( s => s.name);
const ids = student.map( s => s.id);

console.log(names);
console.log(ids);

const bigger = student.filter( s => s.id > 40);
const biggerOne = student.find(s => s.id > 40);
console.log(biggerOne);
console.log(bigger);
