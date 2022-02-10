//zmienne


var favColor = 'blue';
var myFavColors = ['blue', 'red', 'green'];
var numOfFavColors = 3;
var hasGotFavColors = true;

//objects

var richObject = {
	firstName: 'Rich',
	lastName: 'Armstrong',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 37,
	isMale: true

};

//function
// w srodku klamry działanie funkcji

function whatIsMyFavColor(){
	return'blue';
}

//inny zapis funkcji

var whatIsMyFavColor = function(){

}

var doSomethiing = function(){
	console.log('Do Something!');
}

function area(width, height){
	return width * height;
}


// if 

if (true){
	//do something
	alert('male');
};

if('male'=='male'){
alert('male');

};

var number1 = 10;
var number2 = 100;

if(number1 > number2){
	alert('true');
} else {
	alert('false');
}


var name1 = 'Rich';
var name2 = 'Bob';

if(name1 == 'Rich'){
	alert('true1');
} else if(name2 == 'Rich'){
	alert('true2');
} else {
	alert('false');
}

