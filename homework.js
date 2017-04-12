// No. 1
function myFunction(a,b){

return a+b;
	
}

var sum = myFunction(5,6);

console.log(sum);

var sum = myFunction('add','this');
console.log(sum);


// No. 2

var x = ['apples','oranges','bananas','nuts'];
var y = x.slice(0,2);
console.log(y);

// No. 3

var x = 200;
	if (x<100){
		alert('Your variable is less than 100');
	}
	else if (x>100){
		alert('Your variable is greater than 100. It is' + ''+ x);
	}

// No. 4
function getName(Name) {
  return "My name is"+" "+ Name;
}

var post = getName('Nabila');
alert(post);

// No. 5

function openDoor(doorNumber) {
  if (doorNumber === 1) {
    return "Iphone";
  } else if (doorNumber === 2) {
    return "Laptop";
  } else if (doorNumber === 3) {
    return "Absolutely nothing";
}
else {
    return "that's not a door number";
  }
}

alert(openDoor(2));
alert(openDoor(3));
alert(openDoor(none));