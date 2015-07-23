Template.home.onCreated(function() {
  this.subscribe('home_actors');
  this.subscribe('home_news');
  this.subscribe('home_plays');
})

Template.home.onRendered(function() {
});

Template.home.helpers({
  actors: function() {
    return Actors.find();
  },
  news: function() {
    return News.find({}, { sort: { createdAt: -1 }, limit: 3 });
  }
})
