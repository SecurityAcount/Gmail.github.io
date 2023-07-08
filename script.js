document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Verificar el inicio de sesión aquí y mostrar/ocultar los elementos adecuados
  if (username === 'usuario' && password === 'contraseña') {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('profileContainer').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = 'Nombre de usuario: ' + username;
  } else {
    alert('Credenciales inválidas. Inténtalo de nuevo.');
  }
});

document.getElementById('createPostButton').addEventListener('click', function() {
  document.getElementById('profileContainer').style.display = 'none';
  document.getElementById('recordForm').style.display = 'block';
});

document.getElementById('recordForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var recognition = new webkitSpeechRecognition();
  recognition.lang = 'es-ES';

  recognition.onresult = function(event) {
    var speechResult = event.results[0][0].transcript;
    console.log('Grabación:', speechResult);

    // Procesar la grabación aquí (guardar en una base de datos, mostrar en la página, etc.)

    // Restablecer el formulario y volver al perfil
    document.getElementById('recordForm').reset();
    document.getElementById('recordForm').style.display = 'none';
    document.getElementById('profileContainer').style.display = 'block';
  };

  recognition.start();
});
