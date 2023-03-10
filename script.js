const wordList = {
    countries: ["Azerbaijan", "Ethiopia", "Nicaragua", "Venezuela", "Djibouti", "Antigua", "Iceland", "Tajikistan", "Tuvalu", "Argentina", "Germany", "Togo", "Palau"],
}

let chosenWord = wordList.countries[Math.floor(Math.random() * wordList.countries.length)].toLowerCase();
let maskedWord = chosenWord.replace(/[a-z]/g, "_")
let maskedLetters = maskedWord.split("")
let pressedLetter = null
let guesses = 6

const cntBtn = document.getElementById("countries")
const occBtn = document.getElementById("occupations")
const carBtn = document.getElementById("cars")
const wordSpace = document.getElementById("wordSpace")
const letters = document.querySelectorAll(".letter")
const remainGuess = document.getElementById("guessesRemaining")
const resetButton = document.getElementById("reset")
const image = document.querySelector("img")

remainGuess.innerHTML = "Remaining Guesses: " + guesses
wordSpace.innerHTML = maskedLetters

// Function to start the game
const startGame = () => {
    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener("click", (e) => {
            letters[i].style.display = "none"
            pressedLetter = e.target.innerHTML.toLowerCase()
            if (chosenWord.includes(pressedLetter)) {
                for (let i = 0; i < chosenWord.length; i++) {
                    // for every letter in chosen word, if that index is equal to the letter pressed
                    // the index of masked letters is also equal to the letter pressed
                    if (chosenWord[i] === pressedLetter) {
                        maskedLetters[i] = pressedLetter
                        wordSpace.innerHTML = maskedLetters
                        if (guesses === 0 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! But the Earth almost turned into Pangea again!"
                        }
                        else if (guesses === 1 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! But the Earth almost turned into Pangea again!"
                        }
                        else if (guesses === 2 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! The Earth was mostly saved!"
                        }
                        else if (guesses === 3 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! The Earth changed quite a bit!"
                        }
                        else if (guesses === 4 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! `The Earth shifted a bit though!"
                        }
                        else if (guesses === 5 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "Amazing job! You saved the Earth from moving!"
                        }
                        else if (guesses === 6 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "Amazing job! You saved the Earth from moving!"
                        }
                    }
                }
            }
            // Else if user input is not in chosen word:
            else {
                guesses -= 1
                if (guesses === 5) {
                    image.src = "./pangeaPics/1.jpg"

                }
                else if (guesses === 4) {
                    image.src = "./pangeaPics/2.jpg"

                }
                else if (guesses === 3) {
                    image.src = "./pangeaPics/3.jpeg"
                }
                else if (guesses === 2) {
                    image.src = "./pangeaPics/4.jpg"
                }
                else if (guesses === 1) {
                    image.src = "./pangeaPics/4.jpg"
                }
                else if (guesses === 0) {
                    image.src = "./pangeaPics/5.jpg"
                }
                // if letter has been clicked, don't subtract from guesses
                remainGuess.innerHTML = "Remaining Guesses: " + guesses
                if (guesses <= 0) {
                    remainGuess.innerHTML = `You lose, Earth has turned into Pangea. :( The correct country was ${chosenWord.toUpperCase()}, try again!`

                }
            }
        })
    }
}

const reset = () => {
    resetButton.addEventListener('click', () => {
        location.reload()
    })
}

startGame()
reset()

