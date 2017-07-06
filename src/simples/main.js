var _ = require('lodash');
var Sub = require('./Sub.js');
var call = require('./test.js');
TestManager = require('./test_manager');

var man = TestManager.instance.create()
console.log(man);


var test = function(){
	for(var i=1; i <= 10; i++){
		console.log(i);
	}
}

console.log(_);

console.log(_.isNil(null));
console.log(_.isNil(25));
console.log(_.isNil(false));

test();
subcl.hoge();

console.log(call.call1());
console.log(call.call2());

