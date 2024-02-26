let arrayOfCitate = [
    "Nikdy nevzdávejte, nikdy se nevzdávejte, nikdy se nevzdávejte, nikdy, nikdy, nikdy.",
    "Jsem nejlepší a škola mě motivuje!",
    "Nikdy to nezvdám!",
    "Jsem nejlepší!"
]

function GenerateCitate(){
    let randomCitate = arrayOfCitate[Math.floor(Math.random() * arrayOfCitate.length)];
    let alertBox = document.querySelector(".alert-info");
    alertBox.innerHTML = randomCitate;
}
// if #1 - vkládaný text musí být alespoň 20 znaků dlouhý
// if #2 - vkládaný text nesmí obsahovat slovo "škola"
// if #3 - vkládaný text musí obsahovat slovo "motivuje"
// if #4 - generovaný citát nesmí být stejný, jako ten co je právě zobrazený
function AddCitate(){
    let newCitate = document.getElementById("inputBox");
    arrayOfCitate.push(newCitate.value);
    document.getElementById("inputBox").value = ""; // Clear input box
}