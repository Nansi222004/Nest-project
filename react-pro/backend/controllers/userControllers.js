import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



export const signup = async (req, res) => {
    try {

        const {email, password, username} = req.body;

        if (!email) {
          return res.status(400).json({ message: "email required" });
        }

        if(!password){
            return res.status(400).json({message: "password is required"});
        }

        if(!username){
            return res.status(400).json({message: "username is required"});
        }

        if (username.length < 3){
            return res.status(400).json({message: "username too short"});
        }

        if (password.length < 6) {
          return res.status(400).json({ message: "Password too short" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
         return res.status(400).json({ message: "Invalid email" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }
        

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ 
            username,
            email,
            password: hashedPassword});

            const token = jwt.sign(
              { id: user._id },
               process.env.JWT_SECRET,
              { expiresIn: "1d" }
            );


        res.json({
            message: "user signup successfully",
            token,
            user:{
                username: user.username,
                _id: user._id,
                email: user.email,
                phone: user.phone,
                address: user.address,

            },
        })
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        
        if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }
        

        const user = await User.findOne({email});

        

        if(!user) {
            return res.status(400).json({message:"user not exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

       
        if(!isMatch) {
            return res.status(400).json({message:"Invalid Password"})
        }

        const token = jwt.sign(
           { id: user._id },
            process.env.JWT_SECRET,
           { expiresIn: "1d" }
        );

        res.json({
           token,
           message:"Login Successfull",
           user: {
           _id: user._id,
           email: user.email,
           username: user.username,
           address: user.address,
           phone: user.phone,
           avatar:user.avatar,
           role:user.role,
           },
        });

        
    } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
    
  }
}



export const editPro = async (req, res) => {
    try{
        const userId = req.user.id;
        let avatarUrl;

        if (req.file) {
            avatarUrl = `http://localhost:3000/uploads/${req.file.filename}`;
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                username: req.body.username,
                address: req.body.address,
                phone: req.body.phone,
                ...(avatarUrl && { avatar: avatarUrl }),
            },
            { returnDocument: "after", runValidators: true }
        ).select("-password");
        res.json(
            {user: updatedUser});


    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}




// export const signup = async (req, res) => {
//   try {
//     const { email, password, username } = req.body;

//     // ✅ Required fields
//     if (!email || !password || !username) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     // ✅ Username validation
//     if (username.trim().length < 3) {
//       return res.status(400).json({ message: "Username too short" });
//     }

//     // ✅ Password validation
//     if (password.trim().length < 6) {
//       return res.status(400).json({ message: "Password too short" });
//     }

//     // ✅ Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ message: "Invalid email" });
//     }

//     // ✅ Check existing user
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // ✅ Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // ✅ Create user
//     const user = await User.create({
//       username: username.trim(),
//       email: email.trim(),
//       password: hashedPassword,
//     });

//     // ✅ Generate token (AUTO LOGIN)
//     const token = jwt.sign(
//       { id: user._id },
//       "SECRET_KEY",
//       { expiresIn: "1d" }
//     );

//     // ✅ Send response
//     res.status(201).json({
//       message: "User signup successfully",
//       token,
//       user: {
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//       },
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };