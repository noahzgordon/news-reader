NewsReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],

  initialize: function(){
    this.listenTo(this.collection, "sync add remove change", this.render);
  },

  render: function(){
    var content = this.template({feeds: this.collection});
    this.$el.html(content);

    return this;
  }

});
