function converToRoman(){
    var x = document.getElementById("intNum").value;
    var y = "";
    //var romanos = {1:I, 4:IV, 5:V, 9:IX, 10:X, 40:XL, 50:L, 90:XC, 100:C, 400:CD, 500:D, 900:DM, 1000:M}
    var romanos = {M:1000, DM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}
    for (const key in romanos){
        while(x >= romanos[key]){
        y = y + key;
        x = x - romanos[key];
        }
    }
    document.getElementById("numRoman").innerHTML = y;
}
