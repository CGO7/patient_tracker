const patientFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new patient form
  const first_name = document.querySelector('#first-name').value.trim();
  const last_name = document.querySelector('#last-name').value.trim();
  const phone_number = document.querySelector('#phone-number').value.trim();
  const date_of_birth = document.querySelector('#dob').value.trim();
  const gender = document.querySelector('#gender').value;
  const drug_allergies = document.querySelector('#drug-allergies').value.trim();
  const insurance = document.querySelector('#insurance').value.trim();
  const address = document.querySelector('#address').value.trim();
  const city = document.querySelector('#city').value.trim();
  const state = document.querySelector('#state').value.trim();
  const zip = document.querySelector('#zip').value.trim();

  try {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/patient/add', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, phone_number, date_of_birth, gender, drug_allergies, insurance, address, city, state, zip }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/patients');
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};

const patientFormEl = document.querySelector('.patient-form');

if (patientFormEl) {
  patientFormEl.addEventListener('submit', patientFormHandler);
}