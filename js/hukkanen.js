/* Aino Hukkanen TIK22KM */

var correct = 0;


function kaupunkivastaus() {

    
    if (document.getElementById("1a").checked) {
        correct++;
        
        document.getElementById("result1").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Norjan pääkaupunki on tosiaankin Oslo. Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result1").innerHTML = "Vastauksesi on väärin. Norjan pääkaupunki on Oslo. Sinulla on nyt  " + correct + " pistettä."
       
        return;
}
function rahayksikkovastaus() {
    let kysymys2 = document.getElementById("textbox").value;
    

    if (kysymys2 == "punta" || kysymys2 == "Punta" || kysymys2 == "£") {
        correct++;
        document.getElementById("result2").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Punta on Iso-Britannian rahayksikkö. Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result2").innerHTML = "Vastauksesi on väärin. Iso-Britannian rahayksikkö on punta. Sinulla on nyt  " + correct + " pistettä."
    return;
}

function lippuvastaus() {
    

    if (document.getElementById("3c").checked) {
        correct++;
        document.getElementById("result3").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Kuvassa näkyvä lippu on Vatikaanivaltion lippu.  Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result3").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä lippu on Vatikaanivaltion lippu. Sinulla on nyt  " + correct + " pistettä."

}

function nahtavyysvastaus() {
    

    if (document.getElementById("4b").checked) {
        correct++;
        document.getElementById("result4").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Kuvassa näkyvä nähtävyys on Sagrada Familia, joka sijaitsee Barcelonassa. Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result4").innerHTML = "Vastauksesi on väärin. Kuvassa näkyvä nähtävyys on Espanjan Barcelonassa sijaitseva Sagrada Familia. Sinulla on nyt  " + correct + " pistettä."

}
function riikavastaus() {
    

    if (document.getElementById("5a").checked) {
        correct++;
        document.getElementById("result5").innerHTML = "Vastauksesi on oikein, onneksi olkoon! Latvian pääkaupunki on Riika. Sinulla on nyt ansaittuna " + correct + " pistettä.";

    } else
        document.getElementById("result5").innerHTML = "Vastauksesi on väärin. Riika on Latvian pääkaupunki. Sinulla on nyt  " + correct + " pistettä."

}



