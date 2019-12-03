const inquirer = require("inquirer")

const initialQuestion = [

    {
        type: "list",
        name: "postOrBid",
        message: "Do you want to post or to bid?",
        choices: ["POST AN ITEM", "BID ON AN ITEM"]
    }
];

const postQuestion = [

    {
        type: "input",
        name: "name",
        message: "What is the item name?",
    },
    {
        type: "input",
        name: "price",
        message: "What should be the minimum bid?"
    }

];

inquirer.prompt(initialQuestion).then(function (answers) {
    if (answers.postOrBid == "POST AN ITEM") {

        inquirer.prompt(postQuestion).then(function (answers) {

            console.log(answers)
        })
    }
})