function ChangeColor(){
    document.body.style.backgroundColor = 
    "rgb(" + Math.floor(Math.random() * 256) + ","
    + Math.floor(Math.random() * 256) + ","
    + Math.floor(Math.random() * 256) + ")";
}
function MotivationMessage(){
    const arrayOfMotivationMessages = [
        "You can do it!",
        "You are the best!",
        "You are amazing!"
    ]
    alert(arrayOfMotivationMessages[Math.floor(Math.random() 
        * arrayOfMotivationMessages.length)])
}
function ChangeHeadline(){
    let headline = document.querySelector("h1");
    let message = prompt("Enter new headline:");
    if(message){
        headline.innerHTML = message;
    }
}