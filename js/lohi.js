/* Minna Lohi TIK22KM */

var score = 0;
var score2 = 0;

$(document).ready(function(){

$('input[type=radio][name="lintu"]').change (function(){
   if (this.value == 4) {
    output.innerText =`KYL-LÄ, LIN-TU ON TALITIAINEN. TIE-SIT-KÖ, ET-TÄ TA-LI-TI-AI-SEl-LA VOI OL-LA JO-PA KYM-ME-NEN POI-KAS-TA`;
   }else if(this.value == 1|2|3){

    output.innerText =`HUPS, KU-VAN LIN-TU ON TALITIAINEN.`;
   }
else
output.innerText = `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
    var inputs = document.getElementsByName('lintu');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
});

});

var btn2 = document.querySelector('#output2');
const radioButtons2 = document.querySelectorAll('input[name="kala"]');
btn2.addEventListener("click", () => {
    let selectedKala;
    for (const radioButton of radioButtons2) {
        if (radioButton.checked) {
            selectedKala = radioButton.value;
            break;
        }
    }

    output2.innerText = selectedKala ? `HUPS, KU-VAN KA-LA EI O-LE ${selectedKala}.` : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;

    var inputs = document.getElementsByName('kala');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
});

const btn3 = document.querySelector('#btn3');
const radioButtons3 = document.querySelectorAll('input[name="perhonen"]');
btn3.addEventListener("click", () => {
    let selectedPerhonen;
    for (const radioButton of radioButtons3) {
        if (radioButton.checked) {
            selectedPerhonen = radioButton.value;
            break;
        }
    }
    output3.innerText = selectedPerhonen ? `OOPS, TÄ-MÄ EI O-LE ${selectedPerhonen}. ` + "KU-VAN PER-HO-NEN ON NOK-KOS-PER-HO-NEN." : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
    var inputs = document.getElementsByName('perhonen');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
});

const btn4 = document.querySelector('#btn4');
const radioButtons4 = document.querySelectorAll('input[name="eläin"]');
btn4.addEventListener("click", () => {
    let selectedEläin;
    for (const radioButton of radioButtons4) {
        if (radioButton.checked) {
            selectedEläin = radioButton.value;
            break;

        }
    }
    output4.innerText = selectedEläin ? `VOI EI, TÄ-MÄ E-LÄ-IN EI O-LE ${selectedEläin}. ` + "KU-VAS-SA ON AH-MA." : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
    var inputs = document.getElementsByName('eläin');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
});

const btn5 = document.querySelector('#btn5');
const radioButtons5 = document.querySelectorAll('input[name="kukka"]');
btn5.addEventListener("click", () => {
    let selectedKukka;
    for (const radioButton of radioButtons5) {
        if (radioButton.checked) {
            selectedKukka = radioButton.value;
            break;

        }
    }
    output5.innerText = selectedKukka ? `VÄÄ-RIN ME-NI. KU-VAS-SSA EI O-LE ${selectedKukka}. ` + "KU-VAN KUK-KA ON VAL-KO-VUOK-KO." : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
    var inputs = document.getElementsByName('kukka');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
});


function function6() {
    let rd1 = document.getElementById("mesimarja");
    let rd2 = document.getElementById("karhunvatukka");
    let rd3 = document.getElementById("lillukka");
    let rd4 = document.getElementById("mustavadelma");

    if (rd2.checked == true) {
        score2++;
        document.getElementById("marja").innerHTML = "Hyvin meni! Karhunvatukka on herkullinen ja mehukas marja, joka soveltuu ihanteellisesti  terveellisiin juomiin ja smoothieihin, sekä sellaisenaan nautittavaksi jogurtin kera tai jälkiruuissa. Voit syödä karhunvatukoita myös salaateissa ja muissa kylmissä resepteissä." + "Voit lukea lisää karhunvatukan terveydhyödyistä täältä:"; //" https://askelterveyteen.com/7-syyta-syoda-karhunvatukoita/"

    } else if (rd1.checked == true|rd3.checked == true|rd4.checked == true)
        document.getElementById("marja").innerHTML = "Voi ei, vastasit väärin, kuvan marja on karhunvatukka.";
   
    var inputs = document.getElementsByName("marja");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function7() {
    let rd5 = document.getElementById("tammi");
    let rd6 = document.getElementById("paju");
    let rd7 = document.getElementById("leppä");
    let rd8 = document.getElementById("haapa");

    if (rd7.checked == true) {
        score2++;
        document.getElementById("puu").innerHTML = "Aivan oikein. Tiesitkö, että leppä sopii erityisen hyvin jatkuvalämmitteisen saunan ja savusaunan lämmitykseen sekä helloihin ja avotakkoihin."; //"https://savonvoima.fi/miksi-koivua-pidetaan-parhaana-polttopuuna/"

    } else if (rd5.checked == true| rd6.checked == true|rd8.checked == true)
        document.getElementById("puu").innerHTML = "Nyt ei mennyt ihan putkeen, kuvan puu on leppä.";
    
    var inputs = document.getElementsByName("puu");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function8() {
    let rd9 = document.getElementById("limanuljaska");
    let rd10 = document.getElementById("hitutötterö");
    let rd11 = document.getElementById("korvasieni");
    let rd12 = document.getElementById("typäskääpä");
    let rd13 = document.getElementById("outorisakas");

    if (rd11.checked == true) {
        score2++;
        document.getElementById("sieni").innerHTML = "Vastauksesi on oikein. Korvasieni on helppo tuntea,sillä keväällä ei juuri muita sieniä kasva. Se viihtyy parhaiten hiekkamaalla, vanhoilla hakkuualueilla. Ruskea muhkura voi olla ensin vaikea havaita, mutta kun silmä tottuu, niin kas niitähän on joka paikassa! Tämä raakana myrkyllinen ruokasieni pitää esikäsitellä huolellisesti. " +
            "Suuret korvasienet vastaavat kooltaan lapsen aivoja, ja useamman sienen rypäs voi ylittää aikuisen ihmisen aivojen koon.Korvasieni on alkukesän aarre. Sen satokausi kestää vain muutaman viikon, joten herkku on poimittava oikeaan aikaan. Satokausi riippuu kevään lämpötilasta, pohjoisessa korvasieniä saatetaan kerätä vielä heinäkuussakin. Nyrkkisääntönä on, että korvasieniä kannattaa lähteä etsimään, kun hiirenkorvat ilmestyvät koivuihin."; //"https://yle.fi/aihe/artikkeli/2019/04/26/myrkky-vai-herkku-korvasieni-jakaa-mielipiteet"

    } else if (rd9.checked == true|rd10.checked == true|rd12.checked == true|rd13.checked == true)
        document.getElementById("sieni").innerHTML = "Väärin meni, kuvan sieni on korvasieni.";

    var inputs = document.getElementsByName('sieni');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function9() {
    let rd14 = document.getElementById("räyskä");
    let rd15 = document.getElementById("mustaselkälokki");
    let rd16 = document.getElementById("merilokki");
    let rd17 = document.getElementById("meriharakka");

    if (rd17.checked == true) {
        score2++;
        document.getElementById("lintu1").innerHTML = "Vastauksesi on oikein. Meriharakka on melkein variksen kokoinen, tanakka kahlaajalintu, jonka pää ja selkäpuoli ovat mustat, vatsa valkoinen. Räikeänpunaiset nokka ja jalat näkyvät kauas. Ääni on kimeä ja kiihkeä”pii, biik” ja ”ko-biik ko-biik…" +
            "Meriharakka pesii merensaariston kallioisilla ja somerikkoisilla, puuttomilla luodoilla, muutamin paikoin sisämaassakin teollisuuslaitosten avomailla ja puutavarakentillä. Pääravintona ovat simpukat, joita emot tuovat poikasille avattuaan niiden kuoren (muilla kahlaajilla untuvikot syövät pikkuötököitä ilman emojen apua). Rannikkoseuduilla meriharakat etsivät matoja ja kotiloita myös avarilta nurmikoilta." +
            "Meriharakka on yleinen koko merialueella, sisämaassa pesivänä hyvin harvinainen mutta keväällä säännöllinen läpimuuttaja Jäämeren äärelle. Linnut lähtevät heinä-syyskuussa Länsi-Euroopan rannikoille ja palaavat valtaosin huhtikuussa. " ;// " https://yle.fi/aihe/artikkeli/2017/05/16/rantojen-ja-kosteikkojen-kahlaajia-meriharakka"

    } else if (rd14.checked == true|rd15.checked == true|rd16.checked == true)
        document.getElementById("lintu1").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa on meriharakka.";
   
    var inputs = document.getElementsByName('lintu1');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function10() {
    let rd18 = document.getElementById("kangaskäärme");
    let rd19 = document.getElementById("rantakäärme");
    let rd20 = document.getElementById("kyy");


    if (rd19.checked == true) {
        score2++;
        document.getElementById("käärme").innerHTML = "Vastauksesi on oikein. Nimensä mukaisesti rantakäärme viihtyy vesien äärellä. Se on varsin hyvä uimari, joka pystyy sukeltamaan jopa puoli tuntia kerrallaan. Päiväaktiivinen rantakäärme on ihmiselle vaaraton. ";// + "https://www.apu.fi/artikkelit/vaaraton-rantakaarme-on-todellinen-hyotykaarme-nain-erotat-sen-kyysta"

    } else if (rd18.checked == true|rd20.checked == true)
        document.getElementById("käärme").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa makoilee rantakäärme.";

    var inputs = document.getElementsByName('käärme');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}


function function11() {

    if (document.getElementById('Kissankello').checked) {
        score++;

        document.getElementById("kukka").innerHTML = document.getElementById("Kissankello").value +
            " on oikea vastaus. Sinulla on  nyt luontovisasta " + score + "/ 5 pistettä. Rakkaalla lapsella on monta nimeä: sinisissä kellokukissa on nähty milloin minkäkin eläimen kello tai hattu, kissan lisäksi ainakin harakan, koiran, kurjen, lampaan, lehmän, pääskysen, poron ja variksen. Kissankello on lempinimensä ansainnut, paitsi kauneudellaan, myös yleisyydellään ja laajalla levinneisyydellään.";//https://luontoportti.com/t/56/kissankello
        return;

    } else if (document.getElementById('Harakankello').checked) {

        document.getElementById("error").innerHTML = document.getElementById("Harakankello").value +
            " on oikea vastaus. Sinulla on  nyt luontovisasta " + score + "/ 5 pistettä. Rakkaalla lapsella on monta nimeä: sinisissä kellokukissa on nähty milloin minkäkin eläimen kello tai hattu, kissan lisäksi ainakin harakan, koiran, kurjen, lampaan, lehmän, pääskysen, poron ja variksen. Kissankello on lempinimensä ansainnut, paitsi kauneudellaan, myös yleisyydellään ja laajalla levinneisyydellään.";
        " ei ole oikea vastaus. ";
        return;

    } else if (document.getElementById('Kurjenkello').checked) {

        document.getElementById("error").innerHTML = document.getElementById("Kurjenkello").value +
            " ei ole oikea vastaus. Sinulla on  nyt luontovisasta " + score + "/ 5 pistettä. Kuvassa on kissankello. Rakkaalla lapsella on monta nimeä: sinisissä kellokukissa on nähty milloin minkäkin eläimen kello tai hattu, kissan lisäksi ainakin harakan, koiran, kurjen, lampaan, lehmän, pääskysen, poron ja variksen. Kissankello on lempinimensä ansainnut, paitsi kauneudellaan, myös yleisyydellään ja laajalla levinneisyydellään.";
        return;

    } else {
        document.getElementById("error").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
    }

    var inputs = document.getElementsByName('käärme');
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}

function function12() {

    if (document.getElementById('Harmaalokki').checked) {
        score++;

        document.getElementById("lintu1").innerHTML = document.getElementById("Harmaalokki").value +
            " on oikea vastaus. Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Harmaalokilla on neljä ikäluokkaa ja useita pukuja. Toisesta talvesta lähtien sillä on harmaa selkä. Jalat ovat vaaleanpunaiset (vanha lintu) tai ruskeanharmaat (nuori lintu). Nokka on vaaleakärkisesti keltainen ja alanokan kulmassa on punainen täplä (vanha lintu), tai nokka on punertavatyvisesti tumma (nuori lintu). Silmän värikalvo (iiris) on vaaleankeltainen (vanha lintu) tai tummanruskea-vaaleankeltainen (nuori lintu). Alanokan kulman punainen täplä kehittyy kolmantena talvena.";//https://luontoportti.com/t/495/harmaalokki
        return;

    } else if (document.getElementById("Kalalokki").checked) {


        document.getElementById("error2").innerHTML = document.getElementById("Kalalokki").value +
            " ei ole oikea vastaus. Tämä lintu on harmaalokki. Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Harmaalokilla on neljä ikäluokkaa ja useita pukuja. Toisesta talvesta lähtien sillä on harmaa selkä. Jalat ovat vaaleanpunaiset (vanha lintu) tai ruskeanharmaat (nuori lintu). Nokka on vaaleakärkisesti keltainen ja alanokan kulmassa on punainen täplä (vanha lintu), tai nokka on punertavatyvisesti tumma (nuori lintu). Silmän värikalvo (iiris) on vaaleankeltainen (vanha lintu) tai tummanruskea-vaaleankeltainen (nuori lintu). Alanokan kulman punainen täplä kehittyy kolmantena talvena.";
        return;

    } else if (document.getElementById("Merilokki").checked) {

        document.getElementById("error2").innerHTML = document.getElementById("Merilokki").value +
            " ei ole oikea vastaus. Tämä lintu on harmaalokki. Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Harmaalokilla on neljä ikäluokkaa ja useita pukuja. Toisesta talvesta lähtien sillä on harmaa selkä. Jalat ovat vaaleanpunaiset (vanha lintu) tai ruskeanharmaat (nuori lintu). Nokka on vaaleakärkisesti keltainen ja alanokan kulmassa on punainen täplä (vanha lintu), tai nokka on punertavatyvisesti tumma (nuori lintu). Silmän värikalvo (iiris) on vaaleankeltainen (vanha lintu) tai tummanruskea-vaaleankeltainen (nuori lintu). Alanokan kulman punainen täplä kehittyy kolmantena talvena.";
        return;


    } else {
        document.getElementById("error2").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
    }
    var inputs = document.getElementsByName("lintu1");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }

}

function function13() {

    if (document.getElementById('Muikku').checked) {
        score++;
        document.getElementById("kala2").innerHTML = document.getElementById("Muikku").value +
            " on oikea vastaus.  Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Vesien lämmettyä heinäkuussa, alkaa muikku kerääntyä kohti syvänteitä ja muodostaa siellä suuria parvia. Tyynenä kesäiltana voi muikkuparven löytää katseella, kun seuraa niiden pintakäyntejä. Päivisin parvia voi etsiä kaikuluotaimella. Myös kirkuva lokkiparvi paljastaa pinnan lähellä uivat parvet. Syvissä järvissä muikut liikkuvat päivisin välivedessä heti harppauskerroksen alla, jonne verkot voi ripustaa pitkillä kohoon kiinnitetyillä tapseilla. Illalla verkot lasketaan pinnan lähelle lyhyillä tapsikohoilla, sillä silloin muikut nousevat aivan pintaan syömään planktonia. Verkot on hyvä nostaa ylös heti aamuvarhaisella. Lokit heräävät aamulla ja ne voivat hakea muikut verkosta jopa metrin syvyydestä.";
        return;
    } else if (document.getElementById("Silakka").checked) {

        document.getElementById("error3").innerHTML = document.getElementById("Silakka").value +
            " ei ole oikea vastaus. Tämä kala on muikku. Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Vesien lämmettyä heinäkuussa, alkaa muikku kerääntyä kohti syvänteitä ja muodostaa siellä suuria parvia. Tyynenä kesäiltana voi muikkuparven löytää katseella, kun seuraa niiden pintakäyntejä. Päivisin parvia voi etsiä kaikuluotaimella. Myös kirkuva lokkiparvi paljastaa pinnan lähellä uivat parvet. Syvissä järvissä muikut liikkuvat päivisin välivedessä heti harppauskerroksen alla, jonne verkot voi ripustaa pitkillä kohoon kiinnitetyillä tapseilla. Illalla verkot lasketaan pinnan lähelle lyhyillä tapsikohoilla, sillä silloin muikut nousevat aivan pintaan syömään planktonia. Verkot on hyvä nostaa ylös heti aamuvarhaisella. Lokit heräävät aamulla ja ne voivat hakea muikut verkosta jopa metrin syvyydestä.";
        return;
    } else if (document.getElementById("Salakka").checked) {

        document.getElementById("error3").innerHTML = document.getElementById("Salakka").value +
            " ei ole oikea vastaus. Tämä kala on muikku.  Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Vesien lämmettyä heinäkuussa, alkaa muikku kerääntyä kohti syvänteitä ja muodostaa siellä suuria parvia. Tyynenä kesäiltana voi muikkuparven löytää katseella, kun seuraa niiden pintakäyntejä. Päivisin parvia voi etsiä kaikuluotaimella. Myös kirkuva lokkiparvi paljastaa pinnan lähellä uivat parvet. Syvissä järvissä muikut liikkuvat päivisin välivedessä heti harppauskerroksen alla, jonne verkot voi ripustaa pitkillä kohoon kiinnitetyillä tapseilla. Illalla verkot lasketaan pinnan lähelle lyhyillä tapsikohoilla, sillä silloin muikut nousevat aivan pintaan syömään planktonia. Verkot on hyvä nostaa ylös heti aamuvarhaisella. Lokit heräävät aamulla ja ne voivat hakea muikut verkosta jopa metrin syvyydestä.";
        return;

    } else if (document.getElementById("Kiiski").checked) {

        document.getElementById("error3").innerHTML = document.getElementById("Kiiski").value +
            " ei ole oikea vastaus. Tämä kala on muikku.  Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Vesien lämmettyä heinäkuussa, alkaa muikku kerääntyä kohti syvänteitä ja muodostaa siellä suuria parvia. Tyynenä kesäiltana voi muikkuparven löytää katseella, kun seuraa niiden pintakäyntejä. Päivisin parvia voi etsiä kaikuluotaimella. Myös kirkuva lokkiparvi paljastaa pinnan lähellä uivat parvet. Syvissä järvissä muikut liikkuvat päivisin välivedessä heti harppauskerroksen alla, jonne verkot voi ripustaa pitkillä kohoon kiinnitetyillä tapseilla. Illalla verkot lasketaan pinnan lähelle lyhyillä tapsikohoilla, sillä silloin muikut nousevat aivan pintaan syömään planktonia. Verkot on hyvä nostaa ylös heti aamuvarhaisella. Lokit heräävät aamulla ja ne voivat hakea muikut verkosta jopa metrin syvyydestä.";
        return;
    } else {
        document.getElementById("error3").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
    }
    var inputs = document.getElementsByName("kala2");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function14() {

    if (document.getElementById("Neitoperhonen").checked) {
        score++;
        document.getElementById("perhonen").innerHTML = document.getElementById("Neitoperhonen").value +
            " on oikea vastaus. Sinulla on  nyt luontovisasta " + score + "/5 pistettä. " +""+"Aiemmin Suomessa melko harvinaisena tavattavasta neitoperhosesta on viime vuosina tullut yksi yleisimmistä ja varmasti helpoiten tunnistettavista päiväperhoslajeistamme, etenkin maamme eteläosissa. Yleisesti tavattavana päiväperhoslajina pohjoisraja kulkee suunnilleen Vaasa-Kuopio-linjalla, mutta paikoin Lapissakin neitoperhosta voi tavata. Lajin parhaat ja varmimmat tuntomerkit ovat etu- ja takasiipien yläpuolen suuret silmätäplät.";//https://luontoportti.com/t/822/neitoperhonen
        return;

    } else if (document.getElementById("Ohdakeperhonen").checked) {

        document.getElementById("error4").innerHTML = document.getElementById("Ohdakeperhonen").value +
            " ei ole oikea vastaus. Tämä on neitoperhonen.Sinulla on  nyt luontovisasta " + score + "/5 pistettä. " +""+"Aiemmin Suomessa melko harvinaisena tavattavasta neitoperhosesta on viime vuosina tullut yksi yleisimmistä ja varmasti helpoiten tunnistettavista päiväperhoslajeistamme, etenkin maamme eteläosissa. Yleisesti tavattavana päiväperhoslajina pohjoisraja kulkee suunnilleen Vaasa-Kuopio-linjalla, mutta paikoin Lapissakin neitoperhosta voi tavata. Lajin parhaat ja varmimmat tuntomerkit ovat etu- ja takasiipien yläpuolen suuret silmätäplät.";
        return;

    } else if (document.getElementById("Amiraaliperhonen").checked) {

        document.getElementById("error4").innerHTML = document.getElementById("Amiraaliperhonen").value +
            " ei ole oikea vastaus. Luontovisan pistetilanne on nyt " + score + "/5 pistettä. " +""+"Aiemmin Suomessa melko harvinaisena tavattavasta neitoperhosesta on viime vuosina tullut yksi yleisimmistä ja varmasti helpoiten tunnistettavista päiväperhoslajeistamme, etenkin maamme eteläosissa. Yleisesti tavattavana päiväperhoslajina pohjoisraja kulkee suunnilleen Vaasa-Kuopio-linjalla, mutta paikoin Lapissakin neitoperhosta voi tavata. Lajin parhaat ja varmimmat tuntomerkit ovat etu- ja takasiipien yläpuolen suuret silmätäplät.";
        return;
    } else if (document.getElementById("Herukkaperhonen").checked) {

        document.getElementById("error4").innerHTML = document.getElementById("Herukkaperhonen").value +
            " ei ole oikea vastaus. Luontovisan pistetilanne on nyt " + score + "/5 pistettä. " +""+"Aiemmin Suomessa melko harvinaisena tavattavasta neitoperhosesta on viime vuosina tullut yksi yleisimmistä ja varmasti helpoiten tunnistettavista päiväperhoslajeistamme, etenkin maamme eteläosissa. Yleisesti tavattavana päiväperhoslajina pohjoisraja kulkee suunnilleen Vaasa-Kuopio-linjalla, mutta paikoin Lapissakin neitoperhosta voi tavata. Lajin parhaat ja varmimmat tuntomerkit ovat etu- ja takasiipien yläpuolen suuret silmätäplät.";
        return;

    } else {
        document.getElementById("error4").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";

    }
    var inputs = document.getElementsByName("perhonen");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}

function function15() {
    
    if (document.getElementById("Kärppä").checked) {
        score++;
        document.getElementById("Kärppä").innerHTML = document.getElementById("Kärppä").value +
            " on oikea vastaus. Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Kärppä tarvitsee saalista vuorokaudessa 40 -70 grammaa eli noin 2-4 myyrää. Hyvinä myyrävuosina kärppä tappaa enemmän myyriä kuin itse jaksaa syödä, näin ollen kärppä on tärkeä saalislajin runsauden säätelijä.  Huonompina myyrävuosina kärppä käyttää ravinnokseen myös liskoja, sammakoita, linnunmunia ja -poikasia, hyönteisiä ja jopa marjoja.";//https://www.riistakolmiot.fi/animal/karppa-mustela-erminea/
        return;

    } else if (document.getElementById("Lumikko").checked) {

        document.getElementById("error5").innerHTML = document.getElementById("Lumikko").value +
            " ei ole oikea vastaus. Oikea vastaus on kärppä. Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Kärppä tarvitsee saalista vuorokaudessa 40 -70 grammaa eli noin 2-4 myyrää. Hyvinä myyrävuosina kärppä tappaa enemmän myyriä kuin itse jaksaa syödä, näin ollen kärppä on tärkeä saalislajin runsauden säätelijä.  Huonompina myyrävuosina kärppä käyttää ravinnokseen myös liskoja, sammakoita, linnunmunia ja -poikasia, hyönteisiä ja jopa marjoja."; 
        return;
    } else if (document.getElementById("Näätä").checked) {

        document.getElementById("error5").innerHTML = document.getElementById("Näätä").value +
        " ei ole oikea vastaus. Oikea vastaus on kärppä. Sinulla on  nyt luontovisasta " + score + "/5 pistettä. Kärppä tarvitsee saalista vuorokaudessa 40 -70 grammaa eli noin 2-4 myyrää. Hyvinä myyrävuosina kärppä tappaa enemmän myyriä kuin itse jaksaa syödä, näin ollen kärppä on tärkeä saalislajin runsauden säätelijä.  Huonompina myyrävuosina kärppä käyttää ravinnokseen myös liskoja, sammakoita, linnunmunia ja -poikasia, hyönteisiä ja jopa marjoja.";
        return;
    } else {
        document.getElementById("error5").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto.";
    
        document.getElementById("Tuloksesi luontovisasta 5-6 lk sait:" + score + "/5 pistettä. Kärppä tarvitsee saalista vuorokaudessa 40 -70 grammaa eli noin 2-4 myyrää. Hyvinä myyrävuosina kärppä tappaa enemmän myyriä kuin itse jaksaa syödä, näin ollen kärppä on tärkeä saalislajin runsauden säätelijä.  Huonompina myyrävuosina kärppä käyttää ravinnokseen myös liskoja, sammakoita, linnunmunia ja -poikasia, hyönteisiä ja jopa marjoja.");

    }
    var inputs = document.getElementsByName("Kärppä");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].disabled = true;
    }
}