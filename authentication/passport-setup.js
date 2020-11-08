const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const axios = require('axios');
require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      axios.post('http://localhost:3000/user', {
        id: profile.id,
        username: profile.name.familyName,
        full_name: profile.displayName,
        avatar: profile.photos.value
      }).then((response) => done(null, response.data));
    }
  )
);
