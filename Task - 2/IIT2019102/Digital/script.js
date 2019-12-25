
function time() {
    let day = new Date();
    let time = "";
    if (day.getHours() < 10) {
        time += "0" + day.getHours();
    }
    else {
        time += day.getHours();
    }
    time += ":";
    if (day.getMinutes() < 10) {
        time += "0" +day.getMinutes();
    }
    else {
        time += day.getMinutes();
    }
    time += ":";
    if (day.getSeconds() < 10) {
        time += "0" + day.getSeconds();
    }
    else {
        time += day.getSeconds();
    }
    let ptag = document.getElementById("time");
    ptag.innerText = time;
}

setInterval(time, 1000);
