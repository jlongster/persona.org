module.exports = function(app, settings) {
  var auth = require('../lib/authenticate');

  // Login
  app.post('/login', function(req, res) {
    auth.verify(req, settings, function(error, email) {
      if(email) {
        req.session.email = email;
      }
      res.redirect('back');
    });
  });

  // Logout
  app.get('/logout', function(req, res) {
    req.session.email = null;
    res.redirect('/');
  });
};