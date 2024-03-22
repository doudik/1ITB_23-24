const colorArray = [
    "red",
    "green",
    "blue",
    "black",
    "yellow",
    "pink",
    "purple",
    "orange",
    "brown",
    "grey"
  ];
  
  Init();
  let interval = 10000;
  let btnEpilepsy = document.createElement("button");
    btnEpilepsy.innerHTML = "Epilepsy";
    btnEpilepsy.classList.add("btn", "btn-danger", "m-1");
    btnEpilepsy.onclick = () => {
        setInterval(() => {
            SpawnDivs();
            Update();
        }, Math.floor(Math.random() * 1000));
    }
    
    document.body.appendChild(btnEpilepsy);


let divArray = [];


function SpawnDivs(){
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "black";
    div.style.borderRadius = "50%";
    div.style.position = "absolute";
    div.style.top = Math.random() * 100 + "%";
    div.style.left = Math.random() * 100 + "%";
    document.body.appendChild(div);
}
let size = 100;
function Update(){
    size -= 2;
    let divs = document.querySelectorAll("div");
    divs.forEach(element => {
        let randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        element.style.backgroundColor = randomColor;
        element.style.width = size + "px";
        element.style.height = size + "px";
    });
}


  function Init() {
    SpawnButtons();
    ChangeColor();
  }
  function SpawnButtons() {
    for (let i = 0; i < colorArray.length; i++) {
      let btn = document.createElement("button");
      btn.innerHTML = colorArray[i];
      btn.style.backgroundColor = colorArray[i];
      btn.classList.add("btn", "btn-primary", "m-1");
      btn.onclick = () => {
        ChangeColor(colorArray[i]);
      };
      console.log(btn.innerHTML);
      document.body.appendChild(btn);
    }
  }
  function ChangeColor(color) {
    document.body.style.backgroundColor = color;
  }
  function EpilepsyTrigger(){
    let randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    document.body.style.backgroundColor = randomColor;
}
