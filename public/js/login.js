const loginFormHandler = async (event) => {
    event.preventDefault();
    // console.log('hello')
    // console.log(document.getElementById('email-login').value)
    // console.log(document.getElementById('password-login'))

    // Collect values from the login form
    const email = document.getElementById('email-login').value.trim();
    const password = document.querySelector('.password-login').value.trim();
    console.log(email, password)

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('.password-signup').value.trim();

    if (name && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.signin-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signin-form')
    .addEventListener('submit', signupFormHandler);