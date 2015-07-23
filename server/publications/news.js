Meteor.publish('home_news', function() {
  return News.find({}, { sort: { createdAt: -1 }, limit: 3 });
})
