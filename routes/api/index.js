const router = require('express').Router();

const useRoutes = require('./user_routes');
const postRoutes = require('./post_routes');

router.use('/users', useRoutes);
router.use('/posts', postRoutes);

module.exports = router;