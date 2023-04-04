/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/



const numeriCasuali = []

const container = document.querySelector('#container')

const ul = document.createElement('ul')

container.append(ul)

//? FUNZIONE NUMERO RANDOM DA 1 A 100
function myRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

for (let i = 0; i < 5; i++) {
    numeriCasuali.push(myRandom());
    ul.innerHTML += `<li>${numeriCasuali[i]}</li>`;
}


setTimeout(function () {
    ul.innerHTML = '';
    
    const numeriInseriti = [];
    
    for (let i = 0; i < 5; i++) {
        const numeroInserito = parseInt(prompt('Inserisci il numero che hai visto'));
        numeriInseriti.push(numeroInserito);
    }

    const numeriIndovinati = [];

    for (let i = 0; i < 5; i++) {
        if (numeriCasuali.includes(numeriInseriti[i]) && !numeriIndovinati.includes(numeriInseriti[i])) {
            numeriIndovinati.push(numeriInseriti[i]);
        }
    }

    const risultato = `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(', ')}`;
    alert(risultato);
    
}, 5000);