let number1=
document .getElementById("number1");
let number2=
document .getElementById("number2");
console. log(number1);
console.log(number2);
// function to  get peroduct
function getproduct(){
	let ourproduct=
	number1.value* number2.value;
	console.log(ourproduct);
	//console.log(ourproduct)
	alert("your product is"+ourproduct );
	//document.getElementById("result").innerhtml
	let ourresult=document.getElementById("result");
	ourresult.innerHTML="product is"+ourproduct;
	return false;
}


//get html elements by their tag name
let ourparagraphs=
     document.getElementsByTagName("p"); // array object

console.log(ourparagraphs[1]);
//get html elements by class
let parclass=
document.getElementsByClassName("parclass");
console.log(parclass);

//change attribute of html elements using JS.
function changeimage(){
	let img=document.getElementById("myimg")
	img.src="pic6.jpg"
	return false;

]

	// change the style of an element.
	let=
	document.getElementById("myimg")
	img.style.width="200px";
