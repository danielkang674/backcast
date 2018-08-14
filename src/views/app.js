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

    var VideoToPlay = new VideoPlayerView({collection: this.videos, model: this.videos.at(0)});
    $('.player').append(VideoToPlay.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
