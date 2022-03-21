let start = prompt("Would you like to begin the round?")


let moveArray = ['Rock', "Paper", 'Sccisors']




function playerPlay() {
   let playerPick = prompt('Pick a Move ')

   return playerPick
}

function computerPlay() {
   let randomPick = Math.floor(Math.random() * 3)

   return randomPick

}

function playRound(playerSelection, computerSelection) {
   let computerWins = 0
   let playerWins = 0
   rounds = 0
   keepGoing = true
   while (rounds < 6) {
      playerSelection = playerPlay()
      computerSelection = computerPlay();
      computerPick = moveArray[computerSelection]
      console.log(playerSelection)
      console.log(computerPick)
      rounds += 1

      //Decides who wins

      switch (playerSelection) {
         case computerPick:
            console.log("Tie!")
            break
         case "Sccisors":
            if (computerPick == 'Rock') {
               console.log('The computer has won!')
               computerWins += 1
               break
            } else {
               console.log('You win!')
               playerWins +=1
            }
         case "Rock":
            if (computerPick == "Paper") {
               console.log("The computer has won")
               computerWins += 1
               break
            } else {
               console.log('You win!')
               playerWins +=1
            }
         case "Paper":
            if (computerPick == "Sccisors") {
               console.log("The computer wins")
               computerWins += 1
               break
            } else {
               console.log('You win!')
               playerWins +=1
            }
      }
   }

   //Prints who the winner is and the amount of wins for each
console.log("Computer wins: " + computerWins)

setTimeout(() => {
   console.log("Player wins: " + playerWins)
}, 2000);

setTimeout(() => {
   if (playerWins >computerWins) {
      console.log("You are the winner!")
   } else {
      console.log("You are the looser :(")
   }
}, 3000);

}



if (start == "Yes" || start == 'yes') {
   playRound()
}
