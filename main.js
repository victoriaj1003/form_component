// function addListItem() {
// 	var listItem = document.getElementById("listField").value;
// 		console.log("the value is " + listItem);

// 	var displayList document.getElementById("listBox").innerHTML = listItem;
// }


function addListItem() {
	var list = document.getElementById('listUo');
	var item = document.getElementById('listField').value;
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(item));
	list.appendChild(entry);
	document.getElementById('listField').value = "";
}
