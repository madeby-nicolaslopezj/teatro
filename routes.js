Router.route('/', {
  name: 'home',
  layoutTemplate: 'layout'
});

Router.route('/integrantes/:slug', {
  name: 'actors.show',
  layoutTemplate: 'layout'
});

Router.route('/historia', {
  name: 'history',
  layoutTemplate: 'layout'
});

Router.route('/obras', {
  name: 'plays.index',
  layoutTemplate: 'layout'
});

Router.route('/obras/:slug', {
  name: 'plays.show',
  layoutTemplate: 'layout'
});

Router.route('/galeria', {
  name: 'photos.index',
  layoutTemplate: 'layout'
});

Router.route('/galeria/:_id', {
  name: 'photos.show'
});
