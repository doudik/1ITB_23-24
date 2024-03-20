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