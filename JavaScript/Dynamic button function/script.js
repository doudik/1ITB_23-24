let square;
let array = [];

function CreateSquare(){
    square = document.createElement("div");
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.backgroundColor = "red";
    square.style.position = "absolute";
    const square_container = document.getElementById("square-container");
    array.push(square);
    square_container.appendChild(square);
}
CreateSquare();
function MoveSquare(){
    array.forEach(element => {
        element.style.backgroundColor = "rgb(" + Math.random()*256 + "," + Math.random()*256 + "," + Math.random()*256 +")";
        element.style.left = Math.random()*100 + "%";
        element.style.top =  Math.random()*100 + "%";
    });
}
function Demolish(){
    for (let index = 0; index < 1000; index++) {
        CreateSquare();
    }
}
