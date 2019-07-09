var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");


var calculateBill = FactoryCalculateBIll();
function calculateBtnClicked(){
    
    var billString = billStringElement.value;
    var billTotal = calculateBill.billString(billType);
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    
    
   // var billTotal = 0;
    var colour = calculateBill.colourIndicator(billTotal);

    if (colour == "danger"){
        billTotalElement.classList.add(colour);
         billTotalElement.classList.remove("danger");
    }else if (colour == "warning"){
        billTotalElement.classList.add(colour);
        billTotalElement.classList.remove("warning");
    }else {
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.remove("warning");   
    }
}
calculateBtnElement.addEventListener('click', calculateBtnClicked);
