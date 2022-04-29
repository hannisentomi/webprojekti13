/* Aino Hukkanen TIK22KM */
var correct = 0;
var left = 5;

function kaupunkivastaus() {
	let img = document.createElement("img");
	if(document.getElementById("1a").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy piste ja pöllö */
		correct++;
		left--;
		document.getElementById("result1").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Norjan pääkaupunki on tosiaankin Oslo. Sinulla on nyt ansaittuna " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/owl-dab.png"
		document.getElementById("owl1").appendChild(img);
		document.getElementById("answer1").disabled = true;
		document.getElementById("1b").disabled = true;
		document.getElementById("1c").disabled = true;
		document.getElementById("1d").disabled = true;
	} else if(document.getElementById("1b").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result1").innerHTML = "Vastauksesi on väärin. Norjan pääkaupunki on Oslo. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl1").appendChild(img);
		document.getElementById("answer1").disabled = true;
		document.getElementById("1a").disabled = true;
		document.getElementById("1c").disabled = true;
		document.getElementById("1d").disabled = true;
	} else if(document.getElementById("1c").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result1").innerHTML = "Vastauksesi on väärin. Norjan pääkaupunki on Oslo. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl1").appendChild(img);
		document.getElementById("answer1").disabled = true;
		document.getElementById("1a").disabled = true;
		document.getElementById("1b").disabled = true;
		document.getElementById("1d").disabled = true;
	} else if(document.getElementById("1d").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result1").innerHTML = "Vastauksesi on väärin. Norjan pääkaupunki on Oslo. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl1").appendChild(img);
		document.getElementById("answer1").disabled = true;
		document.getElementById("1a").disabled = true;
		document.getElementById("1b").disabled = true;
		document.getElementById("1c").disabled = true;
	} else {
        /* Tarkistetaan onko käyttäjä vastannut mitään kohtaa */
		document.getElementById("result1").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
	}
}

function rahayksikkovastaus() {
	let kysymys2 = document.getElementById("textbox").value;
	let img = document.createElement("img");

    
	if(kysymys2 == "punta" || kysymys2 == "Punta" || kysymys2 == "£") {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy piste ja pöllö */
		correct++;
		left--;
		document.getElementById("result2").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Punta on Iso-Britannian rahayksikkö. Sinulla on nyt ansaittuna " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/owl-dab.png"
		document.getElementById("owl2").appendChild(img);
		document.getElementById("textbox").disabled = true;
		document.getElementById("answer2").disabled = true;
	} else if(kysymys2 == "") {
        /* Tarkistetaan onko käyttäjä vastannut mitään kohtaa */
		document.getElementById("result2").innerHTML = "Sinun täytyy antaa vastaus kysymykseen."
		document.getElementById("textbox").disabled = false;
	} else {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--
		document.getElementById("result2").innerHTML = "Vastauksesi on väärin. Iso-Britannian rahayksikkö on punta. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl2").appendChild(img);
		document.getElementById("textbox").disabled = true;
		document.getElementById("answer2").disabled = true;
	}
}

function lippuvastaus() {
	let img = document.createElement("img");
	if(document.getElementById("3c").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy piste ja pöllö */
		correct++;
		left--;
		document.getElementById("result3").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Kuvassa näkyvä lippu on Vatikaanivaltion lippu.  Sinulla on nyt ansaittuna " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/owl-dab.png"
		document.getElementById("owl3").appendChild(img);
		document.getElementById("answer3").disabled = true;
		document.getElementById("3a").disabled = true;
		document.getElementById("3b").disabled = true;
		document.getElementById("3d").disabled = true;
	} else if(document.getElementById("3a").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result3").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä lippu on Vatikaanivaltion lippu. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl3").appendChild(img);
		document.getElementById("answer3").disabled = true;
		document.getElementById("3b").disabled = true;
		document.getElementById("3c").disabled = true;
		document.getElementById("3d").disabled = true;
	} else if(document.getElementById("3b").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result3").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä lippu on Vatikaanivaltion lippu. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl3").appendChild(img);
		document.getElementById("answer3").disabled = true;
		document.getElementById("3a").disabled = true;
		document.getElementById("3c").disabled = true;
		document.getElementById("3d").disabled = true;
	} else if(document.getElementById("3d").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result3").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä lippu on Vatikaanivaltion lippu. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl3").appendChild(img);
		document.getElementById("answer3").disabled = true;
		document.getElementById("3a").disabled = true;
		document.getElementById("3b").disabled = true;
		document.getElementById("3c").disabled = true;
	} else {
        /* Tarkistetaan onko käyttäjä vastannut mitään kohtaa */
		document.getElementById("result3").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
	}
}

function nahtavyysvastaus() {
	let img = document.createElement("img");
	if(document.getElementById("4b").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy piste ja pöllö */
		correct++;
		left--;
		document.getElementById("result4").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Kuvassa näkyvä nähtävyys on Sagrada Familia, joka sijaitsee Barcelonassa. Sinulla on nyt ansaittuna " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/owl-dab.png"
		document.getElementById("owl4").appendChild(img);
		document.getElementById("answer4").disabled = true;
		document.getElementById("4a").disabled = true;
		document.getElementById("4c").disabled = true;
		document.getElementById("4d").disabled = true;
	} else if(document.getElementById("4a").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result4").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä nähtävyys on Espanjan Barcelonassa sijaitseva Sagrada Familia. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl4").appendChild(img);
		document.getElementById("answer4").disabled = true;
		document.getElementById("4b").disabled = true;
		document.getElementById("4c").disabled = true;
		document.getElementById("4d").disabled = true;
	} else if(document.getElementById("4c").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result4").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä nähtävyys on Espanjan Barcelonassa sijaitseva Sagrada Familia. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl4").appendChild(img);
		document.getElementById("answer4").disabled = true;
		document.getElementById("4a").disabled = true;
		document.getElementById("4b").disabled = true;
		document.getElementById("4d").disabled = true;
	} else if(document.getElementById("4d").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result4").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä nähtävyys on Espanjan Barcelonassa sijaitseva Sagrada Familia. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl4").appendChild(img);
		document.getElementById("answer4").disabled = true;
		document.getElementById("4a").disabled = true;
		document.getElementById("4b").disabled = true;
		document.getElementById("4c").disabled = true;
	} else {
        /* Tarkistetaan onko käyttäjä vastannut mitään kohtaa */
		document.getElementById("result4").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
	}
}

function riikavastaus() {
	let img = document.createElement("img");
	if(document.getElementById("5a").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy piste ja pöllö */
		correct++;
		left--;
		document.getElementById("result5").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Latvian pääkaupunki on Riika. Sinulla on nyt ansaittuna " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/owl-dab.png"
		document.getElementById("owl5").appendChild(img);
		document.getElementById("answer5").disabled = true;
		document.getElementById("5b").disabled = true;
		document.getElementById("5c").disabled = true;
		document.getElementById("5d").disabled = true;
	} else if(document.getElementById("5b").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result5").innerHTML = "Vastauksesi on väärin. Riika on Latvian pääkaupunki. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl5").appendChild(img);
		document.getElementById("answer5").disabled = true;
		document.getElementById("5a").disabled = true;
		document.getElementById("5c").disabled = true;
		document.getElementById("5d").disabled = true;
	} else if(document.getElementById("5c").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result5").innerHTML = "Vastauksesi on väärin. Riika on Latvian pääkaupunki. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl5").appendChild(img);
		document.getElementById("answer5").disabled = true;
		document.getElementById("5a").disabled = true;
		document.getElementById("5b").disabled = true;
		document.getElementById("5d").disabled = true;
	} else if(document.getElementById("5d").checked) {
        /* Tarkistetaan onko vastaus oikea vastaus ja ilmestyy kala */
		left--;
		document.getElementById("result5").innerHTML = "Vastauksesi on väärin. Riika on Latvian pääkaupunki. Sinulla on nyt  " + correct + " pistettä. Jäljellä on " + left + " kysymystä.";
		img.src = "../images/hukkanen_images/sad.png"
		document.getElementById("owl5").appendChild(img);
		document.getElementById("answer5").disabled = true;
		document.getElementById("5a").disabled = true;
		document.getElementById("5b").disabled = true;
		document.getElementById("5c").disabled = true;
	} else {
        /* Tarkistetaan onko käyttäjä vastannut mitään kohtaa */
		document.getElementById("result5").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
	}
        /* Tarkistetaan pisteet. Annetaan haluttu ilmoitus pistemäärän perusteella. */
	var totalscore = ["Voi itku, et saanut yhtään pistettä tai pöllöä. Joudut kertaamaan vielä maantietoa.", "Sait yhden pisteen ja pöllön. Se on ihan hyvä tulos, mutta sinun kannattaisi vielä kerrata maantietoa.", "Sait kaksi pistettä ja kaksi pöllöä. Se on ihan hyvä tulos, mutta sinun kannattaisi vielä kerrata maantietoa.", "Sait kolme pistettä ja kolme pöllöä. Hienoa työtä! Jotain asioita kuitenkin kannattaa vielä kerrata.", "Sait neljä pistettä ja pöllöä, mahtava saldo! Olet hyvä maantiedossa, jatka samaan malliin!", "Sait kaikki kysymykset oikein, täydet pisteet sekä kaikki viisi pöllöä! Taidat olla haka maantiedossa. Jatka samaan malliin!"];
	if(correct == 0) {
		document.getElementById("finalscore").innerHTML = totalscore[0];
	}
	if(correct == 1) {
		document.getElementById("finalscore").innerHTML = totalscore[1];
	}
	if(correct == 2) {
		document.getElementById("finalscore").innerHTML = totalscore[2];
	}
	if(correct == 3) {
		document.getElementById("finalscore").innerHTML = totalscore[3];
	}
	if(correct == 4) {
		document.getElementById("finalscore").innerHTML = totalscore[4];
	}
	if(correct == 5) {
		document.getElementById("finalscore").innerHTML = totalscore[5];
	}
}