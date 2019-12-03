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

const bidQuestion = [

    {
        type: "input",
        name: "name",
        message: "What is the item you want to bid on?",
    },
    {
        type: "input",
        name: "price",
        message: "How much do you want to offer?"
    }

];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3309,
    user: "root",
    password: process.env.DBPASS,
    database: process.env.DBNAME
});

// initiatte db conexion
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id ” + connection.threadId + “\n");
    createProduct();
});



inquirer.prompt(initialQuestion).then(function (answers) {
    if (answers.postOrBid == "POST AN ITEM") {

        inquirer.prompt(postQuestion).then(function (answers) {

            console.log(answers)
        })
    }
    else if (answers.postOrBid == "BID ON AN ITEM") {

        // send query to get items , selec all from itwma


        inquirer.prompt(postQuestion).then(function (answers) {

            console.log(answers)
        })
    }
})