console.log("Welcome to Tic-Tac-Toe Game developed by Jatin Kumar");
let bgMusic = new Audio("bg.mp3");
let turnMusic = new Audio("turn.mp3");
let gameoverMusic = new Audio("gameover.mp3");

let turn = "X";
let gameover = false;

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"O":"X"
}

//Function to check for a winning turn
const checkForWin = ()=>{
    //Sample tic-tac-toe matrix
    // 0 1 2
    // 3 4 5
    // 6 7 8
    let allBoxText = document.getElementsByClassName("boxText");
    let wins =  [
        // [0, 1, 2, 0, 10, 0],
        // [3, 4, 5, 0, 30, 0],
        // [6, 7, 8, 0, 50, 0],
        // [0, 3, 6, -20, 30, 90],
        // [1, 4, 7, 0, 30, 90],
        // [2, 5, 8, 20, 30, 90],
        // [0, 4, 8, 0, 30, 45],
        // [2, 4, 6, 0, 30, 135],
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(winPossibility => {
        if( allBoxText[winPossibility[0]].innerText === allBoxText[winPossibility[1]].innerText && 
            allBoxText[winPossibility[0]].innerText === allBoxText[winPossibility[2]].innerText &&
            allBoxText[winPossibility[0]].innerText !== ''){
                gameover = true;
                document.querySelector('.info').innerText = allBoxText[winPossibility[0]].innerText + " Won";
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${winPossibility[3]}vw, ${winPossibility[4]}vw) rotate(${winPossibility[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            }
    })

}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box=>{
    let box_text = box.querySelector('.boxText');
    box.addEventListener('click', ()=>{
        if(box_text.innerText === ''){
            box_text.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkForWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add event to reset button
reset.addEventListener('click', ()=>{
    let box_texts = document.querySelectorAll('.boxText');
    Array.from(box_texts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    gameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})