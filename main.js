// add items from the form to a list
function addListItem() {
	var list = document.getElementById('listUo');
	var item = document.getElementById('listField').value;
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(item));
	list.appendChild(entry);
	document.getElementById('listField').value = "";
		console.log("added a list item");

}
 	
 	// remove an item from the list

	


// function removeListItem() {
// 	var item = document.getElementById("listUo");
// 	li.parentNode.removeChild(li);
// 	console.log('removed item');
// 	// var list = document.getElementById('listUo');
// 	// console.log("remove initiated");
// 	// list.parentNode.removeChild(removal);
// }


// push all list items into an array for safekeeping
function makeArrays() {
var LIs = document.getElementById('listUo').childNodes;
var listOfThings = [];
for( var i = 0; i < LIs.length; i++ ) {
			var LI = LIs[i];
			listOfThings.push(LI.innerHTML);
			console.log(listOfThings);
}

}






