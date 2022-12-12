// IMPORT REQUIREMENTS ---------------------------------------
const { Thought, Reaction, User } = require("../models");



// EXPORT FOR USER -------------------------------------------
module.exports = {

  //! THOUGHT SECTION ----------------------------------------


  // GET ALL THOUGHTS

  //! Get all courses
  getCourses(req, res) {
    Course.find()
      .then((courses) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },



  // GET A THOUGHT

  //! Get a course
  getSingleCourse(req, res) {
    Course.findOne({ _id: req.params.courseId })
      .select('-__v')
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },



  // CREATE A NEW THOUGHT

  //! Create a course
  createCourse(req, res) {
    Course.create(req.body)
      .then((course) => res.json(course))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },



  // DELETE A THOUGHT

  //! Delete a course
  deleteCourse(req, res) {
    Course.findOneAndDelete({ _id: req.params.courseId })
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with that ID' })
          : Student.deleteMany({ _id: { $in: course.students } })
      )
      .then(() => res.json({ message: 'Course and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },



  // UPDATE A THOUGHT

  //! Update a course
  updateCourse(req, res) {
    Course.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with this id!' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },




  //! REACTION SECTION ---------------------------------------

  // ADD A REACTION
  // REMOVE A REACTION

};

