document.getElementById('contactForm').addEventListener('submit', ()=> {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    // Simple validation
    if (name && email && message) {
      document.getElementById('status').textContent = 'Thank you for your message, ' + name + '. I will get back to you soon!';
      document.getElementById('status').style.color = 'white';
  
      // You can also handle actual form submission here (AJAX request, etc.)
      // For now, it just clears the form.
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('status').textContent = 'Please fill out all fields.';
      document.getElementById('status').style.color = 'red';
    }
  });