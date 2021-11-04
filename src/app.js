//Usage Functions
let isPrime = function (number) {
    for(let i=2;i<number;i++){
        if(number%i==0){
            return false
        }
    }
    return true
}

function findDividersWithoutItself(number) {
    let count = 0;
    for (let index = 1; index < number; index++) {
        if(number%index==0){
            count = count + index;
        }  
    }
    return count   
}


function findAllDividers(number) {
    let count = 0;
    for (let index = 1; index <= number; index++) {
        if(number%index==0){
            count = count + index;
        }  
    }
    return count   
}


// 1.Soru: Is Prime or Not in Different Number of Parameters
let findPrime = function (...numbers) {
    for (let i = 0; i < numbers.length; i++) {
       if(isPrime(numbers[i])){
           console.log(numbers[i]+" is prime!")
       }else{
           console.log(numbers[i]+" is NOT prime!")
       }
    }
}
   findPrime(1,2, 3)
   findPrime(6,7,10,11)
   findPrime(12,29,37,40,55)


   //2.Soru: Is Friendly Number or Not
function isFriendlyNumber(num1, num2) {
    let divider1,divider2
    divider1 = findDividersWithoutItself(num1)
    divider2 = findDividersWithoutItself(num2)
    if(divider1==num2 && divider2==num1){
        console.log(num1+" and "+num2+ " are Friendly Number")
    }else{
        console.log(num1+" and "+num2+" are NOT Friendly Number")
    } 
} 
isFriendlyNumber(200,450)
isFriendlyNumber(1184, 1210)


// 3.Soru: Find Perfect Numbers until 1000
let isPerfectNumber = function () {
    for (let i = 1; i < 1000; i++) {
        let sumOfDivider = findAllDividers(i) 
        if(sumOfDivider==i*2){
            console.log(i+" is a perfect number")
        }else{
            console.log(i+" is NOT a perfect number")
        } 
    }   
}
isPerfectNumber()


// 4.Soru: Find Prime Numbers until 1000
let findPrimesUntilThousand = function() {
    for (let index = 1; index < 1000; index++) {
        if(isPrime(index)){
            console.log(index)
        }
    }
}
 findPrimesUntilThousand()

