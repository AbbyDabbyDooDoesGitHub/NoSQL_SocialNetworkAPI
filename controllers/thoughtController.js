// IMPORT REQUIREMENTS ---------------------------------------
const { Thought, Reaction, User } = require("../models");



// EXPORT FOR USER -------------------------------------------
module.exports = {

  //! THOUGHT SECTION ----------------------------------------

  // GET ALL THOUGHTS
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },


  // GET A THOUGHT
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "This ID has no THOUGHT" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  // CREATE A NEW THOUGHT
  createThought(req, res) {
    // Use data included in request's body to create the new thought
    Thought.create(req.body)
    .then((thought) => {
      // Find assigned user and add thought to their thoughts list
      return User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
    })
    .then((user) =>
      !user
        ? res.status(404).json({
            message: "Created the THOUGHT, but this ID has no USER",
          })
        : res.json("Created the THOUGHT successfully")
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },


  // DELETE A THOUGHT
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "This ID has no THOUGHT" })
        // Find user associated to thought and remove thought from their thoughts list
        : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
    )
    .then((user) =>
      !user
        ? res
            .status(404)
            .json({ message: "Deleted the THOUGHT, but this ID has no USER" })
        : res.json({ message: "Deleted the THOUGHT" })
    )
    .catch((err) => res.status(500).json(err));
  },


  // UPDATE A THOUGHT
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      // Use data included in request's body to update the thought
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "This ID has no THOUGHT" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


  //! REACTION SECTION ---------------------------------------

  // ADD A REACTION
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "This ID has no THOUGHT" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  // REMOVE A REACTION
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "This ID has no THOUGHT" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

};
