var a=[1,[2,[7,3]],[4],[5,6,7, 8, 9, [10, 11]]];
var b = [];

function unwrap(arr, arr_after) {
    for (var i=0;i<arr.length;i++) {
		 if(typeof(arr[i])==="object"){
            unwrap(arr[i], arr_after);
         } 
         else {
            arr_after = custom_push(arr_after, arr[i]);
	     }
	}
}

function custom_push (arr, el) {
  var last_pos = arr.length;
  arr[last_pos] = el;
  
  return arr;
}

unwrap(a, b);
console.log(b);