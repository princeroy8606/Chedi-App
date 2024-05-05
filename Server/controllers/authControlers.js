const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  const { Name, Email, Phone, Password } = req.body;
  console.log(req.body);
  try {
    let existingUser = await User.findOne({ email: Email });
    if (existingUser) throw new Error("Email already exist");

    const hashedPassword = await bcrypt.hash(Password, 2);
    const newUser = new User({
      name: Name,
      email: Email,
      phone: Phone,
      password: hashedPassword,
    });
    await newUser.save();
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Email does not exist");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Password Incorrect");
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};