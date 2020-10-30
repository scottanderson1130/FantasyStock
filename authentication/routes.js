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
  (req, res) => {
    res.redirect('/');
  }
);

authRouter.get('/profile', (req, res) => {
  res.send(req.user);
});

authRouter.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

module.exports = { authRouter };
