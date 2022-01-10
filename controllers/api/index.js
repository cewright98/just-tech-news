const router = require('express').Router();

const useRoutes = require('./user_routes');
const postRoutes = require('./post_routes');
const commentRoutes = require('./comment_routes');

router.use('/users', useRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;