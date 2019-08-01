//Excersice 1:Write a function that when given an array sums only the odd values and returns that sum. Assume the array is an array of integers.*/
var arr =[1,2,3,4,5];

const sum = ()=> {
	let total = 0;

	for (const index of arr)
	{
		if (index%2 !== 0){
			total = total+index;
		}
		// console.log(total);

	}return total;
} 
console.log(sum());



//Excersice 2: Write a JavaScript program to reverse the order of the characters in the string.

var arr = 'hadeel';
const reverse = () =>{
	return arr.split('').reverse().join('');
}
console.log(reverse());


/*Excersice 3: Use `const` so `x` can't change
 * 
 * Consider renaming to const convention
 * 
var x = 1; 

if( true ) {
  var x = 2; // should raise a TypeError
}

console.log(x); // 1*/


const x = 1; 

if( true ) {
  const x = 2; 
}

console.log(x);


/* Excersice 4:  Use an ES6 Class to construct a Person instance.
 
function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

var john = new Person('John', 'Doe');
var jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John*/
class Person {
	constructor (firstname, lastname){
		this.fname = firstname;
		this.lname = lastname;
	}
}
var john = new Person('John', 'Doe');
var jack = new Person('Jack', 'Doe');

console.log(john);
console.log(john.fname);







/* Excersice 4: Turn `exampleFunction` into a one line "arrow function".

var exampleFunction = function() { 
  console.log('🙌');
}

exampleFunction();*/

const exampleFunction = ()=>{
	console.log('🙌');
}
exampleFunction();

/*
 * Exercise 5:Make a function that takes array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
var arr = [2,5,100]
const doubleNumbers = (arr)=>{
	array=[]
	for (const index of arr){
		array.push(index*2);
	} return array
	
}
console.log(doubleNumbers([2, 5, 100]));

/*
 * Exercise 6: Make a function that takes capitalize each of an array of names 
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/


var arr = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const capitalizeNames = (arr) =>{
	var array = []
	// return arr.charAt(0).toUpperCase();

for (const index of arr){
index1 = index.charAt(0).toUpperCase() + index.substr(1).toLowerCase();


array.push(index1);

}return array;
}
console.log(capitalizeNames(arr));


/*Exercise 7: Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/

var arr =[1,2,3,4,5];

const onlyEvenValues = ()=> {
	array=[]

	for (const index of arr)
	{
		if (index%2 == 0){
			array.push(index);
		}
		// console.log(total);

	}return array;
} 
console.log(onlyEvenValues())


/*Exercise 8: Write a JavaScript function to find the first not repeated character. Go to the editor
Sample arguments : 'abacddbec' 
Expected output : 'e' 
*/


const Arguments = (arr)=>{
	var array =arr.split('');
	var result = '';
	var count=0;

	for (i=0;i<array.length;i++){
		count=0;
		for(y=0;y<array.length;y++){
			if(array[i]===array[y]){
				count=count+1;
			}
		}
		if(count<2){
			result=array[i];
			break
		}
	}
	return result;

}
console.log(Arguments('abacddbec'));

/*Exercise 9:Use destructuring to initialize the variables `one`, `two`, and `three` with the colors from the `things` array.
 */

// const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const one = things;
// const two = '';
// const three = '';

// const colors = `List of Colors
// 1. ${one}
// 2. ${two}
// 3. ${three}`;

// console.log(colors);

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three, ] = things;
const colors = `List of Color
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);


// /*Exercise 10:Replace the variable declarations using let or const. */
// var CHARACTER_LIMIT = 255;
// var posts = [
// 	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
// 	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
// 	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
// ];

// // prints posts to the console
// function displayPosts() {
// 	for (var i = 0; i < posts.length; i++) {
// 		console.log(posts[i].slice(0, CHARACTER_LIMIT));
// 	}
// }

// displayPosts();

const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	
	for(const index of posts){
		console.log(index.slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();
