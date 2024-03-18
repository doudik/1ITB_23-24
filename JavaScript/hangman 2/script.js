const slova = [
    "přetěžováni",
    "povztekání",
    "prozpěvování",
    "pořizovateli",
    "přemazávání",
    "převazovanými",
    "perverznějšími",
    "prezentovanými",
    "příznakovější",
    "převzorkování",
    "keprový",
    "keynesiánců",
    "kejklavé",
    "kesonech",
    "keprovýma",
    "keser",
    "kesonovýma",
    "kelímkovým",
    "kempem",
    "ken",
    "nedokážeš",
    "neprivatizujme",
    "vymalovali",
    "linhartického",
    "ploutevním",
    "zakreslený",
    "čistokrevností",
    "kopolyesterovému",
    "účastnily",
    "nenasazovaly",
    "zelináře",
    "radostí",
    "obešly",
    "kyzovém",
    "skrývými",
    "zneprůzračnit",
    "předepsánými",
    "jihoameričanovo",
    "záškodníkova",
    "netřebickou",
    "příjmového",
    "roznožky",
    "obkladovým",
    "hospodyňskýma",
    "nerovnoramenném",
    "nevědecký",
    "zajistitelem",
    "nejuspořádanějším",
    "vidítou",
    "korpulentních",
    "osvobozují",
    "toaletnímu",
    "nezablokujte",
    "rozlišovány",
    "jamajce",
    "spínátkem",
    "litovaného",
    "vysypte",
    "rozměřovaném",
    "taxikářův",
    "křečkové",
    "odpálíte",
    "rovnodušný",
    "zbytečným",
    "rohlíčku",
    "paralytikovy",
    "peršanovou",
    "automatizujme",
    "práčem",
    "vyťukaných",
    "arzenálem",
    "zanikajícího",
    "otitulkovávat",
    "sebedefinice",
    "aktivem",
    "zreorganizovaném",
    "svízelný",
    "zahnulo",
    "lékarnický",
    "nezachráněni",
    "založily",
    "okořeňují",
    "přeplní",
    "rozostřili",
    "plnomocných",
    "podsouvaná",
    "dokládali",
    "ukřivdíme",
    "svačinkovýma",
    "nestřídé",
    "nešikových",
    "polévejte",
    "nominujte",
    "osívaném",
    "kalibrací",
    "nepoučen",
    "malečovskou",
    "dovřeli",
    "stylce",
    "okrašlovat",
  ];
const ceskaAbeceda = ['A', 'Á', 'B', 'C', 'Č', 'D', 'Ď', 'E', 'É', 'Ě', 'F', 'G', 'H', 'CH', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'Ň', 'O', 'Ó', 'P', 'Q', 'R', 'Ř', 'S', 'Š', 'T', 'Ť', 'U', 'Ú', 'Ů', 'V', 'W', 'X', 'Y', 'Ý', 'Z', 'Ž'];
let randomPhrase = slova[Math.floor(Math.random() * slova.length)];
let dashesList = document.querySelector(".listDashes");
let buttonList = document.querySelector(".buttons");
let guessingPhrase = [];

GenerateDashes();
GenerateButtons();

function GenerateDashes(){
    // generated dashes to array
    for(let i = 0; i < randomPhrase.length; i++){
        guessingPhrase.push("_");
    }
    // generated dashes as li elements
    for(let i = 0; i < guessingPhrase.length; i++){
        let li = document.createElement("li");
        li.classList.add("_");
        li.innerHTML = guessingPhrase[i];
        dashesList.appendChild(li);
    }
}
function GenerateButtons(){
    for(let i = 0; i < ceskaAbeceda.length; i++){
        let button = document.createElement("button");
        button.innerHTML = ceskaAbeceda[i];
        button.classList.add("btn", "btn-primary");
        button.onclick = () => {
            CheckWord(button);
        }
        buttonList.appendChild(button);
    }
}
function CheckWord(button){
    let pressedChar = button.innerHTML;
    let valid = false;

    for(let i = 0; i < randomPhrase.length; i++){
        if(randomPhrase[i] == pressedChar.toLowerCase()){
            guessingPhrase[i] = pressedChar;
            valid = true; //TODO remake, calling so many times
        }
    }
    UpdateDashes();
    UpdateColorOfButton(button, valid);
}
function UpdateColorOfButton(button, valid){
    //update!!
    if(valid){
        button.style.backgroundColor = "green";
    }else{
        button.style.backgroundColor = "red";
    }
    button.disabled = true;
}
function UpdateDashes(){
    let liList = document.querySelectorAll("li");
    for(let i = 0; i < guessingPhrase.length; i++){
        liList[i].innerHTML = guessingPhrase[i];
    }
}
