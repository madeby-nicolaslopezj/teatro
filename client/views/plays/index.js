Template.playsIndex.onCreated(function() {
  this.subscribe('plays');
})

Template.playsIndex.helpers({
  plays: function() {
    return Plays.find({}, { sort: { releaseDate: 1 } });
  }
})
