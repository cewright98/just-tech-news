const router = require('express').Router();

const useRoutes = require('./user_routes');

router.use('/users', useRoutes);

module.exports = router;