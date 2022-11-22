const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      // * String
      type: String,
      //! * Unique

      // * Required
      required: true,
      // * Trimmed
      max_length: 50,
    },
    email: {
      // * String
      type: String,
      //! * Must match a valid email address (look into Mongoose's matching validation)

      //! * Unique

      // * Required
      required: true,
      // * Trimmed
      max_length: 100,
    },
    thoughts: {
      //! * Array of `_id` values referencing the `Thought` model
    },
    friends: {
      //! * Array of `_id` values referencing the `User` model (self-reference)
    }
  },
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  // }
);

const User = model('user', userSchema);

module.exports = User;
