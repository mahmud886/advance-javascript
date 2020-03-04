function add(num1, num2){
    console.log([...arguments]); // array like object
    return num1 + num2 + arguments[2];
}
const result = add(2, 5, 3, 7);
console.log(result);


