// Author: Giuseppe Raineri
// Date: 20-02-2024


//Chiede il nome al caricamento
const titolo = document.getElementById("titolo");
const nome = document.createTextNode(prompt("Inserisci il tuo nome"));
titolo.appendChild(nome);


let risultato = 10;

//Puntatori ad html
const hamburger = document.getElementById("hambuger");
const cotoletta = document.getElementById("cotoletta");
const vegano = document.getElementById("vegano");
const salmone = document.getElementById("salmone");
const lattuga = document.getElementById("lattuga");
const pomodoro = document.getElementById("pomodoro");
const bacon = document.getElementById("bacon");
const maionese = document.getElementById("maionese");
const button = document.getElementById("button");

button.addEventListener("click", function () {
    const totale = document.getElementById("totale");
    const sTotale = document.createElement("span");
    const totaleSconto = document.getElementById("totaleSconto");
    sTotale.textContent = risultato;
    totale.appendChild(sTotale);
    //totaleSconto.appendChild(risultato - (risultato/100 *12));

    // if()  per controllare se il coupon è valido dopodiche far spuntare il risultato scontato
});


//funzione codice sconto
function codice() {
    alert("Il codice sconto segreto è: BANANA12");
}

//funzione escluisività check
function changeChecked() {
    if(hamburger.checked==true){
        cotoletta.setAttribute("disabled", "disabled");
        vegano.setAttribute("disabled", "disabled");
        salmone.setAttribute("disabled", "disabled");
    } else if(cotoletta.checked==true){
        hamburger.setAttribute("disabled", "disabled");
        vegano.setAttribute("disabled", "disabled");
        salmone.setAttribute("disabled", "disabled");
    } else if(vegano.checked==true){
        hamburger.setAttribute("disabled", "disabled");
        cotoletta.setAttribute("disabled", "disabled");
        salmone.setAttribute("disabled", "disabled");
    } else if(salmone.checked==true){
        hamburger.setAttribute("disabled", "disabled");
        cotoletta.setAttribute("disabled", "disabled");
        vegano.setAttribute("disabled", "disabled");
    } else {
        hamburger.removeAttribute("disabled");
        cotoletta.removeAttribute("disabled");
        vegano.removeAttribute("disabled");
        salmone.removeAttribute("disabled");
    }
}



// Fare logica checkbox e totale