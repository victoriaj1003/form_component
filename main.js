// add items from the form to a list
function addListItem() {
	var list = document.getElementById('listUo');
	var item = document.getElementById('listField').value;
	var entry = document.createElement('li');
	if ( item == null || item == "") {
		document.getElementById("alertBox").innerHTML = "please add something for your list";
	} else {
		document.getElementById("alertBox").innerHTML = "";
	entry.appendChild(document.createTextNode(item));
	list.appendChild(entry);
	document.getElementById('listField').value = "";
		console.log("added a list item");
		entry.onmouseenter = function() {this.innerHTML = "click to remove"}
		entry.onmouseout = function() {this.innerHTML = item}
		entry.onclick = function() {this.parentNode.removeChild(this);}
}
}
 	
 	

// push all list items into an array

function makeArrays() {
	var list = document.getElementsByTagName('ul')[0].getElementsByTagName('li');

	var theArray = [];

	for (var i = 0; i < list.length; i++) {
	    var arrValue = list[i].innerHTML;
	    console.log(arrValue);
	    theArray.push(arrValue);
	    console.log(theArray);
	    document.getElementById("displayArray").innerHTML = ("Here's your list " + "[ " + theArray + " ]");
	}
}


function clearList() {
	console.log("clearing");
var elem = document.getElementById('listUo').innerHTML = "";
}

