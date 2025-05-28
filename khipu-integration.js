require('dotenv').config();
const qs = require('querystring');
const fetch = require('node-fetch');

// Carga de credenciales
const receiverId = process.env.KHIPU_RECEIVER_ID;
const secret = process.env.KHIPU_SECRET;

if (!receiverId || !secret) {
  console.error('❌ Faltan credenciales en .env');
  process.exit(1);
}

// Codificar la autenticación básica
const credentials = Buffer.from(`${receiverId}:${secret}`).toString('base64');

// Parámetros del pago
const params = {
  subject: 'Pago demo desde Node.js',
  amount: 5000,
  currency: 'CLP',
  transaction_id: 'test-' + Date.now(),
  payer_email: 'cliente@ejemplo.com',
  bank_id: 'DEMO',
  return_url: 'https://www.google.com',
  cancel_url: 'https://www.google.com',
  notify_url: 'https://webhook.site/tu-url-aqui' 
};

async function crearCobro() {
  try {
    const response = await fetch('https://khipu.com/api/2.0/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credentials}`
      },
      body: qs.stringify(params)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }

    console.log('✅ ¡Cobro creado con éxito!');
    console.log('🔗 URL para pagar:', data.payment_url);
  } catch (error) {
    console.error('❌ Error al crear el cobro:', error.message);
  }
}

crearCobro();
