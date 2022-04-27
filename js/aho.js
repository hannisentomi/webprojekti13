function vastaus1() {
	let oikein = document.getElementById('b1').checked;
	if (oikein) {
		document.getElementById('demo1').innerHTML =
			'Hienoa! Oikein meni. Suomi täyttää vuonna 2022 106 vuotta. ';

	} else {
		document.getElementById('demo1').innerHTML =
			'Voi että väärin meni. Suomi sai itsenäisyytensä 6.12.1917. ';


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
			'Aivan oikein! Kaikkiaan vesijohtoja oli valtakunnassa noin 500 kilometriä. ';
	} else {
		document.getElementById('demo2').innerHTML =
			'Voi että väärin meni. Oikea vastaus on Roomalaiset';
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
		'Oikein meni! Rauhanopimus sai nimensä solmimispaikastaan, Pähkinälinnan linnoituksesta,joka sijaitsee Laatokan Pähkinäsaaressa';
	} else {
		document.getElementById('demo3').innerHTML =
			'Väärin meni. Oikea vastaus on 12.8.1323';
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
			'Oikea vastaus! ';
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
			'Oikea vastaus! Antiikin Ateenaa on pidetty länsimaisen kulttuurin kehtona';
	} else {
		document.getElementById('demo5').innerHTML =
			'Väärin meni. Oikea vastaus on Ateena';
	}
	document.getElementById("a5").disabled = true;
	document.getElementById("b5").disabled = true;
	document.getElementById("c5").disabled = true;
	document.getElementById("d5").disabled = true;
}
