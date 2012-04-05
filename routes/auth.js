module.exports = function(app, settings) {
  var auth = require('../lib/authenticate');

  // Csrf check for pages with forms
  var checkCsrf = function(req, res, next) {
    if (req.session._csrf !== req.body._csrf) {
      res.redirect('/');
    } else {
      next();
    }
  };

  // Login
  app.post('/login', checkCsrf, function(req, res) {
    auth.verify(req, settings, function(error, email) {
      if(email) {
        req.session.email = email;
      }
      res.redirect('/dashboard');
    });
  });

  // Logout
  app.get('/logout', function(req, res) {
    req.session.email = null;
    req.session._csrf = null;
    res.redirect('/');
  });
};