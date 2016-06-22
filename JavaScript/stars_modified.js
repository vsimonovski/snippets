function print_stars (n) {
	var stars = "\n";

	for(var i = 0; i < n; i++) {
		for(var j = 0; j < n-i; j++){
			stars += " ";
		}
		for(var k = 0; k < (2*i+1); k++) {
			stars += "*";
		}
		stars += "\n";
	} 
	stars += "\n";
	return stars;
}

console.log(print_stars(10));