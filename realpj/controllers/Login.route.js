// controllers/auth.route.js
const express = require('express');
const router = express.Router();
const auth = require("../utils/user.auth");
const userRepo = require("../utils/user.repository");
const IDREP = require('../utils/id.repository')

// http://localhost:9000/auth
router.get('/', (req, res) => res.render('auth_view', { extraContent: "" }) );
router.get("/user", auth.checkAuthentication("USER"), userAction);
router.get("/admin", auth.checkAuthentication("ADMIN"), userAction);
router.get("/protected", protectedGetAction);
router.get("/login", login);
router.post('/log_in_finish', login_finish)
router.get("/logout", logoutAction);
router.get('/sign_up', Sign_up);
router.post('/sign_up_finish', sign_up_finish)

async function userAction(request, response) {
  let userData = await userRepo.getOneUser(request.user.user_name);
  let userJson = JSON.stringify(userData); // if  userData.user_role ...
  response.render("auth_view", { "extraContent": userJson });
}

async function protectedGetAction(request, response) {
  if (request.isAuthenticated()) {
    if (request.user.user_role === "ADMIN") {
      response.redirect("/auth/admin");
    } else {
      response.redirect("/auth/user");
    }
  } else {
      response.redirect("/auth");
  }
}

async function login(request, response){

  response.render('Log_in_view');
}

async function login_finish(request, response) {
  console.log('pass 1')
  areValid = await userRepo.areValidCredentials(request.body.user_email, request.body.password);
  console.log('pass 2')
  if (areValid) {
    user = await userRepo.getOneUser(request.body.user_email);
    console.log(user)
    request.login(user, function (err) { 
        if (err) { console.log("ERROR"); console.log(err); return next(err); }

        if (request.user.user_role === "ADMIN") {
            return response.redirect("/admin");
        } else {
            return response.redirect("/user");
        }
    });
  } else {
    response.send("Invalid credentials provided");
    // TODO redirect/normal error message
  }
}

function logoutAction(request, response) {
    request.logout(function(err) {
        if (err) { return next(err); }
        response.redirect('/auth');
    });
}

async function Sign_up(request, response){

  response.render('Sign_up_view');

}

async function sign_up_finish(request, response){

  await IDREP.createclient(request.body.username, request.body.password, request.body.user_email);
  response.redirect('/');
}


module.exports = router;