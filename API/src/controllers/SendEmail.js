const transporter = require("../../Tools/Email");
const path = require("path");
const emailUser = process.env.EMAIL_USER;
// const emailTemplate = fs.readFileSync(
//   path.join(__dirname, "../../Templates/emailRegister.html"),
//   "utf-8"
// );

// Ahi debe estar el html con el cuerpo del mensaje que vas a buscar en  stripo

// try whit http://localhost:6000/ClientData  and post {"email":"hola@gmail.com",tlf:12313212}

const Send = (req, res) => {
  console.log(req.body);

  try {
    const menssageRegister = {
      from: emailUser,
      to: email,
      subject: `Confirmación de Registro`,
      html: emailTemplateConValores,
    };

    transporter.sendMail(menssageRegister, (error, info) => {
      if (error) {
        console.error("Error al enviar el correo electrónico :", error);
      } else {
        console.log("Correo electrónico enviado con éxito:", info.response);
      }
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { Send };
