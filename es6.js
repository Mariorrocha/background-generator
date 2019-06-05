
/*
const player = 'boby';
let experience = 100;
var wizardLevel = false;*/

/*
if(experience > 90){
	var  wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside',wizardLevel);
*/


//player ='Saly'; can't do that
//console.log(player);

/*
const obj = {

	player : 'boby',
	experience : 100,
	wizardLevel : false
}*/

//obj = 5; can't do that

//obj.wizardLevel = true;

//console.log(obj);


///Destructuring


const obj = {

	player : 'boby',
	experience : 100,
	wizardLevel : false
}


//Instead of doing this

/*
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
*/


///Destructuring we do this
const {player, experience } = obj;

let { wizardLevel} = obj;


/*
const name = 'john snow';

const obj2 = {

	[name]: 'hello',
	[1 + 2]: 'hihi'

}

console.log(obj2);

const a = "Simon";
const b = true;
const c = {};
*/


//If property and value are the same doesn't do this


/*
const obj3 = {

	a:a
	b:b,
	c:c
}*/


//instead we can do this

/*
const obj3 = {

	a,
	b,
	c
}*/




//Template Strings


//What normally do when we want to handle Strings and concatenate

//const greeting = "Hello" + name + " you seem to be doing "+ greenting + "!"


//instead we can do this


/*
const name = "Sally";
const age = 34;
const pet = "horse";
*/


//const greentingBest = `Hello  ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;


//console.log(greentingBest);


//default arguments

function greet(name ='', age=30, pet='cat'){

	return  `Hello  ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;	
}


greet();


///Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');


console.log(sym1);
console.log(sym2);
console.log(sym3);


console.log(sym2 ==  sym3);




//Arrow functions


//Norma function

function add(a,b){

	return a + b;
}


//With Arrow function

const add = (a,b) => a + b;




