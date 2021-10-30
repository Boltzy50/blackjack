window.addEventListener('DOMContentLoaded', function() {
  const dealBtn = document.querySelector("#deal-button");
    // Add a click event listener to the button
    dealBtn.addEventListener('click', function() {
      console.log("you've pressed the deal button")

      // Dealing the new card
      const newCard = document.createElement('img');
      newCard.src="images/2_of_clubs.png";

      const playerCard = document.createElement('img');
      playerCard.src="images/4_of_diamonds.png";
      
      // The dealers hand
      const dealerHand = document.querySelector("#dealer-hand");
      dealerHand.appendChild(newCard);

      // The players hand
      const playerHand = document.querySelector("#player-hand");
      playerHand.appendChild(playerCard)
    })
  })

  const suits = [
    "diamonds",
    "clubs",
    "spades",
    "hearts"
  ]

  for(s=1; s<=suits.length; s++){
    for(r=1; r<=13; r++){

    }
  }
