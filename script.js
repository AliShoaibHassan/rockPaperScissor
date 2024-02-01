let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let compScoreElt = document.querySelector(".compScore");
let playerScoreElt = document.querySelector(".playerScore");

let player = null;
let comp = null;

rock.addEventListener("click", ()=> {
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);
    player = "rock";

    if (rand === 1){
        comp = "rock";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Rock. Draw!</h3>";
        document.querySelector(".final").style.backgroundColor = "rgb(1, 1, 42)";
    }

    else if (rand === 2){
        comp = "paper";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Paper. You Lost!</h3>";
        compScoreElt.innerText = ++compScoreElt.innerText;
        document.querySelector(".final").style.backgroundColor = "red";
    }

    else{
        comp = "scissor";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Scissor. You WON!</h3>";
        playerScoreElt.innerText = ++playerScoreElt.innerText;
        document.querySelector(".final").style.backgroundColor = "#008000";
    }
    
});

paper.addEventListener("click", ()=> {
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);
    player = "paper";

    if (rand === 1){
        comp = "rock";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Rock. You WON!</h3>";
        playerScoreElt.innerText = ++playerScoreElt.innerText;
        document.querySelector(".final").style.backgroundColor = "#008000";
    }

    else if (rand === 2){
        comp = "paper";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Paper. Draw!</h3>";
        document.querySelector(".final").style.backgroundColor = "rgb(1, 1, 42)";
    }

    else{
        comp = "scissor";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Scissor. You Lost!</h3>";
        compScoreElt.innerText = ++compScoreElt.innerText;
        document.querySelector(".final").style.backgroundColor = "red";
    }
    
});

scissor.addEventListener("click", ()=> {
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);
    player = "scissor";

    if (rand === 1){
        comp = "rock";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Rock. You Lost!</h3>";
        compScoreElt.innerText = ++compScoreElt.innerText;
        document.querySelector(".final").style.backgroundColor = "red";
    }

    else if (rand === 2){
        comp = "paper";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Paper. You WON!</h3>";
        playerScoreElt.innerText = ++playerScoreElt.innerText;
        document.querySelector(".final").style.backgroundColor = "#008000";
    }

    else{
        comp = "scissor";
        document.querySelector(".message").innerHTML = "<h3>Computer chose Scissor. Draw!</h3>";
        document.querySelector(".final").style.backgroundColor = "rgb(1, 1, 42)";
    }
    
});