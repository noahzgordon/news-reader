NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function() {
    this.collection = NewsReader.Collections.feeds;
  },

  routes: {
    '' : 'index',
    'feeds/new' : 'new',
    'feeds/:id' : 'show'
  },

  index: function(){
    var indexView = new NewsReader.Views.FeedsIndex({
      tagName: "ul",
      collection: NewsReader.Collections.feeds
    });

    NewsReader.Collections.feeds.fetch({
      success: this._swapView(indexView)
    })
  },

  show: function(id) {
    var feed = this.collection.getOrFetch(id);
    feed.fetch();

    var showView = new NewsReader.Views.FeedShow({
      model: feed
    })

    this._swapView(showView);
  },

  new: function(){
    var feed = new NewsReader.Models.Feed();
    var feedForm = new NewsReader.Views.FeedForm({
      model : feed,
      collection : this.collection
    })

    this._swapView(feedForm);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    $('#content').html(this._currentView.render().$el);
  }
});
