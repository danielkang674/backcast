var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.collection.on("select", this.playMahVideo, this);
  },

  playMahVideo: function(video) {
    this.model = video;
    this.render();
  },

  render: function() {
    var newVideo = this.$el.html('<div class="loading">Please wait...</div>');
    if (this.model) {
      newVideo = this.$el.html(this.template(this.model.attributes))[0];
    }
    return newVideo;
  },

  template: templateURL("src/templates/videoPlayer.html")
});
