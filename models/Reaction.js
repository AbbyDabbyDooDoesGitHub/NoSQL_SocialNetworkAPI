// IMPORT REQUIREMENTS ---------------------------------------
const { Schema, Types } = require('mongoose');



// SCHEMA TO CREATE REACTION ---------------------------------
const reactionSchema = new Schema(
  
  {

    reactionId: {
      // Use Mongoose's ObjectId data type
      type: Object,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },


    reactionBody: {
      // String
      type: String,
      // Required
      required: true,
      // 280 character maximum
      max_length: 280,
    },


    username: { //The user that created this thought
      // String
      type: String,
      // Required
      required: true,
    },


    createdAt: {
      // Date
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: formatDate,
    },

  },


  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    _id: false,
  }
  
);



// FORMAT DATE -----------------------------------------------
function formatDate(date) {
  return date.toLocaleString();
}; 

// const Reaction = model("Reaction", reactionSchema);

// EXPORT ----------------------------------------------------
module.exports = reactionSchema;
