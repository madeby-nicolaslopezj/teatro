Meteor.publish('home_actors', function() {
  return Actors.find({}, { fields: { name: 1, image: 1, slug: 1 } });
});

Meteor.publish('actor', function(slug) {
  check(slug, String);
  return Actors.find({ slug: slug });
});
