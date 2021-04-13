
function pangrama() {
    var texto = document.getElementById("texto").value;
    texto = texto.toLowerCase();
    const alfabeto = "abcdefghijklmnñopqrstuvwxyz";
    let alfabeto_arreglo = Array.from(alfabeto);
    esta = false;
    for (let index = 0; index < alfabeto.length; index++) {
        let letra = alfabeto_arreglo[index];
        
        if (!texto.includes(letra)) {
            document.getElementById("resPangrama").innerHTML = "No es pangrama"
            console.log("No es pangrama");
            esta = false;
            break;
        }
        esta = true;
    }
    
    if (esta) {
        document.getElementById("respuesta").innerHTML = "Es pangrama"
        console.log("Es pangrama");
    }
    
}
