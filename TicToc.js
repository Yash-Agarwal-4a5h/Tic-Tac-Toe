let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was cliked");
        if(turnO){//player O
            box.innerText="O";
            turnO=false;
        }else{//player X
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});  
//Reset and new button
const resetGame=()=>{
    turnO=true;
    endableBoxes();
    msgcontainer.classList.add("hide");
}; 
//Reset and New game button
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
//disable boxes
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
//Endable boxes
const endableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
//show winner
const showWinner=(winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    // console.log(showWinner);
    disableBoxes();
}
//check winner
const checkWinner =()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val ){
                showWinner(pos1val);
            }
        }
    }
    
    //Check for a draw
    let isDraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        disableBoxes();
    }
};
