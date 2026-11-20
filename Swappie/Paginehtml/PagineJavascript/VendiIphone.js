const buttonStimaValoreIphone = document.getElementById("buttonStimaValoreIphone");
const domandaEsciRisposta = Array.from(document.getElementsByClassName("divDelleDomande"));
const rispostaNascosta = Array.from(document.getElementsByClassName("pRisposteNascoste"));

//serve per non far schiacciare il bottone per stimare il prezzo dell'iPhone se non ne ha selezionato uno
buttonStimaValoreIphone.disabled = true;

//se una risposta è visibile la rende display = none; e esce dalla funzione, altrimenti rende tutte le risposte
//display = none; e alla fine fa vedere la risposta alla domanda schacciata
domandaEsciRisposta.forEach((domanda, indice) => {
    domanda.addEventListener('click', () => {

        //rende invisibile la risposta alla domanda schiacciata se prima era visibile 
        const risposta = rispostaNascosta[indice];
        if(risposta.style.display === 'block'){
            risposta.style.display = 'none';
            return;
        }

        //nasconde tutte le risposte
        rispostaNascosta.forEach(risposta => {
            risposta.style.display = 'none';
        });

        //rende visibile il p della risposta
        risposta.style.display = 'block';
    });
});