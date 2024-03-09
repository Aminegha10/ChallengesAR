const passport = require('passport')

const authenticated = (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            // Send a message to the user if authentication fails
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Authentication successful, proceed to login
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            // Redirect or send a success message
            return res.status(200).json({ message: `Welcome ${req.user.username}` });
        });
    })(req, res, next);
}
module.exports = authenticated