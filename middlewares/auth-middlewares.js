// 3. Middleware function that checks if the user is logged in
// can be required and used in any file.
// ! Best implementation
module.exports = {

  isLoggedIn: (req, res, next) => {
    // if the user has an active session, continue
    if (req.session.loggedInUser) {
      next() // continue
    } else {
      res.redirect('/auth/login')
    }
  }

}