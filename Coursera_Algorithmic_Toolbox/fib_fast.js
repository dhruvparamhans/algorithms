// Compute fibonacci numbers using a look up table
function fib_table(input){
	var array = [];
	array.push(0);
	array.push(1);	
	for(var i = 2; i <=input; i++){
		var temp = array[i-1] + array[i-2];
		array.push(temp);
	}
	return array[input];
}
// Test Cases 
console.log(fib_table(10));
console.log(fib_table(20));
console.log(fib_table(30));
console.log(fib_table(60));

// Compute last digit of nth Fibonacci number

function fib_last_digit(input){
	var array = [0,1];
	for (var i = 2; i<=input; i++){
		var temp = (array[i-1]+array[i-2])%10;
		array.push(temp);
	}
	return array[input];
}

console.log(fib_last_digit(3));
console.log(fib_last_digit(20));
console.log(fib_last_digit(60));
console.log(fib_last_digit(327305));



