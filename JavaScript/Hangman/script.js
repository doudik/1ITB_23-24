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

let slovo = slova[Math.floor(Math.random() * slova.length)];
let slovoArray = slovo.split("");

function createWord(){
    let container = document.querySelector(".container-slovo");
    for (let i = 0; i < slovoArray.length; i++){
        let button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.style.margin = "2px";
        button.innerHTML = slovoArray[i];
        container.appendChild(button);
        
        button.onclick = checkValue;
    } 
}
function checkValue(){
    slovoArray.forEach(element => {
        if(element == this.innerHTML){
            this.style.backgroundColor = "green";
            this.disabled = true;
        }
    });
}

