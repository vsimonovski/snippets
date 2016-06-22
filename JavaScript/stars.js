/*
n = 4
   *
  ***
 *****
*******
*/

function print_stars (n) {
	var stars = "\n";
	for(var i = 1; i <= n; i++) {
		for(j = 0; j < n-i; j++) {
			stars += " ";
		}
		for(var j = 0; j < i; j++) {
			stars += "* ";
		}
		stars += "\n";
	}
	stars += "\n";
	return stars;
}

console.log(print_stars(10));