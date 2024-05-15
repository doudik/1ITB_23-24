class Automobil{
    constructor(znacka, model, rokVyroby){
        this.znacka = znacka;
        this.model = model;
        this.rokVyroby = rokVyroby;
        this.cena = Math.floor(Math.random() * 1000000);
        this.delkaVyroby = Math.floor(Math.random() * 730);
    }
    zobrazInfo(){
        let div = document.createElement("div");
        div.innerHTML = `
            <h2>${this.znacka} - ${this.model}</h2>
            <p>Rok výroby: ${this.rokVyroby}</p>
            <p>Cena: ${this.cena} Kč</p>
            <p>Délka výroby: ${this.delkaVyroby} dní
        `;
        document.body.appendChild(div);
    }
}

const autaVeVyrobe = [];
const auta = {
    Skoda: ["Octavia", "Fabia", "Superb", "Kodiaq", "Scala", "Rapid", "Karoq", "Yeti", "Citigo", "Roomster"],
    Audi: ["A8", "A7", "A6", "A5", "A4", "A3", "Q8", "Q7", "Q5", "Q3"],
    BMW: ["3 Series", "5 Series", "7 Series", "X3", "X5", "X7", "M3", "M5", "i3", "i8"],
    Mercedes: ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "AMG GT", "CLA", "SL", "G-Class"],
    Volkswagen: ["Golf", "Passat", "Tiguan", "Polo", "Arteon", "Touran", "T-Roc", "Up!", "Jetta", "Atlas"],
    Ford: ["Fiesta", "Focus", "Mondeo", "Mustang", "EcoSport", "Kuga", "Ranger", "Fusion", "Escape", "Edge"],
    Toyota: ["Corolla", "Camry", "RAV4", "Yaris", "Prius", "Highlander", "Sienna", "C-HR", "Avalon", "Tundra"],
    Honda: ["Civic", "Accord", "CR-V", "Pilot", "Fit", "HR-V", "Insight", "Odyssey", "Ridgeline", "Clarity"],
    Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona", "Veloster", "Palisade", "Accent", "Venue", "Nexo"],
    Kia: ["Rio", "Forte", "Optima", "Stinger", "Soul", "Sportage", "Sorento", "Telluride", "Niro", "Cadenza"]
}; 
function showModels(){
    let znacka = document.getElementById("Znacka").value;
    let modely = auta[znacka];
    let models = document.getElementById("models");
    models.innerHTML = "";

    modely.forEach(element => {
        //TODO vytvoříme option element
        let option = document.createElement("option");
        option.value = element;
        option.text = element;
        //TODO přidáme option element do select elementu
        models.appendChild(option);
    });
}


function createCar(){
        let znacka = document.getElementById("Znacka").value;
        let model = document.getElementById("models").value;
        autaVeVyrobe.push(new Automobil(znacka, model, new Date().getFullYear()));  
        //TODO zobraz auta ve výrobě
        updateList();
}

function updateList(){
    autaVeVyrobe.forEach(car => {
        setInterval(() => {
            car.delkaVyroby--;
            if(car.delkaVyroby <= 0){
                autaVeVyrobe.splice(autaVeVyrobe.indexOf(car), 1);
            }
    }, 1000);
    })};
