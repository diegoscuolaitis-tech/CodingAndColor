console.log("Inizio controllo esecuzione")
let d = new Date();
console.log(d);
document.getElementById('saluto').innerHTML = "Oggi è " + d;
let colori = [];
let i =0;

    function elabora(){
        let numero = document.getElementById('inNumber').value;
        console.log(numero);
        alert(numero)
        let testo = document.getElementById('inText').value;
        console.log(testo)

        if (numero >= 0 && numero <= 255){
            colori.push(numero);
            document.getElementById('error').innerHTML = "Hai inserito il numero " + numero;
            console.log(colori);
            document.getElementById('error').innerHTML += "<br> I colori sono " + colori;
            i++;
            if(i == 3){
                let newColor = `rgb(${colori[0]},${colori[1]},${colori[2]})`;
                document.getElementById("outText").style.color=newColor;
                return;
            }
        } else {
            document.getElementById("error").innerHTML = "Il numero scelto è sbagliato"
            document.getElementById("outText").innerHTML = numero;
        }
    }

function reset() {
    document.getElementById("inNumber").value="";
    document.getElementById("outText").innerHTML="Output";
    document.getElementById("error").innerText="Errori"
    document.getElementById("inText").value="";
}