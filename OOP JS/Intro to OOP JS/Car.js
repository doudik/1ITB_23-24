class Car{
    constructor(znacka, model, rokVyroby, jeVProvozu){
        this.znacka = znacka;
        this.model = model;
        this.rokVyroby = rokVyroby;
        this.jeVProvozu = jeVProvozu;
    }
    StariAuta(){
        const year = new Date().getFullYear();
        console.log(year);
    }
}
function VypisInfo(auto){
    let tmpString = `${auto.znacka} ${auto.model} (${auto.rokVyroby}) - `;
    
    //auto.jeVProvozu?tmpString += "Je v provozu.":tmpString += "Není v provozu.";
    if(auto.jeVProvozu){
        tmpString += "Je v provozu.";
    }else{
        tmpString += "Není v provozu.";
    }
    console.log(tmpString);
}

let auto1 = new Car("skoda", "kodiaq", 2020, true);
let auto2 = new Car("audi", "Q7", "2024", false);


let element = document.createElement("div");
document.body.appendChild(element);