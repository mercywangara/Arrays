//question 1
let arr1=[3,7,34,90,12];
let arr2=[true,"green","where",12,56];

console.log(arr1[arr1.length-1]);
console.log(arr2[arr2.length-1]);


//question 2
let myPets=["Cow","Bird","Snake","Dog"];
let myPetsString=(myPets.join(","));
console.log(myPetsString);


//question 3
let arr3=[-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort((a,b)=>a-b));


//question 4
let arr=["boy","man","girl","school","girl","woman"];
console.log([...new Set(arr)]);


//question 5
let arr5=["the","way","x",4];
console.log(arr5.includes("food")?"food":"the search word was not found");


//question 6
let word = "renniw";
console.log(word.split("").sort().join(""));


//question 7
let fruits=Array(10).fill("");
fruits[4]="Tomato"
console.log(fruits)
