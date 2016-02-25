// range(1, 5)
// [1, 2, 3, 4, 5]
function range(a, b){
	var arr = [];
	for(i = a; i <= b; i++)
		arr.push(i);
	return arr;
}

// returns sum of array
function sumr(a){
	var sum = 0;
	for(i = 0; i < a.length; i++)
		sum += a[i];
	return sum;
}


// rangeImproved(1,10,2)
// [1, 3, 5, 7, 9]
function rangeImproved(a, b, step){
	var arr = [];
	if(a < b)
		for(i = a; i <= b; i += step)
			arr.push(i);
	else
		for(i = a; i >=b; i += step)
			arr.push(i);
	return arr;
}