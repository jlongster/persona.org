module.exports = function(app) {
  /* Filter for checking if a user is authenticated before
   * they can access views that require login
   */
  var isAuthenticated = function(req, res, next) {
    if (!req.session.email) {
      res.redirect('/');
    } else {
      next();
    }
  };

  // Home/main
  app.get('/', function(req, res) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('index', { title: 'Persona.org' });
  });

  // Dashboard
  app.get('/dashboard', isAuthenticated, function(req, res) {
    res.render('dashboard', { title: 'Dashboard' });
  });
}
