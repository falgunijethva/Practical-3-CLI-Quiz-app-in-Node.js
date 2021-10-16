var rs = require("readline-sync");
const chalk = require("chalk");

let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let bgRed = chalk.bold.bgRed
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.bgYellow
let inverse = chalk.inverse

var score = 0;
var highscore = 15;

let questions = [
  {
    no: '1',
    question: `Which cartoon hero is in love with Sweet Polly Purebred?`,
    A: 'George of the jungle',
    B: 'Scooby doo',
    C: 'Underdog',
    D: 'Mighty mouse',
    answer: 'c',
  },
  {
    no: '2',
    question: `Where do the Flintstones live?`,
    A: 'Granity city',
    B: 'Cobblestone',
    C: 'Quarryville',
    D: 'Bedrock',
    answer: 'd',
  },
  {
    no: '3',
    question: `What blue-skinned cartoon characters took North America by storm in 1981?`,
    A: 'Smurfs',
    B: 'Blues clues',
    C: 'Pokemon',
    D: 'Teletubbies',
    answer: 'a',
  },
  {
    no: '4',
    question: `Who has a magical pet called Eugene the Jeep?"?`,
    A: 'George Jetson',
    B: 'Betty boop',
    C: 'Popeye',
    D: 'Felix the cat',
    answer: 'c',
  },
  {
    no: '5',
    question: `How many nephews does Popeye have?`,
   A: '4',
    B: '2',
    C: '3',
    D: '5',
    answer: 'a',
  },
];

log(cyan("Welcome to the..."), title("cartoon Trivia!\n"))
let user = rs.question("Enter Your Name : ")
log(bgRed(`Hello ${user}`))

log(blueBright("\nA Quiz from the cartoon ...."))
log("\n There will be 5 questions.")
log(green("+5"), "points for correct answer.", red("-2"), "points for wrong answer.\n")

for (q of questions) {
  log(yellow(q.no + ': ' + q.question));
  log(cyan('A: ' + q.A));
  log(cyan('B: ' + q.B));
  log(cyan('C: ' + q.C));
  log(cyan('D: ' + q.D));

  //input answer
  var ans = rs.question('Answer : ');

  //compare answer
  if (ans.toLowerCase() === q.answer.toLowerCase()) {
    log(green("\n+5"), "Your answer is", green("correct"), ".");
    score += 5;
    log("Your current score is", green(score), "\n");
  } else {
    log(red("-2"), "Your answer is", red("incorrect"), ".");
    console.log("Correct answer :", green(q.answer));
    score -= 2;
    log("Your current score is", red(score), "\n");
  }
}


if (score > highscore) {
  log(green("Congratulation..!You Beat the best score."))
} else {
  log(red("You couldn't beat the highscore. Better luck next time!\n"))
}

log(yellow("Scoreboard:"))
log('Hello ' + red(user) + ' Your final score is : ' + score)