NewsReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.feed = options.feed;
  },

  url: function(){
    return this.feed.url() + '/entries';
  },

  model: NewsReader.Models.Entry,

  comparator: function(entry, entry2){
    return entry.get("created_at") > entry2.get("created_at") ? -1 : 1;

    // console.log(entry.get("created_at") > entry2.get("created_at") );
//     console.log(entry.get("created_at"), entry2.get("created_at") );
//     return entry.get("created_at");
  }

})