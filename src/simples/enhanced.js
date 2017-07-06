var taro = {
	name:"taro",
	age:19
}

var obj = {
    // Sets the prototype. "__proto__" or '__proto__' would also work.
    __proto__: taro.prototype,
    // Computed property name does not set prototype or trigger early error for
    // duplicate __proto__ properties.
    ['__proto__']: "somethingElse",
    // Shorthand for ‘handler: handler’
    taro,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ "prop_" + (() => 42)() ]: 42
};

console.log(obj.__proto__);
console.log(obj.toString());
console.log(obj.prop_42);
