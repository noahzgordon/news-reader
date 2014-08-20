NewsReader.Routers.Feeds = Backbone.Router.extend({
  routes: {
    '' : 'index'
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

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    $('#content').html(this._currentView.render().$el);
  }
});
