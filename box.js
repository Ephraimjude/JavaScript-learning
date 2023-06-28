document.addEventListener('DOMContentLoaded', function() {
    var amountInput = document.getElementById('amount-input');
    var sendButton = document.getElementById('send-button');
    var sentAmountInput = document.getElementById('sent-amount-input');
  
    sendButton.addEventListener('click', function() {
      var amount = parseFloat(amountInput.value);
      var fees = calculateFees(amount);
      var sentAmount = amount - fees;
      sentAmountInput.value = sentAmount.toFixed(2);
    });
  
    function calculateFees(amount) {
      // Your fee calculation logic goes here
      
      // Replace this with your own calculation
      return amount * 0.1;
    }
  });
  