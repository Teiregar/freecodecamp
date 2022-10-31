// Setup
function phoneticLookup(val) {
	let result = "";
 
	// Only change code below this line
 
	var looking = {
	  "alpha": "Adams",
	  "bravo": "Boston",
	  "charlie": "Chicago",
	  "delta": "Denver",
	  "echo": "Easy",
	  "foxtrot": "Frank"
	}
	result = looking[val];
	// Only change code above this line
	return result;
 }
 
 console.log(phoneticLookup("foxtrot"));