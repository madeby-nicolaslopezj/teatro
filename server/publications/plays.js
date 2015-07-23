Meteor.publish('home_plays', function() {
  return Plays.find({ isFeatured: true });
});

Meteor.publish('plays', function() {
  return Plays.find();
});

Meteor.publish('play', function(slug) {
  check(slug, String);
  return Plays.find({ slug: slug });
});
