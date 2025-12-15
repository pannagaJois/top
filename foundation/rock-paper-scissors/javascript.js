function generateRand() {
    let b = Math.random();
    if(b*3 <= 1) return "rock";
    if(b*3 <= 2) return "paper";
    if(b*3 <= 3) return "scissor";
}

function result(a,b) {
    a = a.toLowerCase();
    if(a != "rock" && a != "scissor" && a != "paper") return "invalid choice";
    if(a === b) return "tie";
    else if((a=="rock" && b=="scissor") || (a=="scissor" && b=="paper") || (a=="paper" && b=="rock"))  {
        humanScore++;
        return "you win";
    }
    else {
        compScore++;
        return "you lose";
    }
}
let humanScore=0
let compScore=0
for(let i=0; i<5; i++) {
    let a = prompt("enter your choice: ")
    let b = generateRand();
    console.log("you choose: "+a)
    console.log("computer choose: "+b)
    console.log(result(a, b));
    console.log("your score: "+humanScore)
    console.log("computer score: "+compScore)
}