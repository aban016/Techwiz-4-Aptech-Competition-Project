let items = [
    {
      "title": "Phoenix palm",
      "scientific_name": "Phoenix dactylifera",
      "country_of_origin": "Middle East",
      "light_requirement": "Full sun to partial shade",
      "watering": "Moderate, allowing the soil to dry out slightly between waterings",
      "img": "image/indoor1.png",
      "price":"2.00"
    },
    {
      "title": "Elephanta",
      "scientific_name": "Adansonia digitata",
      "country_of_origin": "Africa",
      "light_requirement": "Full sun",
      "watering": "Low, drought-tolerant once established",
      "img": "image/indoor2.png",
      "price":"2.99"
    },
    {
      "title": "Areca palm",
      "scientific_name": "Dypsis lutescens",
      "country_of_origin": "Madagascar",
      "light_requirement": "Bright indirect light",
      "watering": "Moderate, keeping the soil consistently moist",
      "img": "image/indoor3.png",
      "price":"1.00"
    },
    {
      "title": "Codiaeum",
      "scientific_name": "Codiaeum variegatum",
      "country_of_origin": "Southeast Asia",
      "light_requirement": "Bright, indirect light",
      "watering": "Regular watering, allowing the top inch of soil to dry between waterings",
      "img": "image/indoor4.png",
      "price":"1.99"
    },
    {
      "title": "Spider plant",
      "scientific_name": "Chlorophytum comosum",
      "country_of_origin": "Southern Africa",
      "light_requirement": "Indirect light to partial shade",
      "watering": "Moderate, letting the soil dry between waterings",
      "img": "image/indoor5.png",
      "price":"3.00"
    },
    {
      "title": "Rhapis palm",
      "scientific_name": "Rhapis excelsa",
      "country_of_origin": "Southern China",
      "light_requirement": "Indirect light to shade",
      "watering": "Regular watering to keep the soil consistently moist",
      "img": "image/indoor6.png",
      "price":"1.00"
    },
    {
      "title": "Schefflera plant",
      "scientific_name": "Schefflera spp.",
      "country_of_origin": "Australia, New Guinea",
      "light_requirement": "Indirect light to partial sun",
      "watering": "Moderate, allowing the top inch of soil to dry out before watering",
      "img": "image/indoor7.png",
      "price":"2.00"
    },
    {
      "title": "English Ivy",
      "scientific_name": "Hedera helix",
      "country_of_origin": "Europe",
      "light_requirement": "Part to full shade",
      "watering": "Regular watering, keeping the soil evenly moist but not waterlogged",
      "img": "image/indoor8.png",
      "price":"2.99"
    },
    {
      "title": "Ferns",
      "scientific_name": "Various genera and species",
      "country_of_origin": "Global (varies by species)",
      "light_requirement": "Low to indirect light",
      "watering": "Consistently moist soil, avoiding waterlogging",
      "img": "image/indoor9.png",
      "price":"3.00"
    },
    {
      "title": "Lemon grass",
      "scientific_name": "Cymbopogon citratus",
      "country_of_origin": "Tropical Asia",
      "light_requirement": "Full sun",
      "watering": "Regular watering, keeping the soil evenly moist",
      "img": "image/indoor10.png",
      "price":"2.00"
    },
    {
      "title": "Chinese evergreen",
      "scientific_name": "Aglaonema spp.",
      "country_of_origin": "Southeast Asia",
      "light_requirement": "Low to indirect light",
      "watering": "Allowing the top inch of soil to dry before watering",
      "img": "image/indoor11.png",
      "price":"3.99"
    },
    {
      "title": "Cactus",
      "scientific_name": "Various genera and species",
      "country_of_origin": "Americas",
      "light_requirement": "Full sun",
      "watering": "Sparse watering, allowing the soil to dry out between waterings",
      "img": "image/indoor12.png",
      "price":"2.00"
    },
    {
      "title": "Calathea",
      "scientific_name": "Calathea spp.",
      "country_of_origin": "South America",
      "light_requirement": "Indirect light",
      "watering": "Consistently moist soil, not allowing it to dry out completely",
      "img": "image/indoor13.png",
      "price":"1.99"
    },
    {
      "title": "Strelitzia",
      "scientific_name": "Strelitzia reginae",
      "country_of_origin": "South Africa",
      "light_requirement": "Full sun to bright light",
      "watering": "Regular watering, allowing the top inch of soil to dry before watering",
      "img": "image/indoor14.png",
      "price":"1.00"
    },
    {
      "title": "Croton",
      "scientific_name": "Codiaeum variegatum",
      "country_of_origin": "Malaysia, Pacific Islands",
      "light_requirement": "Bright light",
      "watering": "Moderate watering, allowing the top inch of soil to dry between waterings",
      "img": "image/indoor15.png",
      "price":"2.00"
    },
    {
      "title": "Table palm",
      "scientific_name": "Chamaedorea elegans",
      "country_of_origin": "Mexico, Central America",
      "light_requirement": "Indirect light to shade",
      "watering": "Consistently moist soil, not letting it dry out completely",
      "img": "image/indoor16.png",
      "price":"2.99"
    },
    {
      "title": "Roses",
      "scientific_name": "Rosa spp.",
      "country_of_origin": "Asia, Europe, North America",
      "light_requirement": "Full sun",
      "watering": "Regular watering, keeping the soil evenly moist",
      "img": "image/outdoor1.png",
      "price":"1.99"
    },
    {
      "title": "Lavender",
      "scientific_name": "Lavandula spp.",
      "country_of_origin": "Mediterranean region",
      "light_requirement": "Full sun",
      "watering": "Low to moderate watering, allowing the soil to dry between waterings",
      "img": "image/outdoor2.png",
      "price":"2.99"
    },
    {
      "title": "Tulips",
      "scientific_name": "Tulipa spp.",
      "country_of_origin": "Central Asia",
      "light_requirement": "Full sun to partial shade",
      "watering": "Moderate watering, keeping the soil evenly moist",
      "img": "image/outdoor3.png",
      "price":"2.00"
    },
    {
      "title": "Sunflowers",
      "scientific_name": "Helianthus annuus",
      "country_of_origin": "North America",
      "light_requirement": "Full sun",
      "watering": "Regular watering, allowing the soil to dry slightly between waterings",
      "img": "image/outdoor4.png",
      "price":"1.99"
    },
    {
      "title": "Lilies",
      "scientific_name": "Lilium spp.",
      "country_of_origin": "Various regions",
      "light_requirement": "Full sun to partial shade",
      "watering": "Regular watering, keeping the soil consistently moist",
      "img": "image/outdoor5.png",
      "price":"4.00"
    },
    {
      "title": "Hydrangeas",
      "scientific_name": "Hydrangea spp.",
      "country_of_origin": "Asia, Americas",
      "light_requirement": "Indirect light to partial sun",
      "watering": "Regular watering, maintaining consistently moist soil",
      "img": "image/outdoor6.png",
      "price":"3.99"
    },
    {
      "title": "Geraniums",
      "scientific_name": "Pelargonium spp.",
      "country_of_origin": "South Africa",
      "light_requirement": "Full sun",
      "watering": "Moderate watering, allowing the soil to dry slightly between waterings",
      "img": "image/outdoor7.png",
      "price":"2.00"
    },
    {
      "title": "Peonies",
      "scientific_name": "Paeonia spp.",
      "country_of_origin": "Asia, Europe, North America",
      "light_requirement": "Full sun to partial shade",
      "watering": "Regular watering, keeping the soil evenly moist",
      "img": "image/outdoor8.png",
      "price":"2.00"
    },
    {
      "title": "Daffodils",
      "scientific_name": "Narcissus spp.",
      "country_of_origin": "Europe, North Africa",
      "light_requirement": "Full sun to partial shade",
      "watering": "Regular watering, allowing the soil to dry between waterings",
      "img": "image/outdoor9.png",
      "price":"1.00"
    },
    {
      "title": "Pansies",
      "scientific_name": "Viola tricolor var. hortensis",
      "country_of_origin": "Europe, Western Asia",
      "light_requirement": "Full sun to partial shade",
      "watering": "Regular watering, keeping the soil evenly moist",
      "img": "image/outdoor10.png",
      "price":"1.99"
    },
    {
      "title": "Petunias",
      "scientific_name": "Petunia spp.",
      "country_of_origin": "South America",
      "light_requirement": "Full sun",
      "watering": "Regular watering, allowing the soil to dry slightly between waterings",
      "img": "image/outdoor11.png",
      "price":"3.00"
    },
    {
      "title": "Salvia",
      "scientific_name": "Salvia spp.",
      "country_of_origin": "Americas, Europe, Asia",
      "light_requirement": "Full sun",
      "watering": "Low to moderate watering, allowing the soil to dry between waterings",
      "img": "image/outdoor12.png",
      "price":"2.00"
    },
    {
      "title": "Marigolds",
      "scientific_name": "Tagetes spp.",
      "country_of_origin": "Americas, Africa",
      "light_requirement": "Full sun",
      "watering": "Moderate watering, allowing the soil to dry between waterings",
      "img": "image/outdoor13.png",
      "price":"1.99"
    },
    {
      "title": "Zinnias",
      "scientific_name": "Zinnia spp.",
      "country_of_origin": "Americas",
      "light_requirement": "Full sun",
      "watering": "Moderate watering, allowing the soil to dry between waterings",
      "img": "image/outdoor14.png",
      "price":"2.00"
    },
    {
      "title": "Cannas",
      "scientific_name": "Canna spp.",
      "country_of_origin": "Americas",
      "light_requirement": "Full sun to partial shade",
      "watering": "Regular watering, keeping the soil consistently moist",
      "img": "image/outdoor15.png",
      "price":"3.00"
    },
    {
      "title": "Fuchsias",
      "scientific_name": "Fuchsia spp.",
      "country_of_origin": "Central and South America",
      "light_requirement": "Filtered light to partial shade",
      "watering": "Consistently moist soil, not letting it dry out completely",
      "img": "image/outdoor16.png",
      "price":"0.99"
    },
    {
      "title": "Daylilies",
      "scientific_name": "Hemerocallis spp.",
      "country_of_origin": "Asia, Europe",
      "light_requirement": "Full sun to partial shade",
      "watering": "Regular watering, allowing the soil to dry between waterings",
      "img": "image/outdoor17.png",
      "price":"2.99"
    },
    {
      "title": "Jasmine",
      "scientific_name": "Jasminum spp.",
      "country_of_origin": "Tropical and subtropical regions",
      "light_requirement": "Full sun to partial shade",
      "watering": "Regular watering, keeping the soil consistently moist",
      "img": "image/outdoor18.png",
      "price":"3.00"
    },
    {
        "title": "Aloe vera",
        "scientific_name": "Aloe vera",
        "country_of_origin": "Arabian Peninsula",
        "light_requirement": "Bright indirect light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent1.png",
        "price": "2.00"
  
    },
    {
        "title": "Jade plant",
        "scientific_name": "Crassula ovata",
        "country_of_origin": "South Africa",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry out before watering",
        "img": "image/succulent2.png",
        "price": "2.99"
    },
    {
        "title": "Echeveria",
        "scientific_name": "Echeveria spp.",
        "country_of_origin": "Mexico, Central and South America",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry out between waterings",
        "img": "image/succulent3.png",
        "price": "2.00"
  
    },
    {
        "title": "Zebra cactus",
        "scientific_name": "Haworthiopsis attenuata",
        "country_of_origin": "South Africa",
        "light_requirement": "Indirect light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent4.png",
        "price": "3.99"
  
    },
    {
        "title": "String of pearls",
        "scientific_name": "Senecio rowleyanus",
        "country_of_origin": "South Africa",
        "light_requirement": "Bright indirect light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent5.png",
        "price": "1.99"
    },
    {
        "title": "Burro's tail",
        "scientific_name": "Sedum morganianum",
        "country_of_origin": "Mexico",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent6.png",
        "price": "2.00"
    },
    {
        "title": "Crown of thorns",
        "scientific_name": "Euphorbia milii",
        "country_of_origin": "Madagascar",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent7.png",
        "price": "2.00"
    },
    {
        "title": "Panda plant",
        "scientific_name": "Kalanchoe tomentosa",
        "country_of_origin": "Madagascar",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent8.png",
        "price": "2.00"
    },
    {
        "title": "Lithops",
        "scientific_name": "Lithops spp.",
        "country_of_origin": "Southern Africa",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry completely between waterings",
        "img": "image/succulent9.png",
        "price": "0.99"
    },
    {
        "title": "Sempervivum",
        "scientific_name": "Sempervivum spp.",
        "country_of_origin": "Europe, Asia, Africa",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent10.png",
        "price": "2.00"
    },
    {
        "title": "Moon cactus",
        "scientific_name": "Gymnocalycium mihanovichii",
        "country_of_origin": "South America",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent11.png",
        "price": "3.00"
    },
    {
        "title": "Pincushion cactus",
        "scientific_name": "Mammillaria spp.",
        "country_of_origin": "Americas",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent12.png",
        "price": "2.00"
    },
    {
        "title": "Christmas cactus",
        "scientific_name": "Schlumbergera spp.",
        "country_of_origin": "Brazil",
        "light_requirement": "Indirect light",
        "watering": "Keep soil evenly moist",
        "img": "image/succulent13.png",
        "price": "2.99"
    },
    {
        "title": "Bunny ears cactus",
        "scientific_name": "Opuntia microdasys",
        "country_of_origin": "Mexico",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent14.png",
        "price": "0.99"
    },
    {
        "title": "Starfish flower",
        "scientific_name": "Stapelia spp.",
        "country_of_origin": "Africa",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent15.png",
        "price": "1.00"
    },
    {
        "title": "Bear paw",
        "scientific_name": "Cotyledon tomentosa",
        "country_of_origin": "South Africa",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent16.png",
        "price": "2.99"
    },
    {
        "title": "Flaming kat",
        "scientific_name": "Kalanchoe luciae",
        "country_of_origin": "South Africa",
        "light_requirement": "Bright light",
        "watering": "Allow soil to dry between waterings",
        "img": "image/succulent17.png",
        "price": "2.00"
    },
    {
        "title": "Basil",
        "scientific_name": "Ocimum basilicum",
        "country_of_origin": "India",
        "light_requirement": "Full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs1.png",
        "price": "1.99"
    },
    {
        "title": "Mint",
        "scientific_name": "Mentha spp.",
        "country_of_origin": "Europe, Asia",
        "light_requirement": "Partial to full sun",
        "watering": "Regular watering, keeping the soil consistently moist",
        "img": "image/herbs2.png",
        "price": "2.00"
    },
    {
        "title": "Rosemary",
        "scientific_name": "Rosmarinus officinalis",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Full sun",
        "watering": "Moderate watering, allowing the soil to dry between waterings",
        "img": "image/herbs3.png",
        "price": "2.99"
    },
    {
        "title": "Thyme",
        "scientific_name": "Thymus vulgaris",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Full sun",
        "watering": "Moderate watering, allowing the soil to dry between waterings",
        "img": "image/herbs4.png",
        "price": "2.00"
    },
    {
        "title": "Parsley",
        "scientific_name": "Petroselinum crispum",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Partial to full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs5.png",
        "price": "3.99"
    },
    {
        "title": "Oregano",
        "scientific_name": "Origanum vulgare",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Full sun",
        "watering": "Moderate watering, allowing the soil to dry between waterings",
        "img": "image/herbs6.png",
        "price": "0.99"
    },
    {
        "title": "Cilantro",
        "scientific_name": "Coriandrum sativum",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Partial to full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs7.png",
        "price": "2.00"
    },
    {
        "title": "Chives",
        "scientific_name": "Allium schoenoprasum",
        "country_of_origin": "Europe, Asia",
        "light_requirement": "Full sun to partial shade",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs8.png",
        "price": "1.99"
    },
    {
        "title": "Sage",
        "scientific_name": "Salvia officinalis",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Full sun",
        "watering": "Sparse watering, allowing the soil to dry between waterings",
        "img": "image/herbs9.png",
        "price": "2.00"
    },
    {
        "title": "Dill",
        "scientific_name": "Anethum graveolens",
        "country_of_origin": "Europe, Asia",
        "light_requirement": "Full sun to partial shade",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs10.png",
        "price": "2.00"
    },
    {
        "title": "Lavender",
        "scientific_name": "Lavandula spp.",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Full sun",
        "watering": "Moderate watering, allowing the soil to dry between waterings",
        "img": "image/herbs11.png",
        "price": "3.00"
    },
    {
        "title": "Cumin",
        "scientific_name": "Cuminum cyminum",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Full sun",
        "watering": "Sparse watering, allowing the soil to dry between waterings",
        "img": "image/herbs12.png",
        "price": "1.99"
    },
    {
        "title": "Coriander",
        "scientific_name": "Coriandrum sativum",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Partial to full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs13.png",
        "price": "3.00"
    },
    {
        "title": "Fennel",
        "scientific_name": "Foeniculum vulgare",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs14.png",
        "price": "2.00"
    },
    {
        "title": "Lemon Balm",
        "scientific_name": "Melissa officinalis",
        "country_of_origin": "Europe, Asia",
        "light_requirement": "Partial shade to full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs15.png",
        "price": "0.99"
    },
    {
        "title": "Marjoram",
        "scientific_name": "Origanum majorana",
        "country_of_origin": "Mediterranean region",
        "light_requirement": "Full sun",
        "watering": "Moderate watering, allowing the soil to dry between waterings",
        "img": "image/herbs16.png",
        "price": "1.99"
    },
    {
        "title": "Tarragon",
        "scientific_name": "Artemisia dracunculus",
        "country_of_origin": "Europe, Asia",
        "light_requirement": "Full sun",
        "watering": "Moderate watering, allowing the soil to dry between waterings",
        "img": "image/herbs17.png",
        "price": "1.00"
    },
    {
        "title": "Cinnamon",
        "scientific_name": "Cinnamomum verum",
        "country_of_origin": "Sri Lanka",
        "light_requirement": "Partial to full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs18.png",
        "price": "3.99"
    },
    {
        "title": "Stevia",
        "scientific_name": "Stevia rebaudiana",
        "country_of_origin": "South America",
        "light_requirement": "Partial to full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs19.png",
        "price": "2.00"
    },
    {
        "title": "Lemongrass",
        "scientific_name": "Cymbopogon citratus",
        "country_of_origin": "Tropical Asia",
        "light_requirement": "Full sun",
        "watering": "Regular watering, keeping the soil evenly moist",
        "img": "image/herbs20.png",
        "price": "2.00"
    }
]

let addToCartItems = []
function addItems() {
    document.querySelector(".cardContainer").innerHTML = ""
    for (var i = 0; i < items.length; i++) {
        document.querySelector(".cardContainer").innerHTML += `
            <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="${items[i].img}" class="img-fluid justify-content-center" style="width:100vw; height:27vh;" alt="">
                    </div>
                    <div class="cardContent">
                        <h3>${items[i].title}</h3>
                        <p><span>$</span> ${items[i].price}/-</p>
                        <button class="btn btn-primary" type="button" onclick="addToCart('${i}')">add to cart</button>
                    </div>
                </div>
            </div>
        `
    }
}
addItems()
cartItemsFetch()
function addToCart(elementId){
    addToCartItems.push(items[elementId])
    cartItemsFetch()
}
function deleteItem(elementId){
    addToCartItems.splice(elementId,1);
    cartItemsFetch()
}
function cartItemsFetch(){
    if(addToCartItems.length == 0){
        document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = `
            <div class="card shadow-3">
                <div class="alert alert-danger w-100 text-center m-0">Your cart is empty!!!</div>
            </div>
        `
        document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = 0
        document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = 0
        document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = "none"
    } else {
        let total = parseFloat(0);
        document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = addToCartItems.length
        document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = ""
        for(var i=0; i<addToCartItems.length; i++){
            document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML += `
            <div class="card shadow cardItem${i}">
            <div class="cardImage">
            <img src="${addToCartItems[i].img}" alt="${addToCartItems[i].title}">
            </div>
            <div class="cardContent">
            <h3>${addToCartItems[i].title}</h3>
            <div class="group">
            <p>$<span>${addToCartItems[i].price}</span>/-</p>
            <button class="btn btn-danger" type="button" onclick="deleteItem('${i}')"><i class="fas fa-trash"></i></button>
            </div>
                </div>
            </div>
            `
            total+=parseFloat(addToCartItems[i].price);

            
        }
        document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = total;
        document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = "";
    }
}
function cartToggler(){
    document.querySelector(".mainContainer .addToCartContainer").classList.toggle("active")
    if(document.querySelector(".mainContainer .addToCartContainer").classList.contains("active")){
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-times")
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-cart-plus")
    } else {
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-times")
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-cart-plus")
    }
}

function search()
{


    let filter=document.getElementById("inputdata").value.toUpperCase();

    let mycard=document.getElementById("one");

    
    let col_div=mycard.getElementsByClassName('col-md-3');

    for(var i=0;i<=col_div.length;i++)
    {
        let card_div=col_div[i].getElementsByClassName('card')[0];

        if(card_div)
        {
            var textvalue=card_div.textContent || card_div.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter)> -1)
            {
                col_div[i].style.display="";
            }
            else
            {
                col_div[i].style.display="none";
            }
        }
       
    }
}
        