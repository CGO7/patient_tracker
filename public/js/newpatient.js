const patientFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#first-name').value.trim();
    const password = document.querySelector('#last-name').value.trim();
    const password = document.querySelector('#phone-number').value.trim();
    const password = document.querySelector('#dob').value.trim();
    const password = document.querySelector('#gender').value.trim();
    const password = document.querySelector('#drug-allergies').value.trim();
    const password = document.querySelector('#insurance').value.trim();
    const password = document.querySelector('#address').value.trim();
    const password = document.querySelector('#city').value.trim();
    const password = document.querySelector('#state').value.trim();
    const password = document.querySelector('#zip').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const loginFormEl = document.querySelector('.login-form');
  
  if (loginFormEl) {
    loginFormEl.addEventListener('submit', patientFormHandler);
  }