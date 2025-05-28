# 💼 Prueba técnica – Integración API de pagos Khipu

Este proyecto fue realizado como parte de la prueba técnica para el puesto de **Customer Success con enfoque técnico** en **Khipu**. El objetivo es simular una integración real con la API REST de pagos utilizando credenciales de desarrollador y ambiente de prueba.

---

## ⚙️ Tecnologías utilizadas

- Node.js  
- node-fetch  
- querystring  
- dotenv  
- API REST de Khipu (modo desarrollador)

---

## 🚀 Descripción del proyecto

Este script permite generar un **cobro de prueba** utilizando la API REST de Khipu en modo desarrollador. Para autenticar la solicitud, se usa el esquema HTTP Basic (`receiver_id + secret`) codificado en base64.

---

## 📂 Estructura del proyecto

- `khipu-integration.js`: Código principal que realiza la solicitud a la API.  
- `.env`: Variables sensibles de entorno (**IGNORADO por Git**).  
- `.gitignore`: Para evitar subir `.env` y `node_modules`.

---

## 🔧 Configuración previa

1. Crear una cuenta en [https://portal.khipu.com](https://portal.khipu.com) y habilitar el **modo desarrollador**.  
2. Obtener los valores de:
   - `receiver_id`
   - `secret`
3. Crear un archivo `.env` (en la raíz del proyecto) con el siguiente contenido:

```env
KHIPU_RECEIVER_ID=499180
KHIPU_SECRET=***************

## ▶️ Cómo ejecutar

1. Instalar las dependencias:

```bash
npm install

2. Ejecutar el script:

bash
node khipu-integration.js
```

✅ Resultado esperado
Si la solicitud es exitosa, debería verse en consola:

✅ ¡Cobro creado con éxito!
🔗 URL para pagar: https://khipu.com/payment/...

🧪 Detalles técnicos
- Se envían los datos con Content-Type: application/x-www-form-urlencoded.

- Se utiliza fetch con autenticación HTTP Basic.

- Se usan valores de prueba provistos por Khipu (banco DEMO y montos ficticios).

📝 Notas
En caso de error 403 ("mensaje no está firmado correctamente"), se recomienda:

Verificar las credenciales en .env

Confirmar que la cuenta esté en modo desarrollador

Contactar a soporte técnico de Khipu (El problema fue reportado a soporte técnico como parte de esta prueba)

👤 Autor
Yamila Hadad
https://github.com/Yamilahadad



