// Author: Giuseppe Raineri
// Date: 20-02-2024

//variabili costo
let costoHambuger = 0;
let costoCotoletta = 0;
let costoVegano = 0;
let costoSalmone = 0;
let costoLattuga = 0;
let costoPomodoro = 0;
let costoBacon = 0;
let costoMaionese = 0;
let risultato = 0;


//Chiede il nome al caricamento
const titolo = document.getElementById("titolo");
const nome = document.createTextNode(prompt("Inserisci il tuo nome"));
titolo.appendChild(nome);

// Reset conto
const spanTotale = document.createElement("span");
spanTotale.innerHTML="";
const spanSconto = document.createElement("span");
spanSconto.innerHTML= "";



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
const codice = document.getElementById("codice");

button.addEventListener("click", function () {
    // controllo ingrediente principale selezionato
    if(hamburger.checked==false && cotoletta.checked==false && vegano.checked==false && salmone.checked==false){
        alert("Seleziona almeno un ingrediente principale");
    }
    // Calcola la somma dei singoli costi
    risultato = costoHambuger + costoCotoletta + costoVegano + costoSalmone + costoLattuga + costoPomodoro + costoBacon + costoMaionese;
    
    const totale = document.getElementById("totale");
    const totaleSconto = document.getElementById("totaleSconto");
    spanTotale.textContent = risultato;
    
    totale.appendChild(spanTotale);
    

    //Controllo coupon inserito da tastiera se corrisponde stampa prezzo scontato
    if(codice.value==="BANANA12"){
        spanSconto.textContent = risultato - (risultato/100 *12);
        totaleSconto.appendChild(spanSconto);
    }
});


//funzione codice sconto
function coupon() {
    alert("Il codice sconto segreto è: BANANA12");
}

//funzione escluisività check ed assegnazione prezzo ingrediente principale
function changeChecked() {
    if(hamburger.checked==true){
        cotoletta.setAttribute("disabled", "disabled");
        vegano.setAttribute("disabled", "disabled");
        salmone.setAttribute("disabled", "disabled");
        costoHambuger = 2.50;
        costoCotoletta = 0;
        costoVegano = 0;
        costoSalmone = 0;
    } else if(cotoletta.checked==true){
        hamburger.setAttribute("disabled", "disabled");
        vegano.setAttribute("disabled", "disabled");
        salmone.setAttribute("disabled", "disabled");
        costoHambuger = 0;
        costoCotoletta = 2;
        costoVegano = 0;
        costoSalmone = 0;
    } else if(vegano.checked==true){
        hamburger.setAttribute("disabled", "disabled");
        cotoletta.setAttribute("disabled", "disabled");
        salmone.setAttribute("disabled", "disabled");
        costoHambuger = 0;
        costoCotoletta = 0;
        costoVegano = 3.50;
        costoSalmone = 0;
    } else if(salmone.checked==true){
        hamburger.setAttribute("disabled", "disabled");
        cotoletta.setAttribute("disabled", "disabled");
        vegano.setAttribute("disabled", "disabled");
        costoHambuger = 0;
        costoCotoletta = 0;
        costoVegano = 0;
        costoSalmone = 3;
    } else {
        hamburger.removeAttribute("disabled");
        cotoletta.removeAttribute("disabled");
        vegano.removeAttribute("disabled");
        salmone.removeAttribute("disabled");
        costoHambuger = 0;
        costoCotoletta = 0;
        costoVegano = 0;
        costoSalmone = 0;
    }
}

// Funzione aggiornamento prezzi supplementi
function price() {
    if(lattuga.checked==true){
        costoLattuga = 1;
    } else {
        costoLattuga = 0;
    }
    if(pomodoro.checked==true){
        costoPomodoro = 1;
    } else {
        costoPomodoro = 0;
    }
    if(bacon.checked==true){
        costoBacon = 1.50;
    } else {
        costoBacon = 0;
    }
    if(maionese.checked==true){
        costoMaionese = 0.50;
    } else {
        costoMaionese = 0;
    }
}

