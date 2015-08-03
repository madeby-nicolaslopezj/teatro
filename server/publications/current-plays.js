Meteor.publish('current_plays', function() {
  return CurrentPlays.find();
});
