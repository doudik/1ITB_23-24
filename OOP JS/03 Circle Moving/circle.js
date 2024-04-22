//1. Create Circle with parameters from constructor -> DONE
//2. Display Circle on screen -> DONE
//3. Add movement for Circle
//4. Select right Circle to move

class Circle{
    constructor(w, h, color){
        this.width = w;
        this.height = h;
        this.color = color;
        this.radius = "50%";
        this.createCircle(this.width, this.height, this.color, this.radius);
    }
    
    createCircle(w, h, c, r){
        this.div = document.createElement("div");
        this.div.style.width = w + "px";
        this.div.style.height = h + "px";
        this.div.style.borderRadius = r;
        this.div.style.backgroundColor = c;
        this.div.onclick = () => {setCurrentDiv(this)}; 
        document.body.appendChild(this.div);
    }
}

let currentCircle;

function setCurrentDiv(clickedCircle){
    currentCircle = clickedCircle;
    console.log(currentCircle);
}