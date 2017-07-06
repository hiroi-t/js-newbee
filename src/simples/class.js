class Animal {
	constructor(){
		this.name = "animal"
	}

	cry(){
		console.log("I'm " + this.name)
	}
}

class Dog extends Animal{
	constructor(){
		super();
		this.name = "dog"
	}

	static cry(){
		console.log("bow-wow!!");
	}
}

const a = new Animal;
const d = new Dog;

a.cry();
d.cry();
Dog.cry();
