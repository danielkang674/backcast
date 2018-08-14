var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    // console.log(this.collection.model[0]);
    // this.playMahVideo();
    this.collection.on('select', this.playMahVideo, this);
    return;
  },

  
  playMahVideo: function(video){
    this.model = video;
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes))[0];
  },

  template: templateURL('src/templates/videoPlayer.html')

});
