const ceskaAbeceda = ['A', 'Á', 'B', 'C', 'Č', 'D', 'Ď', 'E', 'É', 'Ě', 'F', 'G', 'H', 'CH', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'Ň', 'O', 'Ó', 'P', 'Q', 'R', 'Ř', 'S', 'Š', 'T', 'Ť', 'U', 'Ú', 'Ů', 'V', 'W', 'X', 'Y', 'Ý', 'Z', 'Ž'];

let inputWindow = document.querySelector('.inputWindow');

for(let i = 0; i < ceskaAbeceda.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = ceskaAbeceda[i];
    button.style.fontSize = "3rem";
    button.onclick = () => {
        inputWindow.innerHTML += button.innerHTML;
        
    }
    document.body.appendChild(button);
}