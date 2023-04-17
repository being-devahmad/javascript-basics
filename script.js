// 1-Calculate the Square of a Number.
function sqrOfNumber(){
    let inputNumber = +prompt("Enter any number")
    let sqrNumber = inputNumber * inputNumber;
    console.log("Square of given number --> " + sqrNumber)
}
sqrOfNumber();




// 2-Calculate Square-root of a Number.
function sqrtOfNumber(){
    let inputNumber = +prompt("Enter any number")
    let sqrtNumber = Math.sqrt(inputNumber);
    console.log("Square-Root of given number --> " + sqrtNumber)
}
sqrtOfNumber();



// 3-copy-all-elements-from-an-array-to-another-array.
function copyArray(){
    let arr = [1,2,3,4,5];
    let newArr = arr.slice();
    console.log("By copying all elements into new array " + newArr);
}
copyArray();






// 4-maximum-and-minimum-between-two-numbers-using-functions, if you have not been proficient so you can do it simply in your own way.
function maxminNumbers(){
    let input1 =  +prompt("Enter first number");
    let input2 =  +prompt("Enter second number");
    if(input1 > input2){
        console.log(input1 + " is greater than "+ input2)
    }
    else if (input1 < input2){
        console.log(input2 + " is greater than "+ input1)
    }
    else{
        console.log("Both numbers are equal")
    }
}
maxminNumbers();





// 5-count-total-number-of-negative-elements-in-an-array
function negElements(){
    let arr = []
    let count = 0;
    let size = +prompt("Enter size of array")
    for(let i = 0; i < size; i++){
        arr[i] = +prompt('Enter elements of array')
        if(arr[i] < 0){
            count++;
        }
    }
    console.log(arr)
    console.log("Total negative elements in array are " + count)
}
negElements();





// 6-sum of all even numbers between 1 to n, n is taken from the user.
function sumOfAllEven(){
    let n = +prompt("Enter any number ")
    let sum = 0;
    for(let i=1; i<=n; i++){
        if(i % 2 == 0){
            sum = sum + i;
        }
    }
    console.log("Sum of all even numbers between 1 to "+ n + " = " + sum)
}
sumOfAllEven();






// 7- count total number of duplicate elements in an array.
function duplicateElements(){
    let count = 0;
    let arr = prompt("Enter elements of array seperated by commas")
    let newArr = arr.split(",")
    newArr = newArr.sort();
    newArr.forEach(function(val,index,arr1){
        console.log(val);
        if(arr1[index] == arr1[index+1]){
             count++;
        }
    })
    console.log("Total number of duplicate elements in array are " + count)
}
duplicateElements();

  
  

