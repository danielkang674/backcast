var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    var VLV = new VideoListView({collection: this.videos});
    $('.list').append(VLV.render());
   // $('.search').append('<h1>DanielReallySucks</h1>');
    // $('.list').append(VLV);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
