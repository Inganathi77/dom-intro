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
var radioBillSettingsAddBtn = document.querySelector(".radioBillSettingsAddBtn ");
var callTotalSettings= document.querySelector(".callTotalSettings");
var smsTotalSettings= document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");


var updateSettings = document.querySelector(".updateSettings");
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostingSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

var callCost = 0;
var smsCost = 0;
var totalCost = 0;
var callCostSetting = 0;
var smsCostSetting = 0;
var warningLevel = 0;
var criticalLevel = 0;


function radioBillSettings(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemTypeWithSettings = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
    }
    if (billItemTypeWithSettings === "call"){
        callCost += callCostSetting ;
    }
    else if (billItemTypeWithSettings === "sms"){
        smsCost +=  smsCostSetting;
    }
      //update the totals that is displayed on the screen.
      callTotalSettings.innerHTML = callCost.toFixed(2);
      smsTotalSettings.innerHTML =  smsCost.toFixed(2);
      totalCost =  callCost +  smsCost;
      totalSettings.innerHTML =  totalCost.toFixed(2);
     
    

   if (totalCost >= warningLevel ){
        totalSettings.classList.add("warning");
         totalSettings.classList.remove("danger");
    } 
    if (totalCost >= criticalLevel){
        totalSettings.classList.remove("warning");
        totalSettings.classList.add("danger");
        radioBillSettingsAddBtn.disabled = true;
    } 
    
}
    //color the total based billTypeText
   
  
// the event listener is declared below here

radioBillSettingsAddBtn.addEventListener('click', radioBillSettings);

function settings(){
   
    callCostSetting = Number(callCostSettingElem.value);
    smsCostSetting = Number(smsCostingSettingElem.value);
    warningLevel = Number(warningLevelSettingElem.value);
    criticalLevel =  Number(criticalLevelSettingElem.value);

    if(updateSettings) {
        radioBillSettingsAddBtn.disabled = false;
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("danger");
        if(totalCost >= criticalLevel){
            totalSettings.classList.add("danger");
          
        }
        if(totalCost >= warningLevel){
            totalSettings.classList.add("warning");
        }
      
       }
    }
       
updateSettings.addEventListener('click', settings);