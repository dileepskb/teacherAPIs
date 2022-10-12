const mongoose = require("mongoose");

const citySchema = mongoose.Schema(
  {
    cityName: { type: String, required: true, trim: true },
  },
  {
    timestamps: true
  }
);

 module.exports  = mongoose.model("CitySchema", citySchema);