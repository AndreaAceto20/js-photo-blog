const endpoint = "https://lanciweb.github.io/demo/api/pictures/"



axios.get(endpoint)
.then(responseObj =>{
    let debug = responseObj;
    var data = responseObj.data;
    var lenght = data.lenght;
    console.log(lenght);
    
    console.log(data[1].url);
    
    let cards = document.getElementById("cards");

    for( i = 0 ; i < 6 ; i++){
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
.catch(error=>{
    console.log(error);
    
})
