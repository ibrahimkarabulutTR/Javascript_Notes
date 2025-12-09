let text = "  Hi, my name is İbrahim Karabulut my birthday is 01.01.2001  ";

// Is it have your query inside that variable (Answer is Boolean)
console.log(text.includes('name'));

// length of value (Answer is Number)
console.log(text.length);

// Is that value starts with your query (Answer is Boolean)
console.log(text.startsWith('Hi'));

// Is that value ends with your query (Answer is Boolean)
console.log(text.endsWith('.'))

// Tells where the query first uses
console.log(text.indexOf('is'));
console.log(text.search('is'));

// Tells where the query last uses
console.log(text.lastIndexOf('is'));

// Tells whats have in your query location
console.log(text.charAt(8));

// Convert your text uppercase letter or lowercase letter
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Convert your text uppercase letter or lowercase letter with your locale alphabet
console.log(text.toLocaleUpperCase('tr'));
console.log(text.toLocaleLowerCase('tr'));

// Choose where to start and end the selection within the text
console.log(text.substring(5,25));
console.log(text.slice(5,25));

// Choose where to start and have many step select in the text
console.log(text.substr(5,5));

// Edit your variable
console.log(text.replace('name is', 'names'));

// It will clean the beginning and end the blank of the text
console.log(text.trim());

// Choose the how many times print your value
console.log(text.repeat(2));

// Convert your variable type (string)
console.log(text.toString());

// Take to value of the variable
console.log(text.valueOf(),"de");

// Choose the when to divide your value and add to array
const textArr = text.split(' ');
// we can learn next lesson on loop
for(let textItem of textArr){
	console.log(textItem);
}

// Choose the when to array your value and divide to string
const textStr = textArr.join(' ');
console.log(textStr);