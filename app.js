alert("GUESS GAME");
let name = prompt("Enter your name");
alert("WELCOME" + " " + name + " " + "Read instructions carefully");
alert("YOU HAVE ONLY 3 ROUNDs.");
alert("YOU ARE TO GUESS A NUMBER FROM 1 - 100");
alert("EACH ROUND IS 10 SCORES");

let player_guess = 0;
let bot_guess = 0;

let player_point = 0;
let bot_point = 0;

let text = "";

for (let i = 1; i < 4; i++) {
  text += "";
  document.getElementById("segun").innerHTML = text;

  let round = alert("ROUND" + " " + i);

  let player_guess = parseInt(prompt("Guess a number from 1 - 100"));
  let bot_guess = Math.ceil(Math.random() * 100);

  if (player_guess == bot_guess) {
    alert(
      name +
        " " +
        "guessed" +
        " " +
        player_guess +
        " " +
        "Bot guessed" +
        " " +
        bot_guess
    );
    player_point += 10;
  } else {
    alert(
      name +
        " " +
        "guessed" +
        " " +
        player_guess +
        " " +
        "Bot guessed" +
        " " +
        bot_guess
    );
    bot_point += 10;
  }

  function myFunction() {
    if (player_point > bot_point) {
      document.getElementById("segun").innerHTML =
        name +
        " " +
        "YOU WON!" +
        " " +
        "with" +
        " " +
        player_point +
        " " +
        "points" +
        " " +
        "and BOT LOSS with" +
        " " +
        bot_point +
        " " +
        "points";
    } else {
      document.getElementById("segun").innerHTML =
        "BOT WON!" +
        " " +
        "with" +
        " " +
        bot_point +
        " " +
        "points" +
        " " +
        "and" +
        " " +
        name +
        " " +
        "LOSS with" +
        " " +
        player_point +
        " " +
        "points";
    }
  }
}
