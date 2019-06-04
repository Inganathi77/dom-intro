// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");

var callsTotalOne = 0;
var smsTotalOne = 0;
var totalCost = 0;


function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotalOne += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotalOne += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalOneElement .innerHTML = callsTotalOne.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotalOne.toFixed(2);
    totalCost = callsTotalOne + smsTotalOne;
    totalOneElement .innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElement.classList.add("warning");
    }
}



addToBillBtn.addEventListener('click', textBillTotal);