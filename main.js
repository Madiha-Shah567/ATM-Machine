#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 7060;
let pinAns = await inquirer.prompt([{
        name: "pin",
        message: "Enter your  4 digit pincode",
        type: "number"
    }]);
if (pinAns.pin === mypin) {
    console.log("correct pincode!!!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Choose your option",
            choices: ["withdraw", "fast cash", "check balance"]
        }]);
    //user selects withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "Enter your amount",
            type: "number",
        });
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`your remaining balance is ${balance}`);
        }
        else {
            console.log(`This amount is unsufficient`);
        }
    }
    //user selects fast cash
    else if (operationAns.operation === "fast cash") {
        let fastcash = await inquirer.prompt([{
                name: "fastamount",
                type: "list",
                message: "choose your amount",
                choices: ["1000", "3000", "5000", "10000", "15000"]
            }]);
        if (fastcash.fastamount <= myBalance) {
            let balance2 = myBalance - fastcash.fastamount;
            console.log(`your remaining balance is ${balance2}`);
        }
        else {
            console.log(`This amount is unsufficient`);
        }
    }
    //user select check balance
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Incorrect pincode");
}
