new Square("green");
new Square("red");

document.body.addEventListener("keypress", moveSquare);

let firstSquare = document.querySelector("div");
function moveSquare(){
    firstSquare.style.position = "relative";
    switch(event.key){
        case "w":
            firstSquare.style.top -= 20 + "px";
            break;
        case "a":
            firstSquare.style.left -= 20 + "px";
            break;
        case "s":
            firstSquare.style.top += 20 + "px";
            break;
        case "d":
            firstSquare.style.left += 20 + "px";
            break;
        default:
            console.log("špatná klávesa! Použij W A S D");
            break;
    }
}
