function Chill(){
    var s = document.getElementById("spe").value;
    var t = document.getElementById("temp").value;
    var f = 35.74 + 0.6215*(t)- 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    var k = (f - 32) * 5/9 + 273.15;
    var round = Math.round(k);
    document.getElementById("wind").innerHTML = round + " °K";
}