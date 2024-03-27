#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollars
let myPin = 310306;

let pinAns = await inquirer.prompt(
    [
        {
         name: "pin",
         message: "Enter your pin:",
         type: "number"
        }
    ]
);
if (pinAns.pin === myPin)
{
    console.log("You may proceed forward!")

let operationAns = await inquirer.prompt(
    [
        {
         name: "operation",
         message: "Select one of the services below:",
         type: "list",
         choices: ["Withdraw Money", "Check current balance", "Fast Cash"]
         }
    ]
);

  if(operationAns.operation === "Withdraw Money")
  {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Enter your amount:",
                type: "number"
            }
        ]
    );
    if (amountAns.amount > myBalance) // HomeWork #1: Make a condition for amount entered > actual balance 
    {
        console.log("Insufficient balnce!")
    }
    else 
    {
    myBalance -= amountAns.amount;
    console.log(`Your remaining balance is: ${myBalance}`) // HomeWork #2: Printing a Message using Tempelate literals
    }
  }
  else if (operationAns.operation === "Check current balance")
  {
    console.log("Your current balance is: " + myBalance)
  }
  else if (operationAns.operation === "Fast Cash")  // HomeWork #3: Add Fast Cash choices for the users
  {
  let fastAns = await inquirer.prompt(     
    [
        {
            name: "cash",
            message: "Select your desired amount",
            type: "list",
            choices: ["1000", "2000", "5000"]
        }
    ]
  );
  if(fastAns.cash === "1000")
  {
    myBalance -= fastAns.cash;
    console.log("Your remaining balance is: " + myBalance )
  };
  if(fastAns.cash === "2000")
  {
    myBalance -= fastAns.cash;
    console.log("Your remaining balance is: " + myBalance )
  };
  if(fastAns.cash === "5000")
  {
    myBalance -= fastAns.cash;
    console.log("Your remaining balance is: " + myBalance )
  }
  }
  console.log("Thankyou for using our services!");
}
else 
{
    console.log("Please enter a valid pin!")
}

