// VARIABLES
// have a three type of variable --> LET, CONST, VAR

/*
	BLOCK SCOPE: differece local & global
	GLOBAL SCOPE: not difference local & global
	FUNCTIONAL SCOPE: only use that special function not sharing the other one 

	Note: if the same variable exists locally and globally, JS uses the local one. this is called Shadowing

	HOISTED: call the variable before the initilization. this is return a undefined not error
*/



// LET --> Block scope, Changeable
// let firstName; // we can use by the way if we want in changeable variable
let firstName = "Ibrahım";
firstName = "İbrahim"; // change a true

console.log(firstName); // İbrahim

// we do example for understand we can learn function next lesson
function printFirstName(){
	// console.log(firstName); // it's give an error because this a blockscope and we not initilization the before calling on let variable
	let firstName = "Halil İbrahim";
	console.log(firstName); // Halil İbrahim
}
printFirstName(); // call function

// same reason why we dont see Halil İbrahim on global
// if we want to see that variable we can return 
/*
	function print(){
		let x = 0;
		return x;
	} 
	
	let y = print();
*/
console.log(firstName); // İbrahim



// VAR --> Global scope, Functional scope, Hoisted, Changeable
// var lastName; // we can use by the way if we want in changeable variable
var lastName = "Krrabulut";
lastName = "Karabulut"; // change a name

console.log(lastName); // Karabulut

function printLastName(){
	console.log(lastName); // it's give an undefined because we use that variable before the initilization
	var lastName = "Black Clouds";
	console.log(lastName); // Black Clouds
}
printLastName(); // call function

// reason why we dont see Black Clouds because var is functional scope 
// if we want to see that variable we can return 
/*
	function print(){
		var x = 0;
		return x;
	} 
	
	var y = print();
*/
console.log(lastName); // Boeing



// CONST --> Block scope, Unchangeable
// const birthday; // we cant use it because this unchangeable variable
const birthday = "01.01.2001";
// birthday = "02.02.2002"; // its give an error becuase we cant change that variable type
console.log(birthday);

function printBirthday(){
	// console.log(birthday); // it's give an error because this a blockscope and we not initilization the before calling on let variable
	const birthday = "01.01.1999";
	console.log(birthday); // 01.01.1999
}
printBirthday(); // call function

// same reason why we dont see 01.01.1999 on global
console.log(birthday); // 01.01.2001


const passwd = 'rg68ew9g4tr5g69rth'
let salt = ['!+&(+', '?&/()=&%'] // this is array we can learn next lesson

/* if variable isn't CONST you can use names=names.concat(...add) but in CONST you can't change, only manipulated of value */
console.log(passwd.concat(...salt))

/* you can edit in Object & Array variable with CONST because we didn't change the value with the new reference, array and the object was changed inside itself with its own method */
const points = [25, 56, 69]
points.pop()
points.push(85)
console.log(points)

const profile = {
	name: 'İbrahim Karabulut',
	lang: ['TR', 'EN']
}
profile.lang.push("DE")
console.log(profile)
/* if you dont want to change your object */
Object.freeze(profile)



// PRINT VARIABLE METHODS

// First method there is no space you have to add on string
console.log("1) Hello my name is "+firstName+" "+lastName+"; my birthday is "+birthday+" and my job is "+job);

// Second method there has a space if you have to add on string with ,
console.log("2) Hello my name is",firstName, lastName,"; my birthday is",birthday,"and my job is",job);

// Third method
console.log(`3) Hello my name is ${firstName} ${lastName}; my birthday is ${birthday} and my job is ${job}`);