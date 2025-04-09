const imageDeck = [
  "4_of_clubs", "2_of_hearts", "7_of_diamonds", "3_of_clubs", "4_of_hearts", "6_of_diamonds", "ace_of_spades", "5_of_hearts", "9_of_spades", "2_of_spades",
  "queen_of_hearts", "3_of_diamonds", "queen_of_clubs", "8_of_hearts", "6_of_spades", "5_of_spades", "9_of_hearts", "king_of_clubs", "2_of_diamonds", "jack_of_hearts",
  "3_of_spades", "8_of_spades", "6_of_hearts", "10_of_clubs", "5_of_diamonds", "king_of_diamonds", "2_of_clubs", "3_of_hearts", "8_of_diamonds", "5_of_clubs",
  "king_of_spades", "jack_of_diamonds", "8_of_clubs", "10_of_spades", "king_of_hearts", "jack_of_clubs", "7_of_spades", "10_of_hearts", "ace_of_diamonds", "4_of_spades",
  "7_of_hearts", "4_of_diamonds", "ace_of_clubs", "9_of_clubs", "jack_of_spades", "queen_of_diamonds", "7_of_clubs", "queen_of_spades", "10_of_diamonds", "6_of_clubs",
  "ace_of_hearts", "9_of_diamonds", "back"
];

let originalPos = 1;
let offset = 1;
let resultPos = 1;

function generate() {
  originalPos = Math.floor(Math.random() * 52) + 1;
  offset = Math.floor(Math.random() * 52) + 1;

  resultPos = originalPos > offset
    ? originalPos - offset
    : 52 - (offset - originalPos);

  // Display the original card immediately.
  document.getElementById("originalCard").src =
    "images/" + imageDeck[originalPos - 1] + ".png";
  // Hide the original card's number.
  document.getElementById("originalLabel").textContent = "?";

  // Reset the right card to display the back image.
  document.getElementById("resultCard").src = "images/back.png";
  // Hide the right card's number.
  document.getElementById("resultLabel").textContent = "?";

  // Update the offset number.
  document.getElementById("offsetNumber").textContent = offset;
}

function revealLeftNumber() {
  document.getElementById("originalLabel").textContent = originalPos;
}

function revealRightCard() {
  document.getElementById("resultCard").src =
    "images/" + imageDeck[resultPos - 1] + ".png";
}

function revealRightNumber() {
  document.getElementById("resultLabel").textContent = resultPos;
}