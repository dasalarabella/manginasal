   document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      

      if (email && password) {
        alert('Sign up successful! Welcome to Mang Inasal Malolos.');
        
        window.location.href = 'index.html';
      } else {
        alert('Please fill in all fields.');
      }
    });