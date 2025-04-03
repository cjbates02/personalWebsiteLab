document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    document.getElementById('formStatus').textContent = `Thanks, ${name}! We received your message.`;
  
    this.reset();
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the personal website! This is a JS demo.');
  });
  