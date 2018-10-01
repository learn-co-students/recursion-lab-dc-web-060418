// Code your solution here!

function printString(str) {
    console.log(str[0])
    if (str.length>1) {
        printString(str.slice(1))
    }
}

function reverseString(str) {
    if (str.length===1) {
        return str
    }else{
        return str[str.length-1]+reverseString(str.slice(0,str.length-1))
    }
}

function isPalindrome(str) {
    if (str.length<=1) {
        return true
    }
    if (str[0]===str[str.length-1]) {
        return isPalindrome(str.slice(1,str.length-1))
    } else {
        return false
    }
}

function addUpTo(arr, i) {
    if (arr.length === 1 || i === 0) {
        return arr[0]
    }else{
        return arr.shift() + addUpTo(arr,i-1) 
    }
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    else{
        let largest = maxOf(arr.slice(1))
        return (arr[0]>largest)?arr[0]:largest
    }
}

function includesNumber(arr, num) {
    if (arr.length===1 && arr[0]!==num) {
        return false 
    }else{
        if (arr[0]===num) {
            return true
        }else{
            return includesNumber(arr.slice(1), num)
        }
    }
}