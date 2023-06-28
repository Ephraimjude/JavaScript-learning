function showAlert() {
    var firstName = document.getElementById('txtFirstName').value;
    var lastName = document.getElementById('txtLastName').value;
  
    if (firstName && lastName) {
      alert("Account created");
    } else {
      alert("Fill the blank spaces");
    }
  }  