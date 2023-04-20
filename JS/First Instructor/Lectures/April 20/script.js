let arr = [21, 19, 34, 56];

let beautArr = arr.map((value, index, arr) => {
    console.log(value + "the value of index:", index);

    let rank="";
    if(value<21){
        rank = "undergrad";
    } else if(value>=21 && value<30){
        rank = 'passed';
    } else{
        rank = 'adult';
    }

    let obj = {
        age: value,
        rank: rank
    }

    return obj;
})

console.log(arr);
console.log(beautArr);