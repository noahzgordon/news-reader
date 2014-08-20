NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  model: NewsReader.Models.Feed

});

NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();
NewsReader.Collections.feeds.fetch();