const express = require('express');
const router = express.Router();
const mainRouters = require('../controllers/mainController');

router.route('/')
   .get(mainRouters.index);

   router.route('/login')
   .get(mainRouters.login);

   router.route('/signUp')
   .get(mainRouters.signUp);

   router.route('/services')
   .get(mainRouters.services);

   router.route('/pricing')
   .get(mainRouters.pricing);

   router.route('/contact')
   .get(mainRouters.contact);


module.exports = router;