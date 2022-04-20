function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


    let pisteet = 0;
function asetaKysymykset(){

    for (let i = 1; i < 7; i++) {
        let ekaOsa = "teht" + i + "EnsimmainenOsa";
        let tokaOsa = "teht" + i + "ToinenOsa";
        let tehtavaIdA = "teht" + i + "a";
        let tehtavaIdB = "teht" + i + "b";
        let tehtavaIdC = "teht" + i + "c";
        let ekaNumero = getRndInteger(1,10);
        let tokaNumero = getRndInteger(1,10);
        document.getElementById(ekaOsa).innerHTML = ekaNumero;
        document.getElementById(tokaOsa).innerHTML = tokaNumero;
        
        if(i==1){
        let oikeaVastaus = getRndInteger(1,3);
        if(oikeaVastaus == 1){ 
            
        document.getElementById("vastaus1a").innerHTML = Number(ekaNumero) + Number(tokaNumero);
        document.getElementById("vastaus1b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus1c").innerHTML = getRndInteger(1,30);
       
        }
        if(oikeaVastaus == 2){ document.getElementById("vastaus1b").innerHTML = Number(ekaNumero) + Number(tokaNumero);
        document.getElementById("vastaus1a").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus1c").innerHTML = getRndInteger(1,30);
       
        }
        if(oikeaVastaus == 3){ document.getElementById("vastaus1c").innerHTML = Number(ekaNumero) + Number(tokaNumero);
        document.getElementById("vastaus1b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus1a").innerHTML = getRndInteger(1,30);
        
        }
    }
        if(i==2){
        let oikeaVastaus = getRndInteger(1,3);
        if(oikeaVastaus == 1){ document.getElementById("vastaus2a").innerHTML = Number(ekaNumero) - Number(tokaNumero);
        document.getElementById("vastaus2b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus2c").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 2){ document.getElementById("vastaus2b").innerHTML = Number(ekaNumero) - Number(tokaNumero);
        document.getElementById("vastaus2a").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus2c").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 3){ document.getElementById("vastaus2c").innerHTML = Number(ekaNumero) - Number(tokaNumero);
        document.getElementById("vastaus2b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus2a").innerHTML = getRndInteger(1,30);
    }
    }
        if(i==3){
        let oikeaVastaus = getRndInteger(1,3);
        if(oikeaVastaus == 1){ document.getElementById("vastaus3a").innerHTML = Number(ekaNumero) * Number(tokaNumero)
        document.getElementById("vastaus3b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus3c").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 2){ document.getElementById("vastaus3b").innerHTML = Number(ekaNumero) * Number(tokaNumero)
        document.getElementById("vastaus3a").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus3c").innerHTML = getRndInteger(1,30);}
        if(oikeaVastaus == 3){ document.getElementById("vastaus3c").innerHTML = Number(ekaNumero) * Number(tokaNumero)
        document.getElementById("vastaus3b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus3a").innerHTML = getRndInteger(1,30);
    }
    }
        if(i==4){
        let oikeaVastaus = getRndInteger(1,3);
        if(oikeaVastaus == 1){ document.getElementById("vastaus4a").innerHTML = Number(ekaNumero) / Number(tokaNumero)
        document.getElementById("vastaus4b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus4c").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 2){ document.getElementById("vastaus4b").innerHTML = Number(ekaNumero) / Number(tokaNumero)
        document.getElementById("vastaus4c").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus4a").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 3){ document.getElementById("vastaus4c").innerHTML = Number(ekaNumero) / Number(tokaNumero)
        document.getElementById("vastaus4b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus4a").innerHTML = getRndInteger(1,30);}
    }
        if(i==5){
        let oikeaVastaus = getRndInteger(1,3);
        if(oikeaVastaus == 1){ document.getElementById("vastaus5a").innerHTML = Number(ekaNumero) + Number(tokaNumero)
        document.getElementById("vastaus5b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus5c").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 2){ document.getElementById("vastaus5b").innerHTML = Number(ekaNumero) + Number(tokaNumero)
        document.getElementById("vastaus5a").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus5c").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 3){ document.getElementById("vastaus5c").innerHTML = Number(ekaNumero) + Number(tokaNumero)
        document.getElementById("vastaus5b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus5a").innerHTML = getRndInteger(1,30);
    }
    }
        if(i==6){
        let oikeaVastaus = getRndInteger(1,3);
        if(oikeaVastaus == 1){ document.getElementById("vastaus6a").innerHTML = Number(ekaNumero) - Number(tokaNumero)
        document.getElementById("vastaus6b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus6c").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 2){ document.getElementById("vastaus6b").innerHTML = Number(ekaNumero) - Number(tokaNumero)
        document.getElementById("vastaus6c").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus6a").innerHTML = getRndInteger(1,30);
    }
        if(oikeaVastaus == 3){ document.getElementById("vastaus6c").innerHTML = Number(ekaNumero) - Number(tokaNumero)
        document.getElementById("vastaus6b").innerHTML = getRndInteger(1,30);
        document.getElementById("vastaus6a").innerHTML = getRndInteger(1,30);
    }
    }
    }
}

function tehtavaYksi(){
    let a;
}