// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billItemTypeElement = document.querySelector(".billItemType");
var radioBillSettingsAddBtn= document.querySelector(".radioBillSettingsAddBtn");
var callTotalTwoElement= document.querySelector(".callTotalTwo");
var smsTotalTwoElement= document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

var callTotalTwo =0;
var smsTotalTwo =0;
var totalTwo = 0;

function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var  billItemType= checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
    if (billItemType === "call"){
        callTotalTwo += 2.75;
    }
    else if (billItemType === "sms"){
        smsTotalTwo += 0.75;
    }
      //update the totals that is displayed on the screen.
      callTotalTwoElement.innerHTML =  callTotalTwo.toFixed(2);
      smsTotalTwoElement.innerHTML = smsTotalTwo.toFixed(2);
      totalTwo = callTotalTwo + smsTotalTwo;
     totalTwoElement.innerHTML = totalTwo.toFixed(2);
     
     if (totalTwo >= 50){
        // adding the danger class will make the text red
        totalTwoElement.classList.add("danger");
    }
    else if (totalTwo >= 30){
        totalTwoElement.classList.add("warning");
    }
}

    //color the total based billTypeText
   
  
// the event listener is declared below here

radioBillSettingsAddBtn.addEventListener('click', radioBill);