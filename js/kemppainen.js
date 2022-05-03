var t = [];
var avatut = [];
var pisteet = 0;
//Photo credits to pixabay.com // https://pixabay.com/service/license/

function korttiPainallus(kohde) {
    //Katsotaan monta korttia avattu
    if (avatut.length < 1) {
        //vaihtaa background imagen taulukon indeksin mukaisesti ja slice muokkaa id:tä html puolella
        kohde.style.backgroundImage = t[parseInt(kohde.id.slice(1)) - 1];
        //pushaa mitä ollaan avattu taulukkoon
        avatut.push(kohde);
    } 
    // Tarkistetaan että samaa korttia ei voi avata kaksi kertaa ja palaa jos avataan.
    else if (avatut.length == 1) {
        kohde.style.backgroundImage = t[parseInt(kohde.id.slice(1)) - 1];
        if (avatut[0].id != kohde.id) avatut.push(kohde);
        else {
            return
        }
        //Tarkistetaan osuuko oikeaan pariin. Jos ei osu niin vaihtaa kysymysmerkki kuvan takaisin korttiin.
    } else {
        if (avatut[0].style.backgroundImage !== avatut[1].style.backgroundImage) {
            avatut[0].style.backgroundImage = "url('../images/kemppainen_images/kymysys.jpg')";
            avatut[1].style.backgroundImage = "url('../images/kemppainen_images/kymysys.jpg')";
            //Poistetaan onclick attribuutti.
        } else {
            avatut[0].removeAttribute("onclick");
            avatut[1].removeAttribute("onclick");
            pisteet++;
            if(pisteet >= 8){
                alert('Voitit pelin! Voit aloittaa uudelleen painamalla Aloita uudelleen- näppäintä');
            }
        }
        //tyhjennetään taulukko
        
        avatut = [];
       
    }

   
}

//sivulle mentäessä suorittaa
window.onload = function() {
    //Kysymysmerkki backgroundimage asetetaan jokaiselle kortille
    for (let i = 1; i < 17; i++) {
        document.getElementById("k" + i).style.backgroundImage = "url('../images/kemppainen_images/kymysys.jpg')";
        
    }
    //kuvat listassa
    let lista = ["url('../images/kemppainen_images/zebra.jpg')", "url('../images/kemppainen_images/pupu.jpg')", "url('../images/kemppainen_images/pingu.jpg')", "url('../images/kemppainen_images/norsu.jpg')", "url('../images/kemppainen_images/koira.jpg')", "url('../images/kemppainen_images/apina.jpg')", "url('../images/kemppainen_images/hai.jpg')", "url('../images/kemppainen_images/heppa.jpg')"];
    var i = 0;
    //Kortit mitkä pelissä on, kaksi jokaista
    var elukat = [lista[0], lista[1], lista[2], lista[3], lista[4], lista[5], lista[6], lista[7], lista[0], lista[1], lista[2], lista[3], lista[4], lista[5], lista[6], lista[7]];
    //otetaan randomilla eläimiä, ja pushataan elukat-taulukkoon. Poistetaan elukat taulukosta arvottu indeksi.
    while (elukat.length > 0) {
        let rnd = Math.floor(Math.random() * elukat.length);
        t.push(elukat[rnd]);
        i++;
        elukat.splice(rnd, 1);


    }
}
//ladataan sivu uudelleen, peli alkaa alusta
function refresh(){
    window.location.reload();
}
