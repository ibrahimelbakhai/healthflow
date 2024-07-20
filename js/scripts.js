document.getElementById('addPatientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const patientData = {};
    formData.forEach((value, key) => {
        patientData[key] = value;
    });

    // For demonstration purposes, we'll log the data to the console
    console.log('Patient Data:', patientData);

    // You can now send this data to a backend server or save it locally
    // Example of sending data to a server using fetch:
    /*
    fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    */
});
