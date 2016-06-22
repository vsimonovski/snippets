var niz = [1, 4, 6, [3, [5, 3]], [3], 2, [4, 3]];

function array_sum(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		if(typeof(arr[i]) !== "object")
			sum += arr[i];
		else
			sum += array_sum(arr[i]);
	}
	return sum;
}

console.log(array_sum(niz));