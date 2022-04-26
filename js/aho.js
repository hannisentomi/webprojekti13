
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