var mainBody = document.querySelector('.main'); // parent element
var newElement; // child template element
var colors = ['#FF6633', '#FFB399', '#FF33FF', '#6680B3', '#66991A','#66994D'];


function makeBoxes(count) {

	for (var i = 0; i < count; i++) {
		newElement = document.createElement('div');
		newElement.className = 'box';
		newElement.style.backgroundColor = colors[i%colors.length];
		mainBody.appendChild(newElement);
	}

	mainBody.addEventListener('click', function(e) {
		e.target.parentNode.removeChild(e.target);
	}, false);
}


function countUp() {
	var number = 0;

	function increment() {
		return console.log(number++);
	}

	increment();
	increment();
	increment();
	increment();
}

countUp();