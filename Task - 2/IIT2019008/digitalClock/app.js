function change(){
    var all = new Date();
    var req = [all.getHours(),all.getMinutes(),all.getSeconds()];
    for (var i=0; i<3; i++){
        req[i] = String(req[i]);
        if (req[i].length==1){
            req[i] = 0+req[i];
        }
    }
    document.querySelector(".hour").textContent = req[0];
    document.querySelector(".minute").textContent = req[1];
    document.querySelector(".second").textContent = req[2];
}
change();
setInterval(change, 1000);