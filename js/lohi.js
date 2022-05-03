/* Minna Lohi TIK22KM */

//muuttujat pistelaskuriin eri luokka-asteille /näkyvyysalue koko sivu
var score = 0;
var score1 = 0;
var score2 = 0;
//muuttujat jäljellä oleviin kysymyksiin eri luokka-asteille/ näkyvyysalue koko sivu
var left = 5;
var left1 = 5;
var left2 = 5;

function function1() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd21 = document.getElementById("1");
    let rd22 = document.getElementById("2");
    let rd23 = document.getElementById("3");
    let rd24 = document.getElementById("4");

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti.
    if (rd24.checked == true) {
        score++;
        left--;
        document.getElementById("lintu").innerHTML = `KYL-LÄ! TÄ-MÄ LIN-TU ON TA-LI-TI-AI-NEN. TIE-SIT-KÖ, ET-TÄ TA-LI-TI-AI-SEL-LA VOI OL-LA JO-PA KYM-ME-NEN POI-KAS-TA.`;//https://www.tunturisusi.com/tiaiset

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("lintu").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd21.checked == true | rd22.checked == true || rd23.checked == true) {
        left--;
        document.getElementById("lintu").innerHTML = `HUPS, VÄÄ-RIN ME-NI. KU-VAN LIN-TU ON TA-LI-TI-AI-NEN.`;

        //Muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("lintu").style.backgroundColor = 'red';
    }
    //Jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("lintu").innerHTML = `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
        return;

    }
    //Tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos").innerHTML = "PIS-TE-TI-LAN-NE: " + score + " / 5";
    document.getElementById("lintu").disabled = true;
    document.getElementById("left").innerHTML = "KY-SY-MYK-SI-Ä JÄL-JEL-LÄ: " + left + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left == 0) {
        document.getElementById("onnittelut1").innerHTML = " Tulos = " + score + " pistettä.";
    }

    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("lintu");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}

function function2() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd25 = document.getElementById("5");
    let rd26 = document.getElementById("6");
    let rd27 = document.getElementById("7");
    let rd28 = document.getElementById("8");
    let rd29 = document.getElementById("9");

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (rd27.checked == true) {
        score++;
        left--;
        document.getElementById("kala").innerHTML = `OI-KEIN! TIE-SIT-KÖ, ET-TÄ HAU-EL-LA VOI OL-LA SEIT-SE-MÄN-SA-TAA HAM-MAS-TA.`;//https://www.jarviwiki.fi/wiki/Hauki;

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("kala").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd25.checked == true | rd26.checked == true | rd28.checked == true | rd29.checked == true) {
        document.getElementById("kala").innerHTML = "EI AI-VAN. KU-VAS-SA ON HAU-KI."
        left--;

        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("kala").style.backgroundColor = 'red';
    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("kala").innerHTML = `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
        return;

    }//tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos2").innerHTML = "PIS-TE-TI-LAN-NE: " + score + " / 5";
    document.getElementById("kala").disabled = true;
    document.getElementById("left2").innerHTML = "KY-SY-MYK-SI-Ä JÄL-JEL-LÄ: " + left + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left == 0) {
        document.getElementById("onnittelut2").innerHTML = " Tulos = " + score + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("kala");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}

function function3() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd30 = document.getElementById("10");
    let rd31 = document.getElementById("11");
    let rd32 = document.getElementById("12");
    let rd33 = document.getElementById("13");

    if (rd30.checked == true) {//Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
        score++;
        left--;
        document.getElementById("perhonen").innerHTML = `OI-KEIN. SEN TOU-KAT SYÖ-VÄT VAIN NOK-KO-SEN-LEH-TI-Ä.`;//https://www.google.com/search?rlz=1C1VDKB_fiFI978FI978&q=Mit%C3%A4+nokkosperhonen+sy%C3%B6&sa=X&ved=2ahUKEwjYuZm3jrf3AhVBxIsKHcArDdQQ1QJ6BAhHEAE&biw=1536&bih=754&dpr=1.25

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("perhonen").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd31.checked == true | rd32.checked == true | rd33.checked == true) {
        document.getElementById("perhonen").innerHTML = `HUPS, KU-VAS-SA ON NOK-KOS-PER-HO-NEN.`;
        left--;
        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("perhonen").style.backgroundColor = 'red';
    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("perhonen").innerHTML = `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
        return;
    }
    //tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos3").innerHTML = "PIS-TE-TI-LAN-NE: " + score + " / 5";
    document.getElementById("perhonen").disabled = true;
    document.getElementById("left3").innerHTML = "KY-SY-MYK-SI-Ä JÄL-JEL-LÄ: " + left + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left == 0) {
        document.getElementById("onnittelut3").innerHTML = " Tulos = " + score + " pistettä.";
    }

    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("perhonen");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}

function function4() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd34 = document.getElementById("15");
    let rd35 = document.getElementById("16");
    let rd36 = document.getElementById("17");
    let rd37 = document.getElementById("18");
    let rd38 = document.getElementById("19");

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (rd35.checked == true) {
        score++;
        left--;
        document.getElementById("eläin").innerHTML = `OI-KEIN. AH-MA ON SAA-NUT NI-MEN-SÄ RUO-KAI-LU-TA-VAS-TAAN.`;//https://www.suurpedot.fi/lajit/ahma.html

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("eläin").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd34.checked == true | rd36.checked == true | rd37.checked == true | rd38.checked == true) {
        document.getElementById("eläin").innerHTML = `HUPS, KU-VAS-SA ON AH-MA.`;
        left--;

        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("eläin").style.backgroundColor = 'red';
    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("eläin").innerHTML = `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
        return;
    }//tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos4").innerHTML = "PIS-TE-TI-LAN-NE: " + score + " / 5";
    document.getElementById("eläin").disabled = true;
    document.getElementById("left4").innerHTML = "KY-SY-MYK-SI-Ä JÄL-JEL-LÄ: " + left + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left == 0) {
        document.getElementById("onnittelut4").innerHTML = " Tulos = " + score + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("eläin");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}

function function5() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd39 = document.getElementById("20");
    let rd40 = document.getElementById("21");
    let rd41 = document.getElementById("22");
    let rd42 = document.getElementById("23");

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti.
    if (rd40.checked == true) {
        score++;
        left--;
        document.getElementById("kasvi").innerHTML = `OI-KEIN. TIE-SIT-KÖ, ET-TÄ VAL-KO-VUOK-KO-JA EI SAA POI-MI-A MYYN-TIIN.`;//https://yle.fi/uutiset/3-6090738

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("kasvi").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd39.checked == true | rd41.checked == true | rd42.checked == true) {
        document.getElementById("kasvi").innerHTML = `VÄÄ-RIN ME-NI, KU-VAS-SA ON VAL-KO-VUOK-KO.`;
        left--;
        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("kasvi").style.backgroundColor = 'red';
    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("kasvi").innerHTML = `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
        return;
    }
    //tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos5").innerHTML = "PIS-TE-TI-LAN-NE: " + score + " / 5";
    document.getElementById("kasvi").disabled = true;
    document.getElementById("left5").innerHTML = "KY-SY-MYK-SI-Ä JÄL-JEL-LÄ: " + left + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left == 0) {
        document.getElementById("onnittelut5").innerHTML = " Tulos = " + score + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("kasvi");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;

    }
}

function function6() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd1 = document.getElementById("mesimarja");
    let rd2 = document.getElementById("karhunvatukka");
    let rd3 = document.getElementById("lillukka");
    let rd4 = document.getElementById("mustavadelma");

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (rd2.checked == true) {
        score2++;
        left1--;
        document.getElementById("marja").innerHTML = "Hyvin meni! Karhunvatukka on herkullinen ja mehukas marja, joka soveltuu ihanteellisesti  terveellisiin juomiin ja smoothieihin, sekä sellaisenaan nautittavaksi jogurtin kera tai jälkiruuissa. Voit syödä karhunvatukoita myös salaateissa ja muissa kylmissä resepteissä."; //https://askelterveyteen.com/7-syyta-syoda-karhunvatukoita/"

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("marja").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd1.checked == true | rd3.checked == true | rd4.checked == true) {
        document.getElementById("marja").innerHTML = "Voi ei, vastasit väärin, kuvan marja on karhunvatukka.";
        left1--;
        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("marja").style.backgroundColor = 'red';

    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("marja").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;
    }//tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos6").innerHTML = "Pistetilanne: " + score2 + " / 5";
    document.getElementById("marja").disabled = true;
    document.getElementById("left6").innerHTML = "Kysymyksiä jäljellä: " + left1 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left1 == 0) {
        document.getElementById("onnittelut6").innerHTML = " Tulos = " + score2 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("marja");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function7() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd5 = document.getElementById("tammi");
    let rd6 = document.getElementById("paju");
    let rd7 = document.getElementById("leppä");
    let rd8 = document.getElementById("haapa");

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (rd7.checked == true) {
        score2++;
        left1--;
        document.getElementById("puu").innerHTML = "Aivan oikein. Tiesitkö, että leppä sopii erityisen hyvin jatkuvalämmitteisen saunan ja savusaunan lämmitykseen sekä helloihin ja avotakkoihin."; //"https://savonvoima.fi/miksi-koivua-pidetaan-parhaana-polttopuuna/"


        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("puu").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd5.checked == true | rd6.checked == true | rd8.checked == true) {
        document.getElementById("puu").innerHTML = "Nyt ei mennyt ihan putkeen, kuvan puu on leppä.";
        left1--;

        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("puu").style.backgroundColor = 'red';
    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("tulos").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;
    }
    //tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos7").innerHTML = "Pistetilanne: " + score2 + " / 5";
    document.getElementById("puu").disabled = true;
    document.getElementById("left7").innerHTML = "Kysymyksiä jäljellä: " + left1 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left1 == 0) {
        document.getElementById("onnittelut7").innerHTML = " Tulos = " + score2 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("puu");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function8() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd9 = document.getElementById("limanuljaska");
    let rd10 = document.getElementById("hitutötterö");
    let rd11 = document.getElementById("korvasieni");
    let rd12 = document.getElementById("typäskääpä");
    let rd13 = document.getElementById("outorisakas");

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (rd11.checked == true) {
        score2++;
        left1--;
        document.getElementById("sieni").innerHTML = "Vastauksesi on oikein. Korvasieni on helppo tuntea,sillä keväällä ei juuri muita sieniä kasva. Se viihtyy parhaiten hiekkamaalla, vanhoilla hakkuualueilla. Ruskea muhkura voi olla ensin vaikea havaita, mutta kun silmä tottuu, niin kas niitähän on joka paikassa! Tämä raakana myrkyllinen ruokasieni pitää esikäsitellä huolellisesti. " +
            "Suuret korvasienet vastaavat kooltaan lapsen aivoja, ja useamman sienen rypäs voi ylittää aikuisen ihmisen aivojen koon.Korvasieni on alkukesän aarre. Sen satokausi kestää vain muutaman viikon, joten herkku on poimittava oikeaan aikaan. Satokausi riippuu kevään lämpötilasta, pohjoisessa korvasieniä saatetaan kerätä vielä heinäkuussakin. Nyrkkisääntönä on, että korvasieniä kannattaa lähteä etsimään, kun hiirenkorvat ilmestyvät koivuihin."; //"https://yle.fi/aihe/artikkeli/2019/04/26/myrkky-vai-herkku-korvasieni-jakaa-mielipiteet"

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("sieni").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd9.checked == true | rd10.checked == true | rd12.checked == true | rd13.checked == true) {
        document.getElementById("sieni").innerHTML = "Väärin meni, kuvan sieni on korvasieni.";
        left1--;
        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("sieni").style.backgroundColor = 'red';
    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("sieni").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;
    }
    //tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos8").innerHTML = "Pistetilanne: " + score2 + " / 5";
    document.getElementById("sieni").disabled = true;
    document.getElementById("left8").innerHTML = "Kysymyksiä jäljellä: " + left1 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left1 == 0) {
        document.getElementById("onnittelut8").innerHTML = " Tulos = " + score2 + " pistettä.";
    }

    var inputs = document.getElementsByName('sieni');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function9() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd14 = document.getElementById("räyskä");
    let rd15 = document.getElementById("mustaselkälokki");
    let rd16 = document.getElementById("merilokki");
    let rd17 = document.getElementById("meriharakka");
    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (rd17.checked == true) {
        score2++;
        left1--;
        document.getElementById("lintu1").innerHTML = "Vastauksesi on oikein. Meriharakka on melkein variksen kokoinen, tanakka kahlaajalintu, jonka pää ja selkäpuoli ovat mustat, vatsa valkoinen. Räikeänpunaiset nokka ja jalat näkyvät kauas. Ääni on kimeä ja kiihkeä”pii, biik” ja ”ko-biik ko-biik…" +
            "Meriharakka on yleinen koko merialueella, sisämaassa pesivänä hyvin harvinainen mutta keväällä säännöllinen läpimuuttaja Jäämeren äärelle. Linnut lähtevät heinä-syyskuussa Länsi-Euroopan rannikoille ja palaavat valtaosin huhtikuussa. ";// " https://yle.fi/aihe/artikkeli/2017/05/16/rantojen-ja-kosteikkojen-kahlaajia-meriharakka"

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("lintu1").style.backgroundColor = 'green';


        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd14.checked == true | rd15.checked == true | rd16.checked == true) {
        document.getElementById("lintu1").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa on meriharakka.";
        left1--;

        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("lintu1").style.backgroundColor = 'red';
    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("lintu1").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;
    }//tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos9").innerHTML = "Pistetilanne: " + score2 + " / 5";
    document.getElementById("lintu1").disabled = true;
    document.getElementById("left9").innerHTML = "Kysymyksiä jäljellä: " + left1 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left1 == 0) {
        document.getElementById("onnittelut9").innerHTML = " Tulos = " + score2 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName('lintu1');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function10() {
    // radiobuttonien muuttujat/ näkyvyysalue funktion sisällä.
    let rd18 = document.getElementById("kangaskäärme");
    let rd19 = document.getElementById("rantakäärme");
    let rd20 = document.getElementById("kyy");

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (rd19.checked == true) {
        score2++;
        left1--;
        document.getElementById("käärme").innerHTML = "Vastauksesi on oikein. Nimensä mukaisesti rantakäärme viihtyy vesien äärellä. Se on varsin hyvä uimari, joka pystyy sukeltamaan jopa puoli tuntia kerrallaan. Päiväaktiivinen rantakäärme on ihmiselle vaaraton. ";//  https://www.apu.fi/artikkelit/vaaraton-rantakaarme-on-todellinen-hyotykaarme-nain-erotat-sen-kyysta

        //Muuttaa oikean vastauksen taustavärin vihreäksi.
        document.getElementById("käärme").style.backgroundColor = 'green';

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (rd18.checked == true | rd20.checked == true) {
        document.getElementById("käärme").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa makoilee rantakäärme.";
        left1--;

        //muuttaa väärän vastauksen taustavärin punaiseksi.
        document.getElementById("käärme").style.backgroundColor = 'red';
    }
    //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    else {
        document.getElementById("käärme").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;
    }

    //tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos10").innerHTML = "Pistetilanne: " + score2 + " / 5";
    document.getElementById("käärme").disabled = true;
    document.getElementById("left10").innerHTML = "Kysymyksiä jäljellä: " + left1 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left1 == 0) {
        document.getElementById("onnittelut10").innerHTML = " Tulos = " + score2 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName('käärme');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}
function function11() {

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (document.getElementById('Kissankello').checked) {
        score1++;
        left2--;
        document.getElementById("kukka3").innerHTML =
            " Aivan oikein.  Kuvassa on kissankello. Rakkaalla lapsella on monta nimeä: sinisissä kellokukissa on nähty milloin minkäkin eläimen kello tai hattu, kissan lisäksi ainakin harakan, koiran, kurjen, lampaan, lehmän, pääskysen, poron ja variksen. Kissankello on lempinimensä ansainnut, paitsi kauneudellaan, myös yleisyydellään ja laajalla levinneisyydellään.";//https://luontoportti.com/t/56/kissankello

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById('Harakankello').checked) {
        document.getElementById("error").innerHTML =
            " Väärin meni! Kuvassa on kissankello. ";
        left2--;
        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById('Kurjenkello').checked) {
        document.getElementById("error").innerHTML =
            " Ei mennyt ihan oikein. Kuvassa on kissankello. ";
        left2--;
        //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    } else {
        document.getElementById("error").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;

    }//tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos11").innerHTML = "Pistetilanne:  " + score1 + " / 5";
    document.getElementById("kukka3").disabled = true;
    document.getElementById("left11").innerHTML = "Kysymyksiä jäljellä: " + left2 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left2 == 0) {
        document.getElementById("onnittelut11").innerHTML = " Tulos = " + score1 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName('kukka');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}

function function12() {

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti.
    if (document.getElementById('Harmaalokki').checked) {
        score1++;
        left2--;

        document.getElementById("lintu3").innerHTML =
            " Täsmälleen oikea vastaus.  Harmaalokilla on neljä ikäluokkaa ja useita pukuja. Toisesta talvesta lähtien sillä on harmaa selkä. Jalat ovat vaaleanpunaiset (vanha lintu) tai ruskeanharmaat (nuori lintu). Nokka on vaaleakärkisesti keltainen ja alanokan kulmassa on punainen täplä (vanha lintu), tai nokka on punertavatyvisesti tumma (nuori lintu). Silmän värikalvo (iiris) on vaaleankeltainen (vanha lintu) tai tummanruskea-vaaleankeltainen (nuori lintu). Alanokan kulman punainen täplä kehittyy kolmantena talvena.";//https://luontoportti.com/t/495/harmaalokki

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Kalalokki").checked) {
        document.getElementById("error2").innerHTML =
            " Väärin arvattu! Tämä lintu on harmaalokki.";
        left2--;

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Merilokki").checked) {
        document.getElementById("error2").innerHTML =
            " Väärin arvattu! Tämä lintu on harmaalokki.";
        left2--;

        //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:  
    } else {
        document.getElementById("error2").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;
    }//tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos12").innerHTML = "Pistetilanne:  " + score1 + " / 5";
    document.getElementById("lintu3").disabled = true;
    document.getElementById("left12").innerHTML = "Kysymyksiä jäljellä: " + left2 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left2 == 0) {
        document.getElementById("onnittelut12").innerHTML = " Tulos = " + score1 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("lintu1");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}

function function13() {

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (document.getElementById('Muikku').checked) {
        score1++;
        left2--;
        document.getElementById("kala2").innerHTML =
            " Muikku on oikea vastaus. Vesien lämmettyä heinäkuussa, alkaa muikku kerääntyä kohti syvänteitä ja muodostaa siellä suuria parvia. Tyynenä kesäiltana voi muikkuparven löytää katseella, kun seuraa niiden pintakäyntejä. Päivisin parvia voi etsiä kaikuluotaimella. Myös kirkuva lokkiparvi paljastaa pinnan lähellä uivat parvet. Syvissä järvissä muikut liikkuvat päivisin välivedessä heti harppauskerroksen alla, jonne verkot voi ripustaa pitkillä kohoon kiinnitetyillä tapseilla. Illalla verkot lasketaan pinnan lähelle lyhyillä tapsikohoilla, sillä silloin muikut nousevat aivan pintaan syömään planktonia. Verkot on hyvä nostaa ylös heti aamuvarhaisella. Lokit heräävät aamulla ja ne voivat hakea muikut verkosta jopa metrin syvyydestä.";

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Silakka").checked) {
        document.getElementById("error3").innerHTML =
            " Väärin arvattu! Tämä kala on muikku. ";
        left2--;

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Salakka").checked) {
        document.getElementById("error3").innerHTML =
            " Väärin arvattu! Tämä kala on muikku. ";
        left2--;
        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Kiiski").checked) {
        document.getElementById("error3").innerHTML =
            " Väärin arvattu! Tämä kala on muikku. ";
        left2--;
        // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    } else {
        document.getElementById("error3").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;
    }
    //tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos13").innerHTML = "Pistetilanne:  " + score1 + " / 5";
    document.getElementById("kala2").disabled = true;
    document.getElementById("left13").innerHTML = "Kysymyksiä jäljellä: " + left2 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left2 == 0) {
        document.getElementById("onnittelut13").innerHTML = " Tulos = " + score1 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("kala2");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function14() {

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (document.getElementById("Neitoperhonen").checked) {
        score1++;
        left2--;
        document.getElementById("perhonen1").innerHTML =
            " Oikein! Aiemmin Suomessa melko harvinaisena tavattavasta neitoperhosesta on viime vuosina tullut yksi yleisimmistä ja varmasti helpoiten tunnistettavista päiväperhoslajeistamme, etenkin maamme eteläosissa. Yleisesti tavattavana päiväperhoslajina pohjoisraja kulkee suunnilleen Vaasa-Kuopio-linjalla, mutta paikoin Lapissakin neitoperhosta voi tavata. Lajin parhaat ja varmimmat tuntomerkit ovat etu- ja takasiipien yläpuolen suuret silmätäplät.";//https://luontoportti.com/t/822/neitoperhonen

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Ohdakeperhonen").checked) {
        document.getElementById("error4").innerHTML =
            " Väärin meni. Kuvassa on neitoperhonen.";
        left2--;
        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Amiraaliperhonen").checked) {
        document.getElementById("error4").innerHTML =
            "Väärin meni. Kuvassa on neitoperhonen.";
        left2--;
        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Herukkaperhonen").checked) {
        document.getElementById("error4").innerHTML =
            "Väärin meni. Kuvassa on neitoperhonen.";
        left2--;
        //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    } else {
        document.getElementById("error4").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;

    }//tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos14").innerHTML = "Pistetilanne: " + score1 + " / 5";
    document.getElementById("perhonen1").disabled = true;
    document.getElementById("left14").innerHTML = "Kysymyksiä jäljellä: " + left2 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left2 == 0) {
        document.getElementById("onnittelut14").innerHTML = " Tulos = " + score1 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("perhonen1");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function15() {

    //Kun oikea vastaus on valittu, lisätään piste ja vähennetään kysymys, tulostetaan oikean vastauksen teksti. 
    if (document.getElementById("Kärppä").checked) {
        score1++;
        left2--;
        document.getElementById("eläin3").innerHTML = " Aivan oikein. Kärppä tarvitsee saalista vuorokaudessa 40 -70 grammaa eli noin 2-4 myyrää. Hyvinä myyrävuosina kärppä tappaa enemmän myyriä kuin itse jaksaa syödä, näin ollen kärppä on tärkeä saalislajin runsauden säätelijä.  Huonompina myyrävuosina kärppä käyttää ravinnokseen myös liskoja, sammakoita, linnunmunia ja -poikasia, hyönteisiä ja jopa marjoja.";//https://www.riistakolmiot.fi/animal/karppa-mustela-erminea/

        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Lumikko").checked) {
        document.getElementById("error5").innerHTML =
            " Väärin arvattu! Oikea vastaus on kärppä.";
        left2--;
        //Kun väärä vastaus valittu, vähennetään jäljellä olevan kysymysten määrää yhdellä ja tulostetaan vastausteksti.
    } else if (document.getElementById("Näätä").checked) {
        document.getElementById("error5").innerHTML =
            " Väärin arvattu! Oikea vastaus on kärppä. ";
        left2--;
        //jos yhtään radiobuttonia ei ole valittu ja vastausta yritetään tarkistaa, tulostetaan teksti:
    } else {
        document.getElementById("error5").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
        return;

    }//tulostetaan pistetilanne, lukitaan vastauksen lähetys, ettei pisteitä voi napsutella tyhjästä sekä tulostetaan jäljellä olevan kysymysten määrä
    document.getElementById("tulos15").innerHTML = "Pistetilanne: " + score1 + " / 5";
    document.getElementById("Kärppä").disabled = true;
    document.getElementById("left15").innerHTML = "Kysymyksiä jäljellä: " + left2 + " / 5";

    // Tulostetaan kokonaispistemäärä viimeisenä vastatun kysymyksen jälkeen.
    if (left2 == 0) {
        document.getElementById("onnittelut15").innerHTML = " Tulos = " + score1 + " pistettä.";
    }
    //Lukitsee radiobuttonit, ettei vastausta pääse vaihtamaan, kun vastaus tarkistettu.
    var inputs = document.getElementsByName("Kärppä");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}