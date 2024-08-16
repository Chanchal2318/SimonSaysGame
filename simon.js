let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started");
        started = true;
    }
    levelUp();
});


// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },1000);
// }

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     },1000);
// }

function levelUp(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randInx = Math.floor(Math.floor()*3);
    let randColor = btns[randInx];
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(randInx);
    console.log(randColor);
    console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    checkAns();
    // gameFlash(randbtn);
}

function checkAns(){
    console.log("current level : ",level);
    let idx = level -1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `GameOver !Your score was <b>${level}</b> <br> Please enter any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    // userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq, length-1);
    
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    started = false;
    gameseq=[];
    userseq=[];
}