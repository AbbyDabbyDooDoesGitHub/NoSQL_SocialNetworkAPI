// IMPORT REQUIREMENTS ---------------------------------------
const { Schema, model } = require('mongoose');
const Reaction = require("./Reaction");



// SCHEMA TO CREATE THOUGHT ----------------------------------
const thoughtSchema = new Schema(

  {

    thoughtText: {
      // String
      type: String,
      // Required
      required: true,
      // Must be between 1 and 280 characters
      min_length: 1,
      max_length: 280,
    },


    createdAt: {
      // Date
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: formatDate,
    },


    username: { //The user that created this thought
      // String
      type: String,
      // Required
      required: true,
    },


    reactions: [ 
      // Array of nested documents created with the `reactionSchema`
      Reaction
    ]

  },


  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }

);



// COUNT REACTIONS -------------------------------------------
thoughtSchema
  .virtual("reactionCount")
  .get(function () {
    return this.reactions.length;
  }
);


  
// FORMAT DATE -----------------------------------------------
function formatDate(date) {
  return date.toLocaleString();
}; 

const Thought = model("Thought", thoughtSchema);

// EXPORT ----------------------------------------------------
module.exports = Thought;
