const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecondarySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    message: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now, // Pass the function reference, not the result of invoking it
    },
});

module.exports = mongoose.model("Secondary", SecondarySchema);
