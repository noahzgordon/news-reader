NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  model: NewsReader.Models.Feed,

  getOrFetch: function(id) {
    var feeds = this;
    var feed;
    if (feed = this.get(id)) {
      feed.fetch();
    } else {
      feed = new NewsReader.Models.Feed({ id: id });
      feed.fetch({
        success: function() {
          feeds.add(feed);
        }
      });
    }

    return feed;
  }

});

NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();