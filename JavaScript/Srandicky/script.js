const zaci1ITB = [
    "Bažant Adam",
    "Bělotel Alexandr",
    "Beneš František",
    "Bílek Patrik",
    "Blot Alex",
    "Cvejn Antonín",
    "Černík Lukáš",
    "Feshchuk Anhelina",
    "Hetzendorf Petr",
    "Liška Čeněk",
    "Malý Vilém",
    "Martykán Jakub",
    "Mazáč Matěj",
    "Pospíšil Samuel",
    "Skeť Ivan",
    "Strachoň Josef",
    "Svoboda Lukáš",
    "Špatenka Jakub",
    "Vojtěch Matěj",
    "Voves Jan",
    "Zdvořák Andrej"
]
let text = document.querySelector(".circle-text");
const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function GetRandomName(){
    const randomName = zaci1ITB[Math.floor(Math.random() * zaci1ITB.length)];
    return randomName;
}
function NumberOfSpins(){
    const randomNumber = Math.floor(Math.random() * zaci1ITB.length);
    return randomNumber;
}
async function Spin(){
    for(let i = 0; i < NumberOfSpins(); i++){
        text.innerHTML = GetRandomName(); 
        await sleep(1000);
    }

}