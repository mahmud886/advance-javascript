const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(3, 7);

const removed = nums.splice(2, 5, 77, 88, 99);
console.log(removed);
console.log(removed.reverse());
console.log(part);
console.log(nums);

const together = nums.join(",")
console.log(together);