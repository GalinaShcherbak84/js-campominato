var numeroMax=10;
var numeroBombe = 2;
var listaBombe = [];
var possibilita = 2;
var numeriConsentiti = [];
var utente = 0;
// scelta livello difficoltà
var livello = parseInt(prompt('Scegli la difficoltà da 0 a 2').trim());
while(isNaN(livello) || livello < 0 || livello > 2){
    livello = parseInt(prompt('Scegli la difficoltà da 0 a 2').trim());
} 
switch(livello){
    case 0:
        numeroMax =10;
        break;
    case 1:
        numeroMax = 8;
        break;
    case 2:
        numeroMax = 5;
               
} 
possibilita = numeroMax - numeroBombe;

//creare bombe
while(listaBombe.length < numeroBombe){
    var bomba = numeroRandom(numeroMax);
    if(! listaBombe.includes(bomba)){
        listaBombe.push(bomba);
    }
}
console.log('lista bombe: ' + listaBombe);

//controllare se il numero inserito dall'utente c'è nella lista delle bombe
//controllare il numero delle possibilità
while((numeriConsentiti.length < possibilita)&&(! listaBombe.includes(utente))){
    //scelta utente
    utente = parseInt(prompt('Inserisci un numero da 1 a ' + numeroMax + '\nTentativi riusciti: ' + numeriConsentiti.length
    + ' di ' + possibilita));
    //validazione
    while(isNaN(utente)|| utente < 1 || utente > numeroMax){
        utente = parseInt(promt('Valore non valido, inserisci un numero da 1 a ' + numeroMax))
    }
    console.log(utente);
    
    if(listaBombe.includes(utente)){
        alert('Hai perso. Hai provato con successo ' + numeriConsentiti.length + ' volte prima di trovare la bomba');
    }else if(numeriConsentiti.includes(utente)){
        alert("Qusto numero è già stato inserito prima, inserisci un'altro numero.");
    }else if (!numeriConsentiti.includes(utente)){
        numeriConsentiti.push(utente);
    }
    //controllo il numero possibilità
    if(numeriConsentiti.length === possibilita){
        alert('Hai vinto!');
    }
}


// function per generare i numeri random(bombe)
function numeroRandom(max){
    return Math.floor(Math.random() * max) + 1;
}