
//break
const nums = [1, 2 ,3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
    if(nums[i] > 5){
        console.log("Limit Up!!!");
        break;
    }
     console.log(nums[i]);
}

//continue
const nums2 = [1, -2 ,3, -4, 5, -6, 7, -8, 9];
for(let i = 0; i < nums2.length; i++){
    // console.log(nums2[i]);
    if(nums2[i] < 0){
        
        continue;
    }
     console.log(nums2[i]);
}