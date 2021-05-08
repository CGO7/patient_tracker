// JavaScript code
function search() {
	let input = document.getElementById('search').value
	input=input.toLowerCase();
	// Inside the brackets needs to be the actual serchable data or a link to serchable data
	let x = {};
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
