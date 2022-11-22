// ### API Routes

// **`/api/users`**

// * `GET` all users

// * `GET` a single user by its `_id` and populated thought and friend data

// * `POST` a new user:

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/api/thoughts', thoughtRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
