const router = require('express').Router();
const routesThoughts = require('./routesThoughts');
const routesUsers = require('./routesUsers');

router.use('/thoughts', routerThoughts);
router.use('/users', routesUsers);