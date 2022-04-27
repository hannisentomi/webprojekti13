/* Aino Hukkanen TIK22KM */

var correct = 0;


function kaupunkivastaus() {

    let img = document.createElement("img");

    if (document.getElementById("1a").checked) {
        correct++;
        
        document.getElementById("result1").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Norjan pääkaupunki on tosiaankin Oslo. Sinulla on nyt ansaittuna " + correct + " pistettä.";
        img.src = "../images/hukkanen_images/owl-dab.png"
        document.getElementById("result1").appendChild(img);

    } else if (document.getElementById("1b").checked) {
        document.getElementById("result1").innerHTML = "Vastauksesi on väärin. Norjan pääkaupunki on Oslo. Sinulla on nyt  " + correct + " pistettä."

    } else if (document.getElementById("1c").checked) {
            document.getElementById("result1").innerHTML = "Vastauksesi on väärin. Norjan pääkaupunki on Oslo. Sinulla on nyt  " + correct + " pistettä."
    }
    else if (document.getElementById("1d").checked) {
        document.getElementById("result1").innerHTML = "Vastauksesi on väärin. Norjan pääkaupunki on Oslo. Sinulla on nyt  " + correct + " pistettä."
    } else {
        document.getElementById("result1").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
    }
    }


function rahayksikkovastaus() {
    let kysymys2 = document.getElementById("textbox").value;
    let img = document.createElement("img");
    

    if (kysymys2 == "punta" || kysymys2 == "Punta" || kysymys2 == "£") {
        correct++;
        document.getElementById("result2").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Punta on Iso-Britannian rahayksikkö. Sinulla on nyt ansaittuna " + correct + " pistettä.";
        img.src = "../images/hukkanen_images/owl-dab.png"
        document.getElementById("result2").appendChild(img);
    } else if (kysymys2 == "") {
        document.getElementById("result2").innerHTML = "Sinun täytyy antaa vastaus."
        }
     else {
        document.getElementById("result2").innerHTML = "Vastauksesi on väärin. Iso-Britannian rahayksikkö on punta. Sinulla on nyt  " + correct + " pistettä."
    }
}

function lippuvastaus() {
    let img = document.createElement("img");

    if (document.getElementById("3c").checked) {
        correct++;
        document.getElementById("result3").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Kuvassa näkyvä lippu on Vatikaanivaltion lippu.  Sinulla on nyt ansaittuna " + correct + " pistettä.";
        img.src = "../images/hukkanen_images/owl-dab.png"
        document.getElementById("result3").appendChild(img);
    } else if (document.getElementById("3a").checked) {
        document.getElementById("result3").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä lippu on Vatikaanivaltion lippu. Sinulla on nyt  " + correct + " pistettä."
    } else if (document.getElementById("3b").checked) {
        document.getElementById("result3").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä lippu on Vatikaanivaltion lippu. Sinulla on nyt  " + correct + " pistettä."
    } else if (document.getElementById("3d").checked) {
        document.getElementById("result3").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä lippu on Vatikaanivaltion lippu. Sinulla on nyt  " + correct + " pistettä."
    } else {
        document.getElementById("result3").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
    }
}

function nahtavyysvastaus() {
    let img = document.createElement("img");

    if (document.getElementById("4b").checked) {
        correct++;
        document.getElementById("result4").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Kuvassa näkyvä nähtävyys on Sagrada Familia, joka sijaitsee Barcelonassa. Sinulla on nyt ansaittuna " + correct + " pistettä.";
        img.src = "../images/hukkanen_images/owl-dab.png"
        document.getElementById("result4").appendChild(img);
    } else if (document.getElementById("4a").checked) {
        document.getElementById("result4").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä nähtävyys on Espanjan Barcelonassa sijaitseva Sagrada Familia. Sinulla on nyt  " + correct + " pistettä."
    } else if (document.getElementById("4c").checked) {
        document.getElementById("result4").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä nähtävyys on Espanjan Barcelonassa sijaitseva Sagrada Familia. Sinulla on nyt  " + correct + " pistettä."
    } else if (document.getElementById("4d").checked) {
        document.getElementById("result4").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä nähtävyys on Espanjan Barcelonassa sijaitseva Sagrada Familia. Sinulla on nyt  " + correct + " pistettä."
    } else {
        document.getElementById("result4").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
    }
}
function riikavastaus() {
    let img = document.createElement("img");

    if (document.getElementById("5a").checked) {
        correct++;
        document.getElementById("result5").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Latvian pääkaupunki on Riika. Sinulla on nyt ansaittuna " + correct + " pistettä.";
        img.src = "../images/hukkanen_images/owl-dab.png"
        document.getElementById("result5").appendChild(img);
    } else if (document.getElementById("5b").checked) {
        document.getElementById("result5").innerHTML = "Vastauksesi on väärin. Riika on Latvian pääkaupunki. Sinulla on nyt  " + correct + " pistettä."
    } else if (document.getElementById("5c").checked) {
        document.getElementById("result5").innerHTML = "Vastauksesi on väärin. Riika on Latvian pääkaupunki. Sinulla on nyt  " + correct + " pistettä."
    } else if (document.getElementById("5d").checked) {
        document.getElementById("result5").innerHTML = "Vastauksesi on väärin. Riika on Latvian pääkaupunki. Sinulla on nyt  " + correct + " pistettä."
    } else {
        document.getElementById("result5").innerHTML = "Sinun täytyy valita joku vaihtoehdoista."
    }


