// INSERISCO L'URL DELL' API IN UNA VARIABILE
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"
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
    let cards = document.getElementById("cards");
    // CICLO PER INSERIRE NELLA CARD I VALORI CHE PRENDO DALL'API
    for( i = 0 ; i < data.length ; i++){
        cards.innerHTML += 
        `
        <div class="container bg-white col-4 card">
                    <img src="./img/pin.svg" alt="" class="pin">
                    <img src="${data[i].url}" alt="" class="foto">
                    <p class="date">${data[i].date}</p>
                    <p class="titolo">${data[i].title}</p>
                 </div>
        `
    }
})
// SE CI SONO ERRORI LI STAMPO IN CONSOLE
.catch(error=>{
    console.log(error);
    
})
