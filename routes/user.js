const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      const user = new User({
        username: req.body.username,
        password: hash,
        phone: req.body.phone,
        email: req.body.email,
        userType: req.body.userType,
      });
      user
        .save()
        .then((result) => {
          res.status(200).json({
            message: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: err,
          });
        });
    }
  });
});

router.post("/login", (req, res, next) => {
  User.find({ username: req.body.username })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        // console.log("dileep")
        return res.status(401).json({
          message: "user not exist",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (!result) {
          return res.status(401).json({
            message: "password matching fail",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user[0].username,
              userType: user[0].userType,
              email: user[0].email,
              phone: user[0].phone,
            },
            `this is dummy test`,
            {
              expiresIn: "24h",
            }
          );
          res.status(200).json({
            username: user[0].username,
            userType: user[0].userType,
            email: user[0].email,
            phone: user[0].phone,
            token: token,
          });
        }
      });
      // res.status(200).json({
      //     User:result
      // })
    })
    .catch((err) => {
      console.log(err);
      req.status(500).json({
        error: err,
      });
    });
});

router.get("/search", (req, res, next) => {
  User.find({'username': {'$regex': req.body.username }},{_id: 1, username: 1})
    .exec()
    .then((user) => {
      res.status(200).json({
        users: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});


router.get("/searchUserWithCity", (req, res, next) => {
  User.aggregate([
    {   $match: {
      city: req.body.userCity
    }
    }
]).then((user) => {
  if(user.length > 0) {
    res.status(200).json({
      users: user,
    });
  } else {
    res.status(203).json({
      noUserMessage:'No User Found',
    });
  }

    })
    .catch((err) => {
      console.log(err);
      req.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
