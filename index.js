// Code your solution here!

function printString(string) {
    if(string.length === 1) {
        console.log(string)
    } else {
        console.log(string[0])
        printString(string.slice(1, string.length))
    }
}

function reverseString(string) {
  //initialize a new string that's gonna hold the reversed string
  if(string.length === 1) {
    return string
  } else {
    return string[string.length-1] + reverseString(string.slice(0, string.length-1))
  }
}

function isPalindrome(string) {
  //possibly account for empty space or capital letters?
  //console.log("called with", string)
  if(string.length < 2) {
    return true
  } else if(string[0] !== string[string.length-1]) {
    //console.log("not a match!!")
    return false
  } else {
    return isPalindrome(string.slice(1, string.length-1))
  }
}

// Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(array, index) {
    //it's the sum of the first number plus all the rest of the array
    if(array.length === 1 || index < 1) {
        return array[0]
    }  else {
        return array[0] + addUpTo(array.slice(1, array.length),index-1)
    }
}

// Write a recursive function to find the largest integer in an array.
function maxOf(array) {
    if(array.length === 1) {
        return array[0]
    } else {
        //compare the first element and call function again with what?
        //if first element is bigger
        let comparison = maxOf(array.slice(1))
        if(array[0]>=comparison) {
            return array[0]
        } else {
            return comparison
        }
        
    }
}

// Write out a function to see if an array includes a given element.
function includesNumber(array, num) {
    if(array[0] === num) {
        return true
    } else if (array.length <= 1) {
        return false
    } else {
        //call this again on a smaller sub array
        return includesNumber(array.slice(1), num)
    }
}