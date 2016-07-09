function sort_by_two_keys(prop, prop2){
   return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      if( a[prop2] < b[prop2]){
          return 1;
      }else if( a[prop2] > b[prop2] ){
          return -1;
      }
      return 0;
   }
}



$.getJSON("test.json")
	.done(function (json) {
		json.sort(sort_by_two_keys("result", "number"));
		for(var i = 0; i < 5; i++) {
			console.log("ID: " + json[i].id + " / " + "NOF: " + json[i].number);
		}

	})
	.fail(function (jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
		console.log("Request Failed: " + err);
	});
