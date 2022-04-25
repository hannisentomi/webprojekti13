/* Aino Hukkanen TIK22KM */

var correct = 0;


function kaupunkivastaus() {

    let kysymys1 = document.getElementsByName("kaupunki").value;
    let vastaus1 = document.getElementById("1a").value;
    

    if (kysymys1 == vastaus1) {
        correct++;
        document.getElementById("result1").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Norjan pääkaupunki on tosiaankin Oslo. Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result1").innerHTML = "Vastauksesi on väärin. Norjan pääkaupunki on Oslo. "
        return;
}
function rahayksikkovastaus() {
    let kysymys2 = document.getElementById("textbox").value;
    

    if (kysymys2 == "punta") {
        correct++;
        document.getElementById("result2").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Punta on Iso-Britannian rahayksikkö. Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result2").innerHTML = "Vastauksesi on väärin. Iso-Britannian rahayksikkö on punta."
    return;
}

function lippuvastaus() {
    let kysymys3 = document.getElementById("3").value;
    

    if (kysymys3 == "Vatikaanivaltio") {
        correct++;
        document.getElementById("result3").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Kuvassa näkyvä lippu on Vatikaanivaltion lippu.  Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result3").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä lippu on Vatikaanivaltion lippu."

}

function nahtavyysvastaus() {
    let kysymys4 = document.getElementById("4").value;
    

    if (kysymys4 == "Barcelona") {
        correct++;
        document.getElementById("result4").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Kuvassa näkyvä nähtävyys on Sagrada Familia, joka sijaitsee Barcelonassa. Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result4").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä nähtävyys on Espanjan Barcelonassa sijaitseva Sagrada Familia."

}
function riikavastaus() {
    let kysymys5 = document.getElementById("5").value;
    

    if (kysymys5 == "Latvia") {
        correct++;
        document.getElementById("result5").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Latvian pääkaunkin on Riika. Sinulla on nyt ansaittuna " + correct + "pistettä.";

    } else
        document.getElementById("result5").innerHTML = "Vastauksesi on väärin. Riika on Latvian pääkaupunki"

}



