function first (value){
	return value *= 10;
}
function second(value){
	if (value > 40){
		return value /= 10;
	} else {
		return value +=15;
	}
}
function third(value){
	return value -= 11;
}

var x = first(second(third(5)));
console.log(x);

