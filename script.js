let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const mssg=document.querySelector("#mssg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const genComputerChoice=()=>{
     let options=["rock","paper","scissor"];
     const randomIdx=Math.floor(Math.random()*3);
     return options[randomIdx];
};


const drawGame=()=>{
    mssg.innerText="Game was draw!! Play again.";
    mssg.style.backgroundColor="#081b31";
};


const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        mssg.innerText=`you win!! your ${userChoice} beat ${computerChoice}`;
        mssg.style.backgroundColor="green";
    }else{
       compScore++;
        compscorePara.innerText=compScore;
        mssg.innerText=`you lose!!${computerChoice} beats your ${userChoice} `;
        mssg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    //console.log("user choice",userChoice);
    const computerChoice = genComputerChoice();
   // console.log("compChoice",computerChoice);
     

   if(userChoice==computerChoice){
    //Drow Game
    drawGame();
   }
    else{
    let userWin= true;
        if(userChoice=="rock"){
            // scissors , paper
            userWin = computerChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            // rock , scissors
            userWin = computerChoice=="scissors"?false:true;
        }
        else{
            // rock , paper
            userWin = computerChoice=="rock"?false:true;
        }
    showWinner(userWin,userChoice,computerChoice);
   }
};


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userChoice =choice.getAttribute("id");
        //console.log(userChoice)
        playGame(userChoice);
        });
});



