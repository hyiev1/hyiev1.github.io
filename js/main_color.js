var iCount = 0;


function changeColor() {

    document.getElementById("center_main_text").style.color = iCount.toString();

    iCount += 100
    setTimeout(500);
}
changeColor();