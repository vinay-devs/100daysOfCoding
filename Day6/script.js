
const displayStatus=document.querySelector(".turn")
document.querySelectorAll('.cell').forEach(cell=>addEventListener('click',handleCellClick))

let gameActive=true
let currentPlayer="X"
let gameState=["","","","","","","","",""];


const winningMessage=()=>`It is ${currentPlayer} Won the Match`
const draw=()=>"The game is draw"
const showTurn=()=>` ${currentPlayer}'s Turn`;

displayStatus.innerHTML=showTurn();

function handleCellClick(e){
    const cellClick=e.target;

    const cellIndex=parseInt(cellClick.getAttribute('dataIndex'))
    if(gameState[cellIndex]!=="" ||!gameActive){return}
    
    handleCellPlayed(cellClick,cellIndex)
    handleResultValidation()
    
}

function handleCellPlayed(cellClick,cellIndex){
    cellClick.innerHTML=currentPlayer
    gameState[cellIndex]=currentPlayer
    handlePlayerChange()
    
}
function handlePlayerChange(){
    currentPlayer=currentPlayer=="X"?"O":"X"
    displayStatus.innerHTML=showTurn()
}
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    console.log(gameState);
if (roundWon) {
        displayStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        displayStatus.innerHTML = draw();
        gameActive = false;
        return;
    }
    handlePlayerChange()
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    displayStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}
