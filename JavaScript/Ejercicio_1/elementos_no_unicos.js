function elementosNoUnicos() {
    const x = Array.from(document.getElementById("numberArray").value);
    let conteo = {};
    
    x.forEach((valor) => {
        if (conteo[valor]) {
            conteo[valor] += 1;
        }else{
            conteo[valor] = 1;
        }
    });
    console.log(x);
    for (let index = 0; index < x.length; index++) {
        if (conteo[x[index]] == 1) {
            x.splice(index, 1);
        }
    }

    document.getElementById("newArray").innerHTML = x;
    console.log(x);
    console.log(conteo);
}

