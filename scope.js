function sum(first, second){
    let result = first + second;

    if(result > 10){
        const mood = "Happy";
        console.log(mood);
    }
    console.log(mood);

    return result;
}
const output = sum(13, 7);
console.log(output);