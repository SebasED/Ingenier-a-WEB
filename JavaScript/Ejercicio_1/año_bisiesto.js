function añoBisiesto() {
    año =  document.getElementById("año").value;
    console.log(año)
    if (año % 4 == 0) {
        if (año % 100 == 0) {
            if (año % 400 == 0) {
                document.getElementById("resBisiesto").innerHTML = " Es bisiesto"
            } else {
                document.getElementById("resBisiesto").innerHTML = " No es bisiesto"
            }
        } else {
            document.getElementById("resBisiesto").innerHTML = " Es bisiesto"
        }
    } else{
        document.getElementById("resBisiesto").innerHTML = " No es bisiesto"
    }
}