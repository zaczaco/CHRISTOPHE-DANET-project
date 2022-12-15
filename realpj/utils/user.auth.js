const passport = require("passport");
const usersRepo = require("../utils/user.repository.js");

module.exports = {
  initialization(app) {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function (user, done) {
      done(null, user.user_email);
    });
    passport.deserializeUser(async function (user_email, done) {
      let user = await usersRepo.getOneUser(user_email);
      done(null, user);
    });
  },

  checkAuthentication(role) {
    return function (request, response, next) {
      if (request.isAuthenticated()) {
        if (role) {
          if (role === request.user.user_role) { 
            return next();
          } else {
            return response.end("401 Unautorized (bad user level)"); // TODO: Hierarchy
          }
        } else { // No special role needed for page -> next middleware
          return next();
        }
      } else {
        return response.end("401 Unautorized (not authenticated)");
        // response.redirect("/auth"); // not authenticated at all
      }
    }
  }
};