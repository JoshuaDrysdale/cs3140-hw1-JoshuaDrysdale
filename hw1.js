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


console.log(reverse("hello"));
console.log(countVowels("hello"));
console.log(capitalize("hello"));


// part 3

const student = {

name: "Joshua Drysdale",

age: 20,

grades: [85, 90, 78],

getAverage: function() {
    let num = 0
    for (let i=0; i<this.grades.length; i++){
        num +=this.grades[i];
    }
    return (num/this.grades.length);

},

isHonorRoll: function() {
    return this.getAverage() > 85;
}

}

console.log(student.getAverage());
console.log(student.isHonorRoll());

