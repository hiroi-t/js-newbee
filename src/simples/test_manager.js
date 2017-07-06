var Test = require('./test');

var TestManager = function(){
    this.tests = [];
}
TestManager.prototype.create = function(){
    return new Test();
}

TestManager.prototype.add = function(test){
    this.tests.push(test);
}
TestManager.prototype.remove = function(test){
    this.tests = this.tests.filter(function(v){ return v !== test });
}

module.exports = {
    instance : new TestManager()
}
