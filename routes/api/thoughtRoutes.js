// IMPORT REQUIREMENTS ---------------------------------------
const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");
// const {
//   getCourses,
//   getSingleCourse,
//   createCourse,
//   updateCourse,
//   deleteCourse,
// } = require('../../controllers/courseController.js');



//! MAIN REACTION ROUTES -------------------------------------

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// // /api/courses
// router.route('/').get(getCourses).post(createCourse);


// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
// // /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);


//! REACTION SUBROUTES ---------------------------------------

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);


// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);



// EXPORT ----------------------------------------------------
module.exports = router;
