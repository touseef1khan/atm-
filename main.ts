#! /usr/bin/env node

import inquirer from "inquirer";

interface ansType {
userid: string,
userpin: number,
accountType : string,
transactionType : string,
amount : number,

}

const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "kindly Enter your Id:"
    },
    {
        type: "number",
        name: "userpin",
        message: "kindly Enter your pin:"
    },
    {
        type: "list",
        name: "accountType",
        choices:["current", "saving"],
        message: "select your account type:",
        
        },
        {
    type: "list",
    name: "transactiontype",
    choices:["fast cash", "withdraw"],
    message: "select your transation",
    when(answers) {
        return answers.accountType
    },
        },
        {
            type: "list",
            name: "amount",
            choices:[1000, 2000, 10000, 20000],
            message: "select your amount",
            when(answers) {
                return answers.accountType == "fast cash"
            },
                },
                {
                    type: "number",
                    name: "amount",
                   message:"Enter your amount",
                   when(answers) {
                       return answers.transactiontype == "withdraw"
                   },
                }
])

if (answers.userid && answers.userpin) {

    const balance = Math.floor(Math.random()*10000000);
    console.log(balance)
    const EnteredAmount = answers.amount;
    if (balance < EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log( "your remaining balance is",remianing)
    } else{
        console.log("insuficient balance")
    }
}