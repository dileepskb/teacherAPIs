const mongoose = require("mongoose");

const ipSchema = mongoose.Schema(
  {
    ipInfo: { type: String, required: true, trim: true },
  },
  {
    timestamps: true
  }
);

 module.exports  = mongoose.model("IPAddress", ipSchema);