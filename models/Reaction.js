// **Schema Settings**:
// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

const { Schema, model } = require('mongoose');
// const ReactionSchema = require('./Reaction');

// Schema to create Reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      // * Use Mongoose's ObjectId data type
      type: Object,
      //! * Default value is set to a new ObjectId

    },
    reactionBody: {
      // * String
      type: String,
      // * Required
      required: true,
      // * 280 character maximum
      max_length: 280,
    },
    username: { //The user that created this thought
      // * String
      type: String,
      // * Required
      required: true,
    },
    createdAt: {
      //! * Date
      //! * Set default value to the current timestamp
      //! * Use a getter method to format the timestamp on query
    },
  },
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  // }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
