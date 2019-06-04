// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var radioBillSettingsAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalSettings= document.querySelector(".callTotalSettings");
var smsTotalSettings= document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalTwo");

// var callCostSettingElem = document.querySelector(".callCostSetting");
// var smsCostingSettingElem = document.querySelector(".smsCostSetting");
// var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
// var criticalLevelSettingElem = document.querySelector(".criticalLevel");

var callCost =0;
var smsCost =0;
var totalCost = 0;

function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemTypeWithSettings = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
    }
    if (billItemTypeWithSettings === "call"){
        callTotalTwo += 2.75;
    }
    else if (billItemTypeWithSettings === "sms"){
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

radioBillSettingsAddBtn.addEventListener('click', radioBillSettings);