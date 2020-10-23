const { Router } = require('express');
const passport = require('passport');
const authRouter = Router();

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'] })
);
authRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    console.log('Login Success');
    res.redirect('/');
  }
);

authRouter.get('/logout', (req, res) => {
  console.log('Logout Success');
  req.session = null;
  req.logout();
  res.redirect('/');
});

module.exports = { authRouter };
