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