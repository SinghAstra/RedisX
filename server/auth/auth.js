const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Replace with your actual Google Client ID and Secret
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    // Google will send user profile information in this callback
    (req, accessToken, refreshToken, profile, done) => {
      // Find or create the user based on their Google profile ID
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // User already exists, log them in
            done(null, existingUser);
          } else {
            // Create a new user
            new User({
              username: profile.displayName,
              googleId: profile.id,
              email: profile.emails[0].value,
            })
              .save()
              .then((newUser) => done(null, newUser))
              .catch((err) => done(err, null));
          }
        })
        .catch((err) => done(err, null));
    }
  )
);

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err, null));
});

module.exports = passport;
