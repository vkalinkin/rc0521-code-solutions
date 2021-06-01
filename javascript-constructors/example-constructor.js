function ExampleConstructor() {

}

console.log('Prototype property of ExampleConstructor():', ExampleConstructor.prototype);
console.log('Type of prototype property of ExampleConstructor():', typeof ExampleConstructor.prototype);

var myExample = new ExampleConstructor();
console.log('New ExampleConstructor():', myExample);
var isMyExampleInstance = myExample instanceof ExampleConstructor;
console.log('Is myExample an instance of ExampleConstructor()?:', isMyExampleInstance);
