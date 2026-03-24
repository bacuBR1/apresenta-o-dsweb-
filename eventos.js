var abrir = false;

function mude() {
    const box = document.getElementById("box");
        abrir = !abrir;
        if (abrir === true) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
}