NewsReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],

  initialize: function(){
    this.listenTo(this.collection, "sync add remove change", this.render);
  },

  events: {
    'click #delete-button' : 'delete'
  },

  render: function(){
    var content = this.template({feeds: this.collection});
    this.$el.html(content);

    return this;
  },

  delete: function(){
    var id = $(event.target).attr("data-id");
    NewsReader.Collections.feeds.getOrFetch(id).destroy();
  }

});
