var TestManager = require('./test_manager');

var Test = module.exports = function(){
    this.initialize();
}
Test.prototype.initialize = function(){
    TestManager.instance.add(this);
}
Test.prototype.ok = function(){
    console.log("ok");
}
Test.prototype.dispose = function(){
    TestManager.instance.remove(this);
}

module.exports.call1 = function(){
	console.log("call1");
	console.log("done!!");
}

module.exports.call2 = function(){
	console.log("call2");
	console.log("donedone!!");
}
