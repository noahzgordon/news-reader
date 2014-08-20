NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feeds/show'],

  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click #refresh-button" : "refresh"
  },

  refresh: function() {
    this.model.fetch();
  },

  render: function(){
    var content = this.template({feed: this.model});
    this.$el.html(content);

    this.model.entries().each(function(entry) {
      var entryShow = new NewsReader.Views.EntryShow({
        tagName: "li",
        model: entry
      })

      $("ul#entries").append(entryShow.render().$el);
    })

    return this;
  }
})