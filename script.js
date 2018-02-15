let dateRef = new Date();
let day = dateRef.getDate();
let month = dateRef.getMonth();
let year = dateRef.getFullYear();
let time = dateRef.getHours()+":"+dateRef.getMinutes();
let dateFormat = day + "-" + month + "-" + year;
let btn = document.getElementById('btn');
document.getElementById('Date').value=dateFormat+" "+time;


btn.addEventListener("click", function(event) {
	let nameValue = document.getElementById('Name').value;
	let dateValue = document.getElementById('Date').value;
	let commentValue = document.getElementById('Comment').value;
	addtoScreen(nameValue,dateValue,commentValue);
});
function addtoScreen(nameValue,dateValue,commentValue) {
	let node = document.createElement("li");
	node.setAttribute("id", "listElement")
	let textNode = document.createTextNode(nameValue+ " : " + commentValue + " at " + dateValue);
	node.appendChild(textNode);
	document.getElementById('unlist').appendChild(node);
}
