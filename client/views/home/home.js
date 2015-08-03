Template.home.onCreated(function() {
  this.subscribe('home_actors');
  this.subscribe('home_news');
  this.subscribe('home_plays');
  this.subscribe('current_plays');
})

Template.home.onRendered(function() {
});

Template.home.helpers({
  actors: function() {
    return Actors.find({}, { sort: { name: 1 } });
  },
  news: function() {
    return News.find({}, { sort: { createdAt: -1 }, limit: 3 });
  },
  currentPlays: function() {
    return CurrentPlays.find({}, { sort: { createdAt: -1 } });
  }
})
