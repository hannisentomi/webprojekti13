let correct = 0;
let left = 5;


function vastaus1() {
	let vaarin1 = document.getElementById('a1').checked;
	let vaarin2 = document.getElementById('c1').checked;
	let vaarin3 = document.getElementById('d1').checked;
	let oikein = document.getElementById('b1').checked;
	if (oikein) {
		left--;
		correct++;
		document.getElementById('demo1').innerHTML =
			'Hienoa! Oikein meni. Suomi täyttää vuonna 2022 106 -vuotta. Sinulla on nyt kasassa ' + correct + ' pistettä. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a1").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("d1").disabled = true;
		document.getElementById("submit").disabled = true;
	}else if (vaarin1 || vaarin2 || vaarin3) {
		left--;
		document.getElementById('demo1').innerHTML =
			'Voi että väärin meni. Suomi sai itsenäisyytensä 6.12.1917. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a1").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("d1").disabled = true;
		document.getElementById("submit").disabled = true;
	}  else {
		document.getElementById('demo1').innerHTML =
			'Valitse vastaus ensin';

	}





}

function vastaus2() {
	let oikein = document.getElementById('c2').checked;
	let vaarin4 = document.getElementById('a2').checked;
	let vaarin5 = document.getElementById('b2').checked;
	let vaarin6 = document.getElementById('d2').checked;
	if (oikein) {
		left--;
		correct++;
		document.getElementById('demo2').innerHTML =
			'Aivan oikein! Kaikkiaan vesijohtoja oli valtakunnassa noin 500 kilometriä. Sinulla on nyt kasassa ' + correct + ' pistettä. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a2").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("d2").disabled = true;
		document.getElementById("submit2").disabled = true;
	} else if (vaarin4 || vaarin5 || vaarin6) {
		left--;
		document.getElementById('demo2').innerHTML =
			'Voi että väärin meni. Oikea vastaus on Roomalaiset. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a2").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("d2").disabled = true;
		document.getElementById("submit2").disabled = true;
	}  else {
		document.getElementById('demo2').innerHTML =
			'Valitse vastaus ensin';
	}



}

function vastaus3() {
	let oikein = document.getElementById('a3').checked;
	let vaarin7 = document.getElementById('b3').checked;
	let vaarin8 = document.getElementById('c3').checked;
	let vaarin9 = document.getElementById('d3').checked;
	if (oikein) {
		left--;
		correct++;
		document.getElementById('demo3').innerHTML =
			'Oikein meni! Rauhanopimus sai nimensä solmimispaikastaan, Pähkinälinnan linnoituksesta,joka sijaitsee Laatokan Pähkinäsaaressa. Sinulla on nyt kasassa ' + correct + ' pistettä. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a3").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c3").disabled = true;
		document.getElementById("d3").disabled = true;
		document.getElementById("submit3").disabled = true;
	} else if (vaarin7 || vaarin8 || vaarin9) {
		left--;
		document.getElementById('demo3').innerHTML =
			'Väärin meni. Oikea vastaus on 12.8.1323. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a3").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c3").disabled = true;
		document.getElementById("d3").disabled = true;
		document.getElementById("submit3").disabled = true;
	} else {
		document.getElementById('demo3').innerHTML =
			'Valitse vastaus ensin';
	}


}

function vastaus4() {
	let oikein = document.getElementById('a4').checked;
	let vaarin10 = document.getElementById('b4').checked;
	let vaarin11 = document.getElementById('c4').checked;
	let vaarin12 = document.getElementById('d4').checked;
	if (oikein) {
		left--;
		correct++;
		document.getElementById('demo4').innerHTML =
			'Oikea vastaus! Colosseum oli Rooman merkittävin gladiaattorinäytäntöjen tapahtumapaikka. Sinulla on nyt kasassa ' + correct + ' pistettä. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a4").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("c4").disabled = true;
		document.getElementById("d4").disabled = true;
		document.getElementById("submit4").disabled = true;
	} else if (vaarin10 || vaarin11 || vaarin12) {
		left--;
		document.getElementById('demo4').innerHTML =
			'Väärin meni. Oikea vastaus on Gladiaattorinäytöksistä. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a4").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("c4").disabled = true;
		document.getElementById("d4").disabled = true;
		document.getElementById("submit4").disabled = true;
	} else {
		document.getElementById('demo4').innerHTML =
			'Valitse vastaus ensin';
	}
}

function vastaus5() {
	let oikein = document.getElementById('c5').checked;
	let vaarin13 = document.getElementById('a5').checked;
	let vaarin14 = document.getElementById('b5').checked;
	let vaarin15 = document.getElementById('d5').checked;
	if (oikein) {
		left--;
		correct++;
		document.getElementById('demo5').innerHTML =
			'Oikea vastaus! Antiikin Ateenaa on pidetty länsimaisen kulttuurin kehtona. Sinulla on nyt kasassa ' + correct + ' pistettä. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a5").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("c5").disabled = true;
		document.getElementById("d5").disabled = true;
		document.getElementById("submit5").disabled = true;
	} else if (vaarin13 || vaarin14 || vaarin15) {
		left--;
		document.getElementById('demo5').innerHTML =
			'Väärin meni. Oikea vastaus on Ateena. Vielä ' + left + ' kysymystä jäljellä ';
		document.getElementById("a5").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("c5").disabled = true;
		document.getElementById("d5").disabled = true;
		document.getElementById("submit5").disabled = true;
	} else {
		document.getElementById('demo5').innerHTML =
			'Valitse vastaus ensin';
	}

}