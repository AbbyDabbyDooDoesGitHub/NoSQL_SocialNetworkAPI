const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      // * String
      type: String,
      // * Required
      required: true,
      // * Must be between 1 and 280 characters
      min_length: 1,
      max_length: 50,
    },
    createdAt: {
      //! * Date
      //! * Set default value to the current timestamp
      //! * Use a getter method to format the timestamp on query
    },
    username: { //The user that created this thought
      // * String
      type: String,
      // * Required
      required: true,
    },
    reactions: { //These are like replies
      //! * Array of nested documents created with the `reactionSchema`
    }
  },
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  // }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
