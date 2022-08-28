//Requerimos el paquete
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "rodolfo@naz-d.com", // generated ethereal user
    pass: "RTyH9P0dCkjV", // generated ethereal password
  },
});


// var mensaje = "Hola desde nodejs...";



module.exports = transporter;