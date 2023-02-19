
const express = require('express');
const router = express.Router();
// const {  requiresAuth } = require('express-openid-connect');

router.use('/Disc_Golf', require('./players'));
router.use('/', require('./swagger'));

// router.get('/', function (req, res) {
//     res.render('index', {
//         title: 'Auth0 Nodejs',
//         isAuthenticated: req.oidc.isAuthenticated(),
//     });
// });

// router.get('/profile', requiresAuth(), function (req, res) {
//     res.render('profile', {
//         userProfile: JSON.stringify(req.oidc.user, null, 2),
//         title: 'Profile page'
//     });
// });

module.exports = router;
