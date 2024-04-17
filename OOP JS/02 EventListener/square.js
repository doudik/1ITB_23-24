class Square{
    constructor(color){
        this.color = color;
        createSquare(this);
    }
}

function createSquare(square){
    let object = document.createElement("div");
    object.style.width = 100 + "px";
    object.style.height = 100 + "px";
    object.style.backgroundColor = square.color;
    document.body.appendChild(object);
}
