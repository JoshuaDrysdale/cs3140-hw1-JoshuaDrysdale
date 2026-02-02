// part 1

function sum(arr){
    let total = 0;
    for (let i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total;
}


function average (arr){
    return (sum(arr)/arr.length);
}


function min(arr){
    let smallest = arr[0];
    for (let i=1; i<arr.length; i++){
        if (smallest>arr[i]){
            smallest = arr[i];
        }
    }
    return smallest;
}

function max(arr){
    let biggest = arr[0];
    for (let i=1; i<arr.length; i++){
        if (biggest<arr[i]){
            biggest = arr[i];
        }
    }

    return biggest;
}

console.log("the sum of an array [1,2,3] = "+sum([1,2,3]));
console.log("the average of an array [1,2,3] = "+average([1,2,3]));
console.log("the min of an array [3,1,2] = "+min([3,1,2]));
console.log("the max of an array [3,1,2] = "+max([3,1,2]));

//part 2

function capitalize(str){
   let cap = str.at(0).toUpperCase();
   let arr = str.split("");
   arr[0] = cap;
   str = arr.join("");
   return str;
}

<<<<<<< HEAD

=======
console.log(capitalize("hello"));
>>>>>>> 0aa7870e1b6f3ba323671e9222c0fbfc04b3fe96

function reverse(str){
    let arr = str.split("");
    arr.reverse();
    str = arr.join("");
    return str;
}


function countVowels(str){
    const vowels = "aeiou";
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

<<<<<<< HEAD
console.log(capitalize("hello"));
=======
>>>>>>> 0aa7870e1b6f3ba323671e9222c0fbfc04b3fe96
console.log(reverse("hello"));
console.log(countVowels("hello"));

