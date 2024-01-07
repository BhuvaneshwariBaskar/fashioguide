const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../database/database");

exports.signUpPost = async (req, res) => {
  const { name, email, password, phone } = req.body;
  await db.query(
    `SELECT * FROM public.Users WHERE phone=${phone}`,
    async (err, results) => {
      if (results && results.length > 0)
        return res.status(409).json({
          error: "User already exists",
        });
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      await db.query(
        `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";INSERT INTO public.Users (user_id,email,password,name,phone,created_at) VALUES(${uuid_generate_v4()},${email},${hash},${name},${phone},${new Date()})`,
        async (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: err.message,
            });

          }

          else{
            return res.status(200).json({
              message: "Account created successfully",
            })
          }
          //   return res.status(200).json({
          //     message: "Account created successfully",
          //   });

        //   await db.query(
        //     `SELECT * FROM public.Users WHERE user_id =${id}`,
        //     async (err, results) => {
        //       if (err) {
        //         console.log(err);
        //         return res.status(500).json({
        //           error: err.message,
        //         });
        //       }

        //       const user = results[0];
        //       //   req.session.user = user;

        //       const token = jwt.sign(
        //         {
        //           id: results[0].id,
        //           username: results[0].username,
        //           email: results[0].email,
        //           mobileno: results[0].mobileno,
        //           created_at: results[0].created_at,
        //           updated_at: results[0].updated_at,
        //           followed_artist: results[0].followed_artist,
        //           history: results[0].history,
        //         },
        //         process.env.SECRET,
        //         {
        //           expiresIn: 604800,
        //           // expiresIn:3000,
        //         }
        //       );
        //       return res.json({
        //         token: token,
        //         ...user,
        //       });
        //     }
        //   );
        }
      );
    }
  );
};

// LoginPost

exports.loginPost = async (req, res) => {
  const { email, password } = req.body;
  await db.query(
    "SELECT * FROM Users WHERE email=?",
    [email],
    async (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: "User not found",
        });
      }
      if (results.length === 0)
        return res.status(401).json({
          error: "Invalid email or password",
        });
      await db.query(
        "SELECT * FROM Users WHERE user_id =?",
        [results[0].user_id],
        async (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: err.message,
            });
          }

          const user = results[0];
          if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
              error: "Invalid password",
            });
          }
          const token = jwt.sign(
            {
              id: results[0].id,
              username: results[0].username,
              email: results[0].email,
              mobileno: results[0].mobileno,
              created_at: results[0].created_at,
              updated_at: results[0].updated_at,
              followed_artist: results[0].followed_artist,
              history: results[0].history,
            },
            process.env.SECRET,
            {
              expiresIn: 604800,
            }
          );
          return res.json({
            token: token,
            ...user,
          });
        }
      );
    }
  );
};
