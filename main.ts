#! /usr/bin/ env node

import inquirer from "inquirer";
 let myBalance = 10000;
 let myPin = 240811;
 let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
 ]
 );
if(pinAnswer.pin=== myPin){
    console.log("Correct pin code!!!");
   let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please Select Option",
                type: "list",
                choices: ["withdraw", "Check Balance", "Fast Cash", "Utility bills Payment "],
            }
        ]
    )
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        )
        let newBalance = myBalance -= amountAns.amount 
        if(amountAns.amount <= myBalance) {
        console.log("your remaining balance is " +newBalance);
        }
        
        else {
            console.log("Oooopsss!! Insufficient Balance..");
            
        }
    }
    
    
    

   
        
    else if (operationAns.operation === "Check Balance") {
        console.log(`your current amount is ${myBalance}`);
        
    }
    
    else if (operationAns.operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt(
            [
                {
                    name: "fast",
                    message: "Select an amount from here:",
                    type: "list",
                    choices: [2000, 4000, 6000, 8000],
                }
            ]
        )
        myBalance -= fastCashAns.fast
        console.log("your remaining balance is " +myBalance);
        
    }
    if (operationAns.operation === "Utility bills Payment "){
        let amount1Ans = await inquirer.prompt(
            [
                {
                    name: "amount1",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        )
        let newBalance1 = myBalance -= amount1Ans.amount1 
        if(amount1Ans.amount1 <= myBalance) {
        console.log("your remaining balance is " +newBalance1);
        }
        
        else {
            console.log("Oooopsss!! Insufficient Balance..");
            
        }
    }

}

else{
    console.log("Incorrect pin code!!!");
    
}
