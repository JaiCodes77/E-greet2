function validateForm() {
    var username = document.forms["myForm"]["username"].value;
    var mail = document.forms["myForm"]["mail"].value;
    var password = document.forms["myForm"]["password"].value;
    var cpassword = document.forms["myForm"]["cpassword"].value;
  
    // Regular expression for email validation
    var emailRegex = /^\S+@\S+\.\S+$/;
    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
  
    if (username == "") {
      alert("username must be filled out");
      return false;
    }
    if (mail == "") {
      alert("Email must be filled out");
      return false;
    } else if (!emailRegex.test(mail)) {
      alert("Invalid email address");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    else if(!password_pattern.test(password))
    {
      alert( "*Please enter valid password!");
      return false; 
      
    }
   

    if (cpassword == "") {
      alert("Confirm Password must be filled out");
      return false;
    }
    if (password != cpassword) {
      alert("Passwords do not match");
      return false;
    }
  }