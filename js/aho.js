function vastaus1() {
	let oikein = document.getElementById('b1').checked;
	if (oikein) {
		document.getElementById('demo1').innerHTML =
			'oikein meni';

	} else {
		document.getElementById('demo1').innerHTML =
			'Väärin meni';


	}
	document.getElementById("a1").disabled = true;
	document.getElementById("b1").disabled = true;
	document.getElementById("c1").disabled = true;
	document.getElementById("d1").disabled = true;

}

function vastaus2() {
	let oikein = document.getElementById('c2').checked;
	if (oikein) {
		document.getElementById('demo2').innerHTML =
			'oikein meni';
	} else {
		document.getElementById('demo2').innerHTML =
			'Väärin meni';
	}
	document.getElementById("a2").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("c2").disabled = true;
	document.getElementById("d2").disabled = true;
}

function vastaus3() {
	let oikein = document.getElementById('a3').checked;
	if (oikein) {
		document.getElementById('demo3').innerHTML =
			'oikein meni';
	} else {
		document.getElementById('demo3').innerHTML =
			'Väärin meni';
	}
	document.getElementById("a3").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("c3").disabled = true;
	document.getElementById("d3").disabled = true;
}

function vastaus4() {
	let oikein = document.getElementById('a4').checked;
	if (oikein) {
		document.getElementById('demo4').innerHTML =
			'oikein meni';
	} else {
		document.getElementById('demo4').innerHTML =
			'Väärin meni';
	}
	document.getElementById("a4").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById("c4").disabled = true;
	document.getElementById("d4").disabled = true;
}

function vastaus5() {
	let oikein = document.getElementById('c5').checked;
	if (oikein) {
		document.getElementById('demo5').innerHTML =
			'oikein meni';
	} else {
		document.getElementById('demo5').innerHTML =
			'Väärin meni';
	}
	document.getElementById("a5").disabled = true;
	document.getElementById("b5").disabled = true;
	document.getElementById("c5").disabled = true;
	document.getElementById("d5").disabled = true;
}
