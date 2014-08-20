NewsReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.feed = options.feed;
  },

  url: function(){
    return this.feed.url() + '/entries';
  },

  model: NewsReader.Models.Entry,

  comparator: function(entry, entry2){
    return entry.get("published_at") > entry2.get("published_at") ? -1 : 1;
  }

})