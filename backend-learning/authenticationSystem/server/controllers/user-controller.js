const bcrypt = require("bcrypt");
const createUser = require("../models/user-model");
//const nodemailer = require("nodemailer");

//Register Controller
exports.registerUser = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await createUser.create({
      username,
      email,
      password: hashedPassword,
    });

    console.log("User registered successfully");
    res.status(201).json({
      message: "User registered successfully",
      user: response,
    });
  } catch (error) {
    console.log("Error while registering user");
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Login Controller
exports.loginUser = async (req, res) => {
  try {
    const user = await createUser.findOne({ email: req.body.email });
 
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const matchPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!matchPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    console.log("User login successfully");

    res.status(200).json({
      success: true,
      message: "Login successful",
      response: user,
    });
  } catch (error) {
    console.log("Error while logging in user");
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//Forget Password

// exports.forgetPassword = async (req, res) => {
//   const { email } = req.body;
//   try {
//     const user = await createUser.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Setting up nodemailer transport
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "",
//         pass: "",
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: "",
//       to: user.email,
//       subject: "Your password",
//       text: `Hello,\n\nYour password is: ${user.password}\n\n`,
//     };

//     // Sending the email
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log("Error sending email: ", error);
//         return res.status(500).json({ message: "Failed to send email" });
//       } else {
//         console.log("Email sent: " + info.response);
//         res.status(200).json({ message: "Email successfully sent!" });
//       }
//     });
//   } catch (error) {
//     console.log("Error while fetching user", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
