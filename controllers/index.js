const router = require('express').Router();
const apiRoutes = require('./apis');

router.use('/apis', apiRoutes);

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
