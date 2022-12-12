// IMPORT REQUIREMENTS ---------------------------------------
const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController.js");
// const {
//   getStudents,
//   getSingleStudent,
//   createStudent,
//   deleteStudent,
//   addAssignment,
//   removeAssignment,
// } = require('../../controllers/studentController');



//! MAIN USER ROUTES -----------------------------------------

// /api/user
router.route('/')
    .get(getUsers)
    .post(createUser);
// // /api/students
// router.route('/').get(getStudents).post(createStudent);


// /api/user/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);
// // /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);


//! FRIEND SUBROUTES -----------------------------------------

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);
// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);



// EXPORT ----------------------------------------------------
module.exports = router;
