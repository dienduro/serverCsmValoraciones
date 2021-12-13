const express = require('express');

const router = express.Router();


const fs = require('fs');
/* const accountRoutes = require('./account.js'); */
const ratingRoutes = require('./rating.js');
const mailRoutes = require('./mail.js');
const aulaRoutes = require('./aulavirtual.js');
const calendarRoutes = require('./calendario.js');

/* router.use(accountRoutes); */ // use account route
router.use(ratingRoutes); // use ratings route
router.use(mailRoutes); // use ratings route
router.use(aulaRoutes); // use ratings route
router.use(calendarRoutes); // use ratings route

module.exports = router;


