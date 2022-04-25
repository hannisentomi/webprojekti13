const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="lintu"]');
btn.addEventListener("click", () => {
    let selectedLintu;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedLintu = radioButton.value;
            // show the output:
            if (radioButton.value = "talitiainen");
            output.innerText = selectedLintu ? `AI-VAN OI-KEIN. TIE-SITKÖ, ET-TÄ TA-LI-TI-AI-SEL-LA VOI OL-LA JO-PA KYM-ME-NEN POI-KAS-TA. ` : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
         
        }
        else;
        output.innerText = selectedLintu ? `klööööölkj. ` : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
    }
});

const btn2 = document.querySelector('#btn2');
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
});

const btn5 = document.querySelector('#btn5');
const radioButtons5 = document.querySelectorAll('input[name="kasvi"]');
btn5.addEventListener("click", () => {
    let selectedKasvi;
    for (const radioButton of radioButtons5) {
        if (radioButton.checked) {
            selectedKasvi = radioButton.value;
            break;

        }
    }
    output5.innerText = selectedKasvi ? `VÄÄ-RIN ME-NI. KU-VAS-SSA EI O-LE ${selectedKasvi}. ` + "KU-VAN KUK-KA ON VAL-KO-VUOK-KO." : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
});

function function6() {
    let rd1 = document.getElementById("mesimarja");
    let rd2 = document.getElementById("karhunvatukka");
    let rd3 = document.getElementById("lillukka");
    let rd4 = document.getElementById("mustavadelma");

    if (rd2.checked == true)
        document.getElementById("marja").innerHTML = "Hyvin meni! Karhunvatukka on herkullinen ja mehukas marja, joka soveltuu ihanteellisesti  terveellisiin juomiin ja smoothieihin, sekä sellaisenaan nautittavaksi jogurtin kera tai jälkiruuissa. Voit syödä karhunvatukoita myös salaateissa ja muissa kylmissä resepteissä." + "Voit lukea lisää karhunvatukan terveydhyödyistä täältä:" + " https://askelterveyteen.com/7-syyta-syoda-karhunvatukoita/";
    else if (rd1.checked == true)
        document.getElementById("marja").innerHTML = "Voi ei, vastasit väärin, kuvan marja on karhunvatukka";
    else if (rd3.checked == true)
        document.getElementById("marja").innerHTML = "Voi ei, vastasit väärin,kuvan marja on karhunvatukka";
    else if (rd4.checked == true)
        document.getElementById("marja").innerHTML = "Voi ei, vastasit väärin, kuvan marja on karhunvatukka";
}
function function7() {
    let rd5 = document.getElementById("tammi");
    let rd6 = document.getElementById("paju");
    let rd7 = document.getElementById("leppä");
    let rd8 = document.getElementById("haapa");

    if (rd7.checked == true)
        document.getElementById("puu").innerHTML = "Aivan oikein. Tiesitkö, että leppä sopii erityisen hyvin jatkuvalämmitteisen saunan ja savusaunan lämmitykseen sekä helloihin ja avotakkoihin." + "https://savonvoima.fi/miksi-koivua-pidetaan-parhaana-polttopuuna/";
    else if (rd5.checked == true)
        document.getElementById("puu").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa makoilee rantakäärme.";
    else if (rd6.checked == true)
        document.getElementById("puu").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa makoilee rantakäärme.";
    else if (rd8.checked == true)
        document.getElementById("puu").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa makoilee rantakäärme.";
}
function function8() {
    let rd9 = document.getElementById("limanuljaska");
    let rd10 = document.getElementById("hitutötterö");
    let rd11 = document.getElementById("korvasieni");
    let rd12 = document.getElementById("typäskääpä");
    let rd13 = document.getElementById("outorisakas");

    if (rd11.checked == true)
        document.getElementById("sieni").innerHTML = "Vastauksesi on oikein. Korvasieni on helppo tuntea,sillä keväällä ei juuri muita sieniä kasva. Se viihtyy parhaiten hiekkamaalla, vanhoilla hakkuualueilla. Ruskea muhkura voi olla ensin vaikea havaita, mutta kun silmä tottuu, niin kas niitähän on joka paikassa! Tämä raakana myrkyllinen ruokasieni pitää esikäsitellä huolellisesti. " +
            "Suuret korvasienet vastaavat kooltaan lapsen aivoja, ja useamman sienen rypäs voi ylittää aikuisen ihmisen aivojen koon.Korvasieni on alkukesän aarre. Sen satokausi kestää vain muutaman viikon, joten herkku on poimittava oikeaan aikaan. Satokausi riippuu kevään lämpötilasta, pohjoisessa korvasieniä saatetaan kerätä vielä heinäkuussakin. Nyrkkisääntönä on, että korvasieniä kannattaa lähteä etsimään, kun hiirenkorvat ilmestyvät koivuihin." + "https://yle.fi/aihe/artikkeli/2019/04/26/myrkky-vai-herkku-korvasieni-jakaa-mielipiteet";
    else if (rd9.checked == true)
        document.getElementById("sieni").innerHTML = "Väärin meni, kuvan sieni on korvasieni";
    else if (rd10.checked == true)
        document.getElementById("sieni").innerHTML = "Väärin meni, kuvan sieni on korvasieni";
    else if (rd12.checked == true)
        document.getElementById("sieni").innerHTML = "Väärin meni, kuvan sieni on korvasieni";
    else if (rd13.checked == true)
        document.getElementById("sieni").innerHTML = "Väärin meni, kuvan sieni on korvasieni";
}

function function9() {
    let rd14 = document.getElementById("räyskä");
    let rd15 = document.getElementById("mustaselkälokki");
    let rd16 = document.getElementById("merilokki");
    let rd17 = document.getElementById("meriharakka");

    if (rd17.checked == true)
        document.getElementById("lintu1").innerHTML = "Vastauksesi on oikein. Meriharakka on melkein variksen kokoinen, tanakka kahlaajalintu, jonka pää ja selkäpuoli ovat mustat, vatsa valkoinen. Räikeänpunaiset nokka ja jalat näkyvät kauas. Ääni on kimeä ja kiihkeä”pii, biik” ja ”ko-biik ko-biik…" +
            "Meriharakka pesii merensaariston kallioisilla ja somerikkoisilla, puuttomilla luodoilla, muutamin paikoin sisämaassakin teollisuuslaitosten avomailla ja puutavarakentillä. Pääravintona ovat simpukat, joita emot tuovat poikasille avattuaan niiden kuoren (muilla kahlaajilla untuvikot syövät pikkuötököitä ilman emojen apua). Rannikkoseuduilla meriharakat etsivät matoja ja kotiloita myös avarilta nurmikoilta." +
            "Meriharakka on yleinen koko merialueella, sisämaassa pesivänä hyvin harvinainen mutta keväällä säännöllinen läpimuuttaja Jäämeren äärelle. Linnut lähtevät heinä-syyskuussa Länsi-Euroopan rannikoille ja palaavat valtaosin huhtikuussa. " + " https://yle.fi/aihe/artikkeli/2017/05/16/rantojen-ja-kosteikkojen-kahlaajia-meriharakka";
    else if (rd14.checked == true)
        document.getElementById("lintu1").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa on meriharakka.";
    else if (rd15.checked == true)
        document.getElementById("lintu1").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa on meriharakka.";
    else if (rd16.checked == true)
        document.getElementById("lintu1").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa on meriharakka.";
}
function function10() {
    let rd18 = document.getElementById("kangaskäärme");
    let rd19 = document.getElementById("rantakäärme");
    let rd20 = document.getElementById("kyy");


    if (rd19.checked == true)
        document.getElementById("käärme").innerHTML = "Vastauksesi on oikein. Nimensä mukaisesti rantakäärme viihtyy vesien äärellä. Se on varsin hyvä uimari, joka pystyy sukeltamaan jopa puoli tuntia kerrallaan. Päiväaktiivinen rantakäärme on ihmiselle vaaraton. " + "https://www.apu.fi/artikkelit/vaaraton-rantakaarme-on-todellinen-hyotykaarme-nain-erotat-sen-kyysta";
    else if (rd18.checked == true)
        document.getElementById("käärme").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa makoilee rantakäärme.";
    else if (rd20.checked == true)
        document.getElementById("käärme").innerHTML = "Nyt ei mennyt ihan putkeen, kuvassa makoilee rantakäärme.";

}

/*else
    document.getElementById("marja").innerHTML = "Ole hyvä ja valitse yksi vaihtoehto";*/

/*function function11(){
let getSelectedValue = document.querySelector( 'input[name="kukka"]:checked');
if(getSelectedValue != null) {
    document.getElementById("kukka").innerHTML = "Vastaus on aivan oikein.Tämä kasvi on todellakin " + getSelectedValue.value +".";
    return;

}*/
function function11() {
    if (document.getElementById('Kissankello').checked) {
        document.getElementById("kukka").innerHTML
            = document.getElementById("Kissankello").value
            + " on oikea vastaus.";
    }
    else if (document.getElementById('Harakankello').checked) {
        document.getElementById("error").innerHTML
            = document.getElementById("Harakankello").value
            + " ei ole oikea vastaus. Kuvassa on kissankello.";
    }
    else if (document.getElementById('Kurjenkello').checked) {
        document.getElementById("error").innerHTML
            = document.getElementById("Kurjenkello").value
            + " ei ole oikea vastaus. Kuvassa on kissankello.";
    }

    else {
        document.getElementById("error").innerHTML
            = "Ole hyvä ja valitse yksi vaihtoehto.";
    }
}

