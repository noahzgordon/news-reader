NewsReader.Views.FeedForm = Backbone.View.extend({
  template: JST['feeds/form'],

  events: {
    'submit form' : 'submit'
  },

  render: function(){
    var content = this.template({feed : this.model});
    this.$el.html(content);

    return this;
  },

  submit: function(){
    event.preventDefault();

    if (this.model.isNew()){
      var formData = $(event.target).serializeJSON()['feed'];
      this.model.set(formData);
      this.collection.create(this.model, {
        success: function(){
          Backbone.history.navigate("#/", {trigger: true});
        },
        error: function(model, response){
          var error = JSON.parse(response.responseText)['error'];
          $("div.error-bar").html("Error: " + error);
        }
      });
    }
  }
})