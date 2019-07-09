function FactoryCalculateBIll() {
  var billTotal = 0;

  function bill(param) {
    var string = param.split(",");

    for (var i = 0; i < string.length; i++) {
      var billItem = string[i].trim();
      
      if (billItem === "call") {
        billTotal += 2.75;
      } else if (billItem === "sms") {
        billTotal += 0.75;
      }
    }
  }

  function displayTotal() {
    return billTotal.toFixed(2);
  }

  return {
    check: bill,
    total: displayTotal,
  }

}