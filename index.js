#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright.redBright("********************Welcome to Typescript Quiz********************"));
let playerName = await inquirer.prompt({
    name: "Name",
    type: "input",
    message: "Please Enter Your Name:",
    validate: function (value) {
        if (value.trim() !== "") {
            return true;
        }
        return "Please enter non-empty value.";
    },
});
let score = 0;
console.log(`Welcome to Quiz Game ${chalk.bold.blueBright.italic(playerName.Name)}`);
let quiz1 = await inquirer.prompt({
    name: "Question1",
    type: "checkbox",
    message: "What is Typescript?",
    choices: ["Only language", "A subset of Javascript", "A superset of Javascript", "Same as Javascript"]
});
if (quiz1.Question1 == "A superset of Javascript") {
    console.log(chalk.greenBright("Right Answer"));
    score += 1;
    console.log("Your score:", chalk.greenBright(score));
}
else {
    console.log(chalk.redBright("Wrong Answer"));
    console.log("Your score:", chalk.redBright(0));
}
let quiz2 = await inquirer.prompt({
    name: "Question2",
    type: "checkbox",
    message: "What are the three main 'simple types' in TypeScript?",
    choices: ["Boolean, Number, String", "Object, String, Number", "Array, Object, Boolean",
        "Object, Array, Symbol"]
});
if (quiz2.Question2 == "Boolean, Number, String") {
    console.log(chalk.greenBright("Right Answer"));
    score += 1;
    console.log("Your score:", chalk.greenBright(score));
}
else {
    console.log(chalk.redBright("Wrong Answer"));
    console.log("Your score:", chalk.redBright(0));
}
let quiz3 = await inquirer.prompt({
    name: "Question3",
    type: "checkbox",
    message: "What type of assignment is this variable, `const fullName: string = 'Ratan Lal';?",
    choices: ["Explicit", "Implicit"]
});
if (quiz3.Question3 == "Explicit") {
    console.log(chalk.greenBright("Right Answer"));
    score += 1;
    console.log("Your score:", chalk.greenBright(score));
}
else {
    console.log(chalk.redBright("Wrong Answer"));
    console.log("Your score:", chalk.redBright(0));
}
let quiz4 = await inquirer.prompt({
    name: "Question4",
    type: "checkbox",
    message: "What is the inherited type for the variable example in `const example = ['Ratan Lal']?",
    choices: ["any[]", "string", "string[]", "unknown"]
});
if (quiz4.Question4 == "string[]") {
    console.log(chalk.greenBright("Right Answer"));
    score += 1;
    console.log("Your score:", chalk.greenBright(score));
}
else {
    console.log(chalk.redBright("Wrong Answer"));
    console.log("Your score:", chalk.redBright(0));
}
let quiz5 = await inquirer.prompt({
    name: "Question5",
    type: "checkbox",
    message: "What are the two types of enums?",
    choices: ["String and Boolean", "Number and Number Array", "String and Number", "Number and Boolean"]
});
if (quiz5.Question5 == "String and Number") {
    console.log(chalk.greenBright("Right Answer"));
    score += 1;
    console.log("Your score:", chalk.greenBright(score));
}
else {
    console.log(chalk.redBright("Wrong Answer"));
    console.log("Your score:", chalk.redBright(0));
}
console.log(`Your Total Score: ${chalk.bold.greenBright(score)}`);
console.log(chalk.yellowBright("********************Thank You For Attempting This Quiz********************"));
