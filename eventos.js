var abrir = false;
var abrir2= false;
var abrir3= false;
var abrir4= false;


function mude() {
    const box = document.getElementById("box");
        abrir = !abrir;
        if (abrir === true) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
}

function mude2() {
    const box = document.getElementById("box2");
        abrir2 = !abrir2;
        if (abrir2 === true) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
}

function mude3() {
    const box = document.getElementById("box3");
        abrir3 = !abrir3;
        if (abrir3 === true) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
}

function mude4() {
    const box = document.getElementById("box4");
        abrir4 = !abrir4;
        if (abrir4 === true) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
}