function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tehtava1Vastaus = "";
let tehtava2Vastaus = "";
let tehtava3Vastaus = "";
let tehtava4Vastaus = "";
let tehtava5Vastaus = "";
let tehtava6Vastaus = "";
let pisteet = 0;

let tehtava1AnnettuVastaus = "";
let tehtava2AnnettuVastaus = "";
let tehtava3AnnettuVastaus = "";
let tehtava4AnnettuVastaus = "";
let tehtava5AnnettuVastaus = "";
let tehtava6AnnettuVastaus = "";


function asetaKysymykset() {
    pisteet = 0;

    for (let i = 1; i < 7; i++) {
        let ekaOsa = "teht" + i + "EnsimmainenOsa";
        let tokaOsa = "teht" + i + "ToinenOsa";

        let ekaNumero = getRndInteger(1, 10);
        let tokaNumero = getRndInteger(1, 10);
        document.getElementById(ekaOsa).innerHTML = ekaNumero;
        document.getElementById(tokaOsa).innerHTML = tokaNumero;

        if (i == 1) {

            let oikeaVastaus = getRndInteger(1, 3);
            if (oikeaVastaus == 1) {
                tehtava1Vastaus = "a";
                document.getElementById("vastaus1a").value = "correct";
                document.getElementById("vastaus1a").innerHTML = Number(ekaNumero) + Number(tokaNumero);
                document.getElementById("vastaus1b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus1c").innerHTML = getRndInteger(1, 30);

            }
            if (oikeaVastaus == 2) {
                tehtava1Vastaus = "b";
                document.getElementById("vastaus1b").innerHTML = Number(ekaNumero) + Number(tokaNumero);
                document.getElementById("vastaus1a").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus1c").innerHTML = getRndInteger(1, 30);

            }
            if (oikeaVastaus == 3) {
                tehtava1Vastaus = "c";
                document.getElementById("vastaus1c").innerHTML = Number(ekaNumero) + Number(tokaNumero);
                document.getElementById("vastaus1b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus1a").innerHTML = getRndInteger(1, 30);

            }
        }
        if (i == 2) {
            let oikeaVastaus = getRndInteger(1, 3);
            if (oikeaVastaus == 1) {
                tehtava2Vastaus = "a";
                document.getElementById("vastaus2a").innerHTML = Number(ekaNumero) - Number(tokaNumero);
                document.getElementById("vastaus2b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus2c").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 2) {
                tehtava2Vastaus = "b";
                document.getElementById("vastaus2b").innerHTML = Number(ekaNumero) - Number(tokaNumero);
                document.getElementById("vastaus2a").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus2c").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 3) {
                tehtava2Vastaus = "c";
                document.getElementById("vastaus2c").innerHTML = Number(ekaNumero) - Number(tokaNumero);
                document.getElementById("vastaus2b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus2a").innerHTML = getRndInteger(1, 30);
            }
        }
        if (i == 3) {
            let oikeaVastaus = getRndInteger(1, 3);
            if (oikeaVastaus == 1) {
                tehtava3Vastaus = "a";
                document.getElementById("vastaus3a").innerHTML = Number(ekaNumero) * Number(tokaNumero)
                document.getElementById("vastaus3b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus3c").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 2) {
                tehtava3Vastaus = "b";
                document.getElementById("vastaus3b").innerHTML = Number(ekaNumero) * Number(tokaNumero)
                document.getElementById("vastaus3a").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus3c").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 3) {
                tehtava3Vastaus = "c";
                document.getElementById("vastaus3c").innerHTML = Number(ekaNumero) * Number(tokaNumero)
                document.getElementById("vastaus3b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus3a").innerHTML = getRndInteger(1, 30);
            }
        }
        if (i == 4) {
            let oikeaVastaus = getRndInteger(1, 3);
            if (oikeaVastaus == 1) {
                tehtava4Vastaus = "a";
                document.getElementById("vastaus4a").innerHTML = Number(ekaNumero) / Number(tokaNumero)
                document.getElementById("vastaus4b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus4c").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 2) {
                tehtava4Vastaus = "b";
                document.getElementById("vastaus4b").innerHTML = Number(ekaNumero) / Number(tokaNumero)
                document.getElementById("vastaus4c").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus4a").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 3) {
                tehtava4Vastaus = "c";
                document.getElementById("vastaus4c").innerHTML = Number(ekaNumero) / Number(tokaNumero)
                document.getElementById("vastaus4b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus4a").innerHTML = getRndInteger(1, 30);
            }
        }
        if (i == 5) {
            let oikeaVastaus = getRndInteger(1, 3);
            if (oikeaVastaus == 1) {
                tehtava5Vastaus = "a";
                document.getElementById("vastaus5a").innerHTML = Number(ekaNumero) + Number(tokaNumero)
                document.getElementById("vastaus5b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus5c").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 2) {
                tehtava5Vastaus = "b";
                document.getElementById("vastaus5b").innerHTML = Number(ekaNumero) + Number(tokaNumero)
                document.getElementById("vastaus5a").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus5c").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 3) {
                tehtava5Vastaus = "c";
                document.getElementById("vastaus5c").innerHTML = Number(ekaNumero) + Number(tokaNumero)
                document.getElementById("vastaus5b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus5a").innerHTML = getRndInteger(1, 30);
            }
        }
        if (i == 6) {
            let oikeaVastaus = getRndInteger(1, 3);
            if (oikeaVastaus == 1) {
                tehtava6Vastaus = "a";
                document.getElementById("vastaus6a").innerHTML = Number(ekaNumero) - Number(tokaNumero)
                document.getElementById("vastaus6b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus6c").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 2) {
                tehtava6Vastaus = "b";
                document.getElementById("vastaus6b").innerHTML = Number(ekaNumero) - Number(tokaNumero)
                document.getElementById("vastaus6c").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus6a").innerHTML = getRndInteger(1, 30);
            }
            if (oikeaVastaus == 3) {
                tehtava6Vastaus = "c";
                document.getElementById("vastaus6c").innerHTML = Number(ekaNumero) - Number(tokaNumero)
                document.getElementById("vastaus6b").innerHTML = getRndInteger(1, 30);
                document.getElementById("vastaus6a").innerHTML = getRndInteger(1, 30);
            }
        }
    }
}

function tarkista() {

    

    pisteet = 0;
    if (tehtava1AnnettuVastaus == tehtava1Vastaus) {
        pisteet++
    }
    if (tehtava2AnnettuVastaus == tehtava2Vastaus) {
        pisteet++
    }
    if (tehtava3AnnettuVastaus == tehtava3Vastaus) {
        pisteet++
    }
    if (tehtava4AnnettuVastaus == tehtava4Vastaus) {
        pisteet++
    }
    if (tehtava5AnnettuVastaus == tehtava5Vastaus) {
        pisteet++
    }

    document.getElementById("pisteet").innerHTML = "Olet saanut " + pisteet + " pistettä :)";

    
    let img = document.createElement("img");

    if(pisteet == 5){
        document.getElementById("pisteet").innerHTML = "Sait täydet pisteet! Hyvää työtä :)";
        let img = document.createElement("img");
        img.src = '../images/hanninen_images/6.gif'
        document.getElementById("pisteet").appendChild(img);

    }
    if(pisteet == 1){
        img.src = '../images/hanninen_images/1.gif'
        document.getElementById("pisteet").appendChild(img);
    }
    if(pisteet == 2){
        img.src = '../images/hanninen_images/3.gif'
        document.getElementById("pisteet").appendChild(img);
    }
    if(pisteet == 3){
        img.src = '../images/hanninen_images/4.gif'
        document.getElementById("pisteet").appendChild(img);
    }
    if(pisteet == 4){
        img.src = '../images/hanninen_images/5.gif'
        document.getElementById("pisteet").appendChild(img);
    }
}

function asetaVastaus(tehtävä, vastaus) {
    if (tehtävä == 1) {
        tehtava1AnnettuVastaus = vastaus;
    }
    if (tehtävä == 2) {
        tehtava2AnnettuVastaus = vastaus;
    }
    if (tehtävä == 3) {
        tehtava3AnnettuVastaus = vastaus;
    }
    if (tehtävä == 4) {
        tehtava4AnnettuVastaus = vastaus;
    }
    if (tehtävä == 5) {
        tehtava5AnnettuVastaus = vastaus;
    }
    if (tehtävä == 6) {
        tehtava6AnnettuVastaus = vastaus;
    }

}