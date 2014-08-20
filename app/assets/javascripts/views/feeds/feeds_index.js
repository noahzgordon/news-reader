NewsReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],

  initialize: function(){
    this.listenTo(this.collection, "sync add remove change", this.render);
  },

  events: {
    'click #delete-button' : 'delete',
    'click .fav-star' : 'toggleFavorite'
  },

  render: function(){
    var content = this.template({feeds: this.collection});
    this.$el.html(content);

    return this;
  },

  delete: function(){
    var id = $(event.target).attr("data-id");
    NewsReader.Collections.feeds.getOrFetch(id).destroy();
  },

  toggleFavorite: function(){
    var id = $(event.target).attr("data-id");
    var feed = NewsReader.Collections.feeds.getOrFetch(id)
    if (!feed.get("favorite")){
      feed.set("favorite", true);
    } else {
      feed.set("favorite", false);
    }
    feed.save({},{
      wait: true
    });
  }

});
