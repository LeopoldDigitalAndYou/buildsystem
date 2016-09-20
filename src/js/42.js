class Answer {
	constructor(value) {
		this.value = value;
	}
	question() {
		console.log(this.value);
	}
}

var ultimate = new Answer(42);
ultimate.question();
