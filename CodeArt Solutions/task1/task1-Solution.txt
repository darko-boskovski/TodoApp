


var numArray = [1,2,3,4,5]


function rotateArray(arr, length, n)
{   n = n % length;
    if(n < 0){
        n = n * (-1)
    }else{
        n = length - n
    }

    console.log(n)
    for (let index = 0; index < n; index++) {
        var first = arr.shift();
        arr.push(first)        
    }

}

rotateArray(numArray, numArray.length, -3)
console.log(numArray)