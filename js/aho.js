
function checkIndependency() {
let oikein = document.getElementById('b1').checked;
if (oikein){
    document.getElementById('demo').innerHTML =
    'oikein meni';
    }else {
        document.getElementById('demo').innerHTML =
        'Väärin meni';
    }
}

function vastaus1() {
    let oikein = document.getElementById('a3').checked;
    if (oikein){
        document.getElementById('demo2').innerHTML =
        'oikein meni';
        }else {
            document.getElementById('demo2').innerHTML =
            'Väärin meni';
        }
    }

    function vastaus2() {
        let oikein = document.getElementById('a4').checked;
        if (oikein){
            document.getElementById('demo3').innerHTML =
            'oikein meni';
            }else {
                document.getElementById('demo3').innerHTML =
                'Väärin meni';
            }
        }

        function vastaus3() {
            let oikein = document.getElementById('c5').checked;
            if (oikein){
                document.getElementById('demo4').innerHTML =
                'oikein meni';
                }else {
                    document.getElementById('demo4').innerHTML =
                    'Väärin meni';
                }
            }
    

    