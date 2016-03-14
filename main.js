// add items from the form to a list
function addListItem() {
	var list = document.getElementById('listUo');
	var item = document.getElementById('listField').value;
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(item));
	list.appendChild(entry);
	document.getElementById('listField').value = "";
		console.log("added a list item");
		entry.onmouseenter = function() {this.innerHTML = "click to remove"}
		entry.onmouseout = function() {this.innerHTML = item}
		entry.onclick = function() {this.parentNode.removeChild(this);}
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


// push all list items into an array

function makeArrays() {
	var list = document.getElementsByTagName('ul')[0].getElementsByTagName('li');

	var theArray = [];

	for (var i = 1; i < list.length; i++) {
	    var arrValue = list[i].innerHTML;
	    console.log(arrValue);
	    theArray.push(arrValue);
	    console.log(theArray);
	}
}


// function clearList() {
// 	console.log("clearing");
// var elem = document.getElementById('listUo');
// elem.parentNode.removeChild(elem);
// }

