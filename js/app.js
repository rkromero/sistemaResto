document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Aquí deberías agregar la lógica de autenticación
    if (email === 'admin@example.com' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Credenciales incorrectas');
    }
});

document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const clientList = document.getElementById('clientList');
    const li = document.createElement('li');
    li.textContent = `Nombre: ${name}, Email: ${email}`;
    clientList.appendChild(li);
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const clientId = document.getElementById('clientId').value;
    const amount = document.getElementById('orderAmount').value;
    const orderList = document.getElementById('orderList');
    const li = document.createElement('li');
    li.textContent = `Cliente ID: ${clientId}, Monto: ${amount}`;
    orderList.appendChild(li);
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const clientId = document.getElementById('paymentClientId').value;
    const amount = document.getElementById('paymentAmount').value;
    const paymentList = document.getElementById('paymentList');
    const li = document.createElement('li');
    li.textContent = `Cliente ID: ${clientId}, Monto: ${amount}`;
    paymentList.appendChild(li);
});