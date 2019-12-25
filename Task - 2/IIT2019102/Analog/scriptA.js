function time() {
    let day = new Date();
    let hou = day.getHours();
    let min = day.getMinutes();
    let sec =  day.getSeconds();
    let houd = document.getElementById("hours");
    houd.style.transform = "rotate(" + (180 + (hou/12)*360) + "deg)";
    let mind = document.getElementById("minutes");
    mind.style.transform = "rotate(" + (180 + (min/60)*360) + "deg)";
    let secd = document.getElementById("seconds");
    secd.style.transform = "rotate(" + (180 + (sec/60)*360) + "deg)";
}

setInterval(time, 1000);


