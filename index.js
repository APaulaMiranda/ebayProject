const inquirer = require("inquirer")

const initialQuestion = [
    {
        Name: "input",
        name: "github",
        message: "What is the name of the item you want to Post"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["red", "blue", "green", "pink"]
    }
];

const bidQuestions = [
    {
        Name: "input",
        name: "github",
        message: "What is the name of the item you want to Post"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["red", "blue", "green", "pink"]
    }
];