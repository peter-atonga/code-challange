function speedLimit() {
    let speed = Number(prompt("input your speed here"));
    let points = 0;
    if (speed < 70) {
        return alert("ok")
    }
    else if((points=Math.floor(speed-70))/5>12){
        return alert("Licence cancelled")
    }
    else
        return alert( "points: " + points)
}
    return speed