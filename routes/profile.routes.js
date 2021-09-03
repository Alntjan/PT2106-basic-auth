const router = require('express').Router();

// below we have 3 ways to implement authorization. Check 1 < 2 < 3

const { isLoggedIn } = require('../middlewares/auth-middlewares'); // 3. middleware function, see file in "middlewares/auth-middlewares"
// ! best implementation

// 2. Middleware that will check all routes in this file for an active session
// ! Better than conditional (1) but only works for this routes file, might be to be repeated.
// router.use((req, res, next) => {
//   if (req.session.loggedInUser) {
//     next() // continue
//   } else {
//     res.redirect('/auth/login')
//   }
// })

// GET '/profile' => this could be any private route, that should only be accessed by loggedIn users.
router.get('/', isLoggedIn, (req, res, next) => {
  // 1. We check if the user has an active session 'req.session.loggedInUser'
  // ! This works but it is not best practices. Only works for a single route.
  // if (req.session.loggedInUser) {
  //   res.render('profile/details.hbs')
  // } else {
  //   res.redirect('/auth/login')
  // }
  console.log('this is the session', req.session.loggedInUser);

  res.render('profile/details.hbs', { user: req.session.loggedInUser });
});

module.exports = router;
