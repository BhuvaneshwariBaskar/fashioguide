const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../database/database");
const nodemailer = require('nodemailer');

exports.signUpPost = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    let user = await User.findOne({ where: { email }, raw: true });
    let newUser;
    if (user)
      return res.status(500).json({
        error: "User already exists",
      });

    else {
      //User Creation
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
       newUser = await User.create({ name, email, password:hash, phone });
      console.log("User's auto-generated ID:", newUser.id);
      // res
      //   .status(201)
      //   .json({ message: "User created successfully", user: newUser });
    }

    const token = jwt.sign({
      user_id: newUser.user_id, 
      email: newUser.email,
      password:newUser.password,
      name: newUser.name,
      address:newUser.address,
      pincode:newUser.pincode,
      profileimg:newUser.profileimg,
      phone: newUser.phone,
      gender:newUser.gender,
      orderList:newUser.orderList,
      wishlist:newUser.wishlist,
      history:newUser.history,
      recentSearchWords:newUser.recentSearchWords,
      bag:newUser.bag,
  }, process.env.SECRET, {
      expiresIn: 1000 * 60 * 60 * 24 * 7 * 30
  });
  console.log(token);
  return res.json({
      token,message: "User created successfully",
      ...newUser.dataValues
      
  });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//LoginPost

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user=await User.findOne({where:{email},raw:true});
    if (!user) {
      return res.status(401).json({
        error:"Invalid Credentials"
      });
    }
    else{
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({
          error: "Invalid password",
        });
      }
    }
    const token = jwt.sign({
      user_id: user.user_id, 
      email: user.email,
      password:user.password,
      name: user.name,
      address:user.address,
      pincode:user.pincode,
      profileimg:user.profileimg,
      phone: user.phone,
      gender:user.gender,
      orderList:user.orderList,
      wishlist:user.wishlist,
      history:user.history,
      recentSearchWords:user.recentSearchWords,
      bag:user.bag,
  }, process.env.SECRET, {
      expiresIn: 1000 * 60 * 60 * 24 * 7 * 30
  });
  console.log(user);
  
  return res.json({
      token,message: "Login successfull",
      user
      
  });
  } catch (error) {
    return res.status(500).json({
      error:"User Not Found"
    });
  }

};

//profile page 
exports.updateProfile = async (req, res) => {
  try {
    const { user_id, name, country, phone, gender, address, pincode } = req.body;

    let user = await User.findByPk(user_id);

    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    // Update the profile information
    user.user_id = user_id;
    user.name = name;
    user.country = country;
    user.phone = phone;
    user.gender = gender;
    user.address = address;
    user.pincode = pincode;

    await user.save();

    return res.json("Profile updated successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message, stack: error.stack });
  }
};

//email


exports.sendEmail = async (req, res) => {
    const { to, subject, text } = req.body;

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ksgopika02@gmail.com', // replace with your Gmail email
            pass: 'miracle03$@$' // replace with your Gmail password
        }
    });

    // Email configuration
    const mailOptions = {
        from: 'ksgopika02@gmail.com',
        to:user.email,
        subject: 'Order Confirmation',
        text: 'Thank you for your order!'
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


