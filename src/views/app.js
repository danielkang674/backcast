var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(); 
    this.videos.search('Hack Reactor');
    // play first video
    this.videos.on('sync', function(collection){
      this.videos.at(0).select();
    }, this);
    //this.videos.at(0).select();
    this.render();
  },


  render: function() {

    this.$el.html(this.template());

    var VLV = new VideoListView({collection: this.videos});
    $('.list').append(VLV.render());

    var VideoToPlay = new VideoPlayerView({collection: this.videos, model: this.videos.at(0)});
    $('.player').append(VideoToPlay.render());

    var SearchBar = new SearchView({collection: this.videos, el: this.$('.search') }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
