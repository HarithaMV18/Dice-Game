
function rollDice(){
        let randomNum1=Math.floor(Math.random() * 6) + 1;
        let randomNum2=Math.floor(Math.random() * 6) + 1;
        let dice1Img=document.getElementsByClassName("dice")[0].querySelector("img");
        let dice2Img=document.getElementsByClassName("dice")[1].querySelector("img");
        
        
            dice1Img.setAttribute("src","./images/dice"+randomNum1+".png")
            dice1Img.setAttribute("alt","dice"+randomNum1);
            dice2Img.setAttribute("src","./images/dice"+randomNum2+".png")
            dice2Img.setAttribute("alt","dice"+randomNum2);
        
        if(randomNum1 > randomNum2){
            document.querySelector("h1").innerText="🚩Player 1 Wins"
        }
        else if(randomNum1 < randomNum2){
            document.querySelector("h1").innerText="Player 2 Wins🚩"
        }
        else{
            document.querySelector("h1").innerText="Draw!"
        }
  
    }

    
    




