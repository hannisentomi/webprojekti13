var t = [];
var avatut = [];

function korttiPainallus(kohde) {
    console.log(kohde.style.backgroundImage);
    if (avatut.length < 1) {
        kohde.style.backgroundImage = t[parseInt(kohde.id.slice(1)) - 1];
        avatut.push(kohde);
    } else if (avatut.length == 1) {
        kohde.style.backgroundImage = t[parseInt(kohde.id.slice(1)) - 1];
        if (avatut[0].id != kohde.id) avatut.push(kohde);
        else {
            return
        }
    } else {
        if (avatut[0].style.backgroundImage !== avatut[1].style.backgroundImage) {
            avatut[0].style.backgroundImage = "url('../images/kemppainen_images/kymysys.jpg')";
            avatut[1].style.backgroundImage = "url('../images/kemppainen_images/kymysys.jpg')";

        } else {
            avatut[0].removeAttribute("onclick");
            avatut[1].removeAttribute("onclick");
        }
        avatut = [];

    }

    console.log(avatut);
}


window.onload = function() {
    for (let i = 1; i < 17; i++) {
        document.getElementById("k" + i).style.backgroundImage = "url('../images/kemppainen_images/kymysys.jpg')";
        console.log(document.getElementById("k" + i));
    }
    let lista = ["url('../images/kemppainen_images/zebra.jpg')", "url('../images/kemppainen_images/pupu.jpg')", "url('../images/kemppainen_images/pingu.jpg')", "url('../images/kemppainen_images/norsu.jpg')", "url('../images/kemppainen_images/koira.jpg')", "url('../images/kemppainen_images/apina.jpg')", "url('../images/kemppainen_images/hai.jpg')", "url('../images/kemppainen_images/heppa.jpg')"];
    var i = 0;
    var elukat = [lista[0], lista[1], lista[2], lista[3], lista[4], lista[5], lista[6], lista[7], lista[0], lista[1], lista[2], lista[3], lista[4], lista[5], lista[6], lista[7]];
    while (elukat.length > 0) {
        let rnd = Math.floor(Math.random() * elukat.length);
        t.push(elukat[rnd]);
        i++;
        elukat.splice(rnd, 1);


    }
}