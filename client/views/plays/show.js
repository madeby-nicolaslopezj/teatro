Template.playsShow.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('play', Router.current().params.slug);
  });
});

Template.playsShow.helpers({
  play: function() {
    return Plays.findOne({ slug: Router.current().params.slug });
  }
})
