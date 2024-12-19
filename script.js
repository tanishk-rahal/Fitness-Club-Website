document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');
    const formTitle = document.getElementById('form-title');
    const signInBtn = document.getElementById('sign-in-btn');
    const signUpBtn = document.getElementById('sign-up-btn');
    const form = document.getElementById('form');
  
    signInBtn.addEventListener('click', () => {
      formTitle.textContent = 'Sign In';
      signInForm.classList.add('show');
      signUpForm.classList.remove('show');
      signInForm.classList.add('transition');
      signUpForm.classList.remove('transition');
    });
  
    signUpBtn.addEventListener('click', () => {
      formTitle.textContent = 'Sign Up';
      signUpForm.classList.add('show');
      signInForm.classList.remove('show');
      signUpForm.classList.add('transition');
      signInForm.classList.remove('transition');
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      if (formTitle.textContent === 'Sign In') {
        validateSignIn(formData);
      } else if (formTitle.textContent === 'Sign Up') {
        validateSignUp(formData);
      }
    });
  
    function validateSignIn(formData) {
      const email = formData.get('email');
      const password = formData.get('password');
      if (!email || !password) {
        alert('Please fill in all fields.');
      } else {
        alert('Signed In!');
      }
    }
  
    function validateSignUp(formData) {
      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');
      if (!name || !email || !password) {
        alert('Please fill in all fields.');
      } else {
        alert('Signed Up!');
      }
    }
  });