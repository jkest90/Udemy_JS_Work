console.log('hello world');

var jon = {
    height: 155,
    age: 27
}

var matt = {
    height: 188,
    age: 23
}

var buster = {
    height: 55,
    age: 4
}


var jonScore = jon.height + jon.age*5;
var mattScore = matt.height + matt.age*5;
var busterScore = buster.height + buster.age*5;


if (jonScore > mattScore && jonScore > busterScore) {
        console.log('Jon wins with a score of ' + jonScore);
    } else if (mattScore > jonScore && mattScore > busterScore) {
        console.log('Matt wins with a score of ' + mattScore);
    } else if (busterScore > jonScore && busterScore > mattScore) {
        console.log('Buster wins with a score of ' + busterScore);
    } else {
        console.log('Its a draw!');
    }

/////////////////////////////////////

//function friend(age, height) {
//    this.age = age;
//    this.height = height;
//}
//
//var jon = new friend();
//var matt = new friend();
//var buster = new friend();
//
//function calculateScores(height, age) {
//    return (age*5) + height;
//}
//
//var jonScore = calculateScores(181, 20);
//var mattScore = calculateScores(22, 25);
//var busterScore = calculateScores(0, 600);
//
//
//if (jonScore > mattScore && jonScore > busterScore) {
//        console.log('Jon wins with a score of ' + jonScore);
//    } else if (mattScore > jonScore && mattScore > busterScore) {
//        console.log('Matt wins with a score of ' + mattScore);
//    } else if (busterScore > jonScore && busterScore > mattScore) {
//        console.log('Buster wins with a score of ' + busterScore);
//    } else {
//        console.log('Its a draw!');
//    }
