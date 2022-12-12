// IMPORT REQUIREMENTS ---------------------------------------
const { Schema, model } = require('mongoose');

const User = model("User", userSchema);



// SCHEMA TO CREATE USER -------------------------------------
const userSchema = new Schema( 

  {
    
    username: {
      // String
      type: String,
      // Unique
      unique: true,
      // Required
      required: true,
      // Trimmed
      trim: true,
    },


    email: {
      // String
      type: String,
      // Must match a valid email address (look into Mongoose's matching validation)
      match: [ /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "MUST ENTER A VALID EMAIL",],
      // Unique
      unique: true,
      // Required
      required: true,
    },


    thoughts: [
      // Array of `_id` values referencing the `Thought` model
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],


    friends: [
      // Array of `_id` values referencing the `User` model (self-reference)
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
    ]

  },


  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

);



// FRIENDCOUNT -----------------------------------------------
userSchema
  .virtual("friendCount")
  .get(function () {
    return this.friends.length;
  }
);



// EXPORT ----------------------------------------------------
module.exports = User;
