const https= require('https')
https.get('https://coderbyte.com/api/challenges/json/reset-get-simple',(response)=>{
    let data = '';
      
        response.on('data', (chunk) => {
          data += chunk;
        });
      
        response.on('end', () => {
          // All response data has been received
          console.log(data);  // Log the complete response
        });

      });

    https.get(url, (response) => {
        let data = '';
      
        response.on('data', (chunk) => {
          data += chunk;
        });
      
        response.on('end', () => {
          // All response data has been received
          console.log(data);  // Log the complete response
        });
      });

      function validatePassword(password) {
        let isValid = true;
      
        // Length check
        if (password.length < 7 || password.length > 20) {
          console.log("Password must be between 7 and 20 characters long.");
          isValid = false;
        }
      
        // Numeric character check
        if (!/[0-9]/.test(password)) {
          console.log("Password must contain at least one number.");
          isValid = false;
        }
      
        // Uppercase character check
        if (!/[A-Z]/.test(password)) {
          console.log("Password must contain at least one uppercase letter.");
          isValid = false;
        }
      
        // Non-alphanumeric character check
        if (!/[^a-zA-Z0-9]/.test(password)) {
          console.log("Password must contain at least one math sign or punctuation mark.");
          isValid = false;
        }
      
        // "password" substring check
        if (password.toLowerCase().includes("password")) {
          console.log("Password cannot contain the word 'password'.");
          isValid = false;
        }
      
        return isValid;
      }
      
      const userPassword = "StrongP@ssw0rd123!";  // Example password
      
      if (validatePassword(userPassword)) {
        console.log("Password is valid!");
      } else {
        console.log("Password is invalid. Please follow the guidelines.");
      }