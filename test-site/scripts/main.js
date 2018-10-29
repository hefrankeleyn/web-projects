/*
var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!"
*/
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/love.jpg') {
		myImage.setAttribute('src','images/love02.jpg');
	}else {
		myImage.setAttribute('src','images/love.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Welcome '+ myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
}else {
	var storeName = localStorage.getItem('name')
	myHeading.textContent = 'Hello ' + storeName;
}

myButton.onclick = function(){
	setUserName();
};