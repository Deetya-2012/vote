game.splash("Enter your age ")
let Age = game.askForNumber("")
game.splash("Enter your nationality")
let Nationality = game.askForString("")
if (Age >= 18 && (Nationality == "Indian" || Nationality == "indian")) {
    game.splash("You can vote")
} else {
    game.splash("You can't vote")
}
