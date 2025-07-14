let userScore = 0;
let compScore = 0;

let user = document.querySelector("#user_score");
let comp = document.querySelector("#comp_score");

let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const choice_array = ["rock","paper","scissor"];
    const randIndex = Math.floor(Math.random()*3);
    return choice_array[randIndex];
}

const draw =(compChoice) =>{
    msg.innerText = `Computer choice is ${compChoice}. Oops,it's a draw!`;
    console.log("Draw!!!");
}

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        user.innerText = userScore;
        msg.innerText = `Computer choice is ${compChoice}. Congrats,you beat the computer!`;
        console.log("User score : ",userScore);
        console.log("Comp score : ",compScore);

    }
    else{
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `Computer choice is ${compChoice}. Oops,the computer beat you!`;
        console.log("User score : ",userScore);
        console.log("Comp score : ",compScore);
    }
}

const playGame=(userChoice)=>{
    const compChoice = genCompChoice();
    console.log("Computer choice : ",compChoice);
    if(userChoice === compChoice){
        draw(compChoice);
    }
    else{
        let userwin = true;
        if(userChoice==="rock"){
            //comp: scissor,paper
            if(compChoice==="paper"){
                userwin = false;
            }
            else{
                userwin= true;
            }
        }
        else if(userChoice==="paper"){
            //comp: scissor,rock
            if(compChoice==="scissor"){
                userwin = false;
            }
            else{
                userwin= true;
            }
        }
        else if(userChoice==="scissor"){
            //comp: rock,paper
            if(compChoice==="rock"){
                userwin = false;
            }
            else{
                userwin= true;
            }
        }
        showWinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("User choice : ",userChoice);
        playGame(userChoice);
    })
})