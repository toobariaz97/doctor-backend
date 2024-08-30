const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: Number,
      default: 1,
    },
    image: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isNews: {
      type: Boolean,
      default: true,
    },
    country: {
      type: String,
    },

    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    timer: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      enum: ["shop", "home"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
