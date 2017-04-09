// 1)
var yearsArr = [1999, 1990, 1966, 2010];

// 2) 
var arr = [];

// 3) 
for (var i = 0; i < yearsArr.length; i++) { // looping over years array;
    
/*  arr.push(2017 - yearsArr[i]);      // pushing ages into array.  arr now only contains ages.*/
    arr[i] = 2017 - yearsArr[i];         
}

for (i = 0; i < arr.length; i++) {  //looping through arr to find out whether or not person is of age. 
    if (arr[i] < 18) {
        console.log(arr[i], 'Not of age');
    } else {
        console.log(arr[i], 'Of age');
    }
}

// 4) 

function printFullAge(years) {
    
    var ages = [];
    var fullAges = [];
    
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2017 - years[i];          
    }
    
    for (i = 0; i < ages.length; i++) {  //loops through ages array, 
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
        console.log(ages);
    }  
    
    return fullAges;
}
var years = [2001, 1985, 1994, 2014, 1973];

var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

