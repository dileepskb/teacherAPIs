const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    userType: { type: String, required: true, trim: true, enum : ['Teacher','User'], default: 'Teacher' },
    city: { type: String, required: true, trim: true, default: 'Delhi' },
  },
  {
    timestamps: true
  }  
);

 module.exports  = mongoose.model("user", userSchema);


