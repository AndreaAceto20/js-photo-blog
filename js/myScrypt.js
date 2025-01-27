// INSERISCO L'URL DELL' API IN UNA VARIABILE
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"


// ASSEGNO UNA COSTANTE ALL'OVERLAY
const overlay = document.getElementById("blackbackground")

const overlayPhoto = document.getElementById("fotooverlay")

const button = document.getElementById("button")

// PRENDO I DATI DALL'API
axios.get(endpoint)
.then(responseObj =>{

    //SALVO LA RISPOSTA DELL'API 
    let debug = responseObj;

    // PRENDO LA PARTE DEI DATI
     let data = responseObj.data;

    // STAMPO IN CONSOLE PER DEBUG
    console.log(data);

    // CREO VARIABILE PER POI AGGIUNGERE LE SINGOLE CARD
    let cardContainer = document.getElementById("card-container");

    // CICLO PER INSERIRE NELLA CARD I VALORI CHE PRENDO DALL'API
    for( i = 0 ; i < data.length ; i++){
        cardContainer.innerHTML += 
        `
        <div class="container bg-white col-sm-11 col-md-5 col-lg-3 card">
                    <img src="./img/pin.svg" alt="" class="pin">
                    <img src="${data[i].url}" alt="" class="foto">
                    <p class="date">${data[i].date}</p>
                    <p class="titolo">${data[i].title}</p>
                 </div>
        `
    }

    // SELEZIONO TUTTE LE CARD
    let cards = document.getElementsByClassName("foto");
    

    let currentIndex = 0;
    
    // CICLO LE FOTO E AGGIUNGO UN EVENT LISTENER CHE QUANDO LE PREMO CREA E APRE L'OVERLAY
    for (let i = 0; i < cards.length; i++) {
        let currentCard = cards[i];
        console.log(currentCard);

        currentCard.addEventListener('click', () => {
            overlay.classList.remove("d-none");

            currentIndex = i;
            console.log(currentIndex);

            overlayPhoto.src = `${data[currentIndex].url}`
            console.log(overlayPhoto);
            
            
        })
    }
})


// SE CI SONO ERRORI LI STAMPO IN CONSOLE
.catch(error=>{
    console.log(error);
    
})

button.addEventListener('click', ()=>{
    overlay.classList.add("d-none")
    overlayPhoto.src = "";
})
