Template.actorsShow.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('actor', Router.current().params.slug);
  });
});

Template.actorsShow.helpers({
  actor: function() {
    return Actors.findOne({ slug: Router.current().params.slug });
  }
})
