// INSERISCO L'URL DELL' API IN UNA VARIABILE
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

// ASSEGNO UNA COSTANTE ALL'OVERLAY
const overlay = document.getElementById("blackBackground")

const overlayPhoto = document.getElementById("fotoOverlay")

const button = document.getElementById("button")

//PRENDO I DATI DALL'API
axios.get(endpoint)
.then(responseObj =>{

    //SALVO LA RISPOSTA DELL'API 
    let debug = responseObj;
    console.log(debug);
    

    // PRENDO LA PARTE DEI DATI
    let data = responseObj.data;

    // DEBUG
    console.log(data);

    // CREO VARIABILE PER POI AGGIUNGERE LE SINGOLE CARD
    const cardContainer = document.getElementById("card-container");

    // CICLO PER INSERIRE NELLA CARD I VALORI CHE PRENDO DALL'API
    for( i = 0 ; i < data.length ; i++){
        cardContainer.innerHTML += 
        `
        <div class="container bg-white col-sm-12 col-md-5 col-lg-3 card">
            <img src="./img/pin.svg" alt="" class="pin">
            <img src="${data[i].url}" alt="" class="foto">
            <p class="date">${data[i].date}</p>
            <p class="titolo">${data[i].title}</p>
        </div>
        `
    }

    // SELEZIONO TUTTE LE CARD
    let cards = document.getElementsByClassName("card");
    console.log(cards);
    
    
    // SETTO L'INDEX PER IL CHECK DEL CICLO
    let currentIndex = 0;
    
    // CICLO LE FOTO E AGGIUNGO UN EVENT LISTENER CHE QUANDO LE PREMO CREA E APRE L'OVERLAY
    for (let i = 0; i < cards.length; i++) {
        // SETTO UNA VARIABILE PER TENERE MEMORIA DI QUALE CARD STIA VENENDO UTILIZZATA
        let currentCard = cards[i];
        // DEBUG
        console.log(currentCard);

        currentCard.addEventListener('click', () => {
            // AL CLICK SU UNA DELLE CARD RIMUOVO IL DISPLAY NONE ALL'OVERLAY
            overlay.classList.remove("d-none");

            // SEGNO A QUALE ITERAZIONE SONO (QUINDI TROVO L'INDICE DELLA FOTO SU CUI HO CLICKATO NELL'ARRAY "CARDS")
            currentIndex = i;
            // DEBUG
            console.log(currentIndex);
            
            // MODIFICO L'URL DELL'IMMAGINE ASSEGNANDOCI QUELLO DELL'API 
            overlayPhoto.src = `${data[currentIndex].url}`
            // DEBUG
            console.log(overlayPhoto);
                       
        })
    }
})


// SE CI SONO ERRORI LI STAMPO IN CONSOLE
.catch(error=>{
    console.log(error);
    
})

// AGGIUNGO EVENT LISTENER PER IL BOTTONE DI CHIUSURA OVERLAY
button.addEventListener('click', ()=>{
    // AGGIUNGO ALL'OVERLAY IL DISPLAY NONE
    overlay.classList.add("d-none");
})
