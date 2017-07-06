
function f(x, y = 12){
	console.log(x + y);
}

f(3);
f(15);
f(50, 50);

function r(x, ...y){
	console.log(x + y.length);
}

r(4, 5, 7);

function e(x, y, z){
	console.log(x + y + z);
}

e([1,2,3]);
e(...[1,2,3]);
