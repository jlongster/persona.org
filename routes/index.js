module.exports = function(app) {
  var isAuthenticated = function(req, res, next) {
    if(!req.session.email) {
      res.redirect('/');
    } else {
      next();
    }
  };

  // Home/main
  app.get('/', function(req, res) {
    res.render('index', { title: 'Persona.org' });
  });

  // Dashboard
  app.get('/dashboard', isAuthenticated, function(req, res) {
    res.render('dashboard', { title: 'Dashboard' });
  });
}
