
const form = document.getElementById('form');
    const emailfield= document.getElementById('email');
    const submit = document.getElementById('button');
    const error = document.getElementById('error');
    const input = document.getElementById('email');
    const success = document.getElementById('success');
    const main = document.getElementById('main');
    const dismiss = document.getElementById('dismiss');
    
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      }
      
      function handleSignUpFormSubmit(e) {
        e.preventDefault(); // Prevent default form submission
        const email = emailfield.value; // Get the email value
      
        if (!isValidEmail(email)) {
          error.textContent = "Please enter a valid email";
          input.style.backgroundColor = "#ff00001c";
          input.style.border = "1px solid red"
        } else {
          error.textContent = "";
          document.getElementById('emailname').innerText = email;
          showSuccessMessage();
        }
      }
      
      function showSuccessMessage() {
        main.classList.add('hide');
        success.classList.add('show');
    }
      form.addEventListener('submit', handleSignUpFormSubmit);


      dismiss.addEventListener('click', () => {
        hideSuccessMessage();
        form.reset();
        main.classList.remove('hide');
    });
      function hideSuccessMessage() {
        success.classList.remove('show');
    }


      