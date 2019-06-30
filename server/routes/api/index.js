const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/h', require('./hub'));
router.use('/h/:hub/p', require('./post'))
module.exports = router;