let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

let lightColor = (element, time) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, time - 250)
    setTimeout(() => {
        element.classList.remove('selected');
    })
}


let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você Acertou a ordem!`)
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)


}

let createColorElement = (color) => {
    if (color == 0) {
        return green
    }
    if (color == 1) {
        return red
    }
    if (color == 2) {
        return yellow
    }
    if (color == 3) {
        return blue
    }
}

let nextLevel = () => {
    score += 1;
    shuffleOrder();
}

let lose = () => {
    alert(`Pontuação: ${score}\n You Lose`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert("Bem vindo ao jogo! Começando...")
    score = 0;
    nextLevel();
}

green.onclick=()=>click(0);
red.onclick=()=>click(1);
yellow.onclick=()=>click(2);
blue.onclick=()=>click(3);

playGame();