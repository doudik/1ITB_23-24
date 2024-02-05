function CreateSquare(){
    let div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = 'red';
    div.style.margin = '10px';
    document.body.appendChild(div);
    document.body.style.display = 'inline-flex';
}
let button = document.getElementById('createSquare');
button.onclick = CreateSquare;

CreateSquare();