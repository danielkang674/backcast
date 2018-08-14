var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    // console.log(this.collection.models[0]);
    this.collection.on('select', this.playMahVideo, this);
    return;
  },

  
  playMahVideo: function(){
    this.render();
  },

  render: function() {

    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
