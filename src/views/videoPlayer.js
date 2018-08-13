var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    console.log(this.collection.models[0]);
    return;
  },
  
  events: {
    'select': 'playMahVideo'
  },
  
  playMahVideo: function(){
    console.log('im playing');
    this.render();
  },

  render: function() {

    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
