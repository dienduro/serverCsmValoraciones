const express = require('express');

const router = express.Router();


const fs = require('fs');
/* const accountRoutes = require('./account.js'); */
const ratingRoutes = require('./rating.js');
const mailRoutes = require('./mail.js');

/* router.use(accountRoutes); */ // use account route
router.use(ratingRoutes); // use ratings route
router.use(mailRoutes); // use ratings route

module.exports = router;


