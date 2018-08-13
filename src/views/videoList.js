var VideoListView = Backbone.View.extend({
  // collection of videos

  initialize: function() {
    this.collection.on('sync', function() {
      this.render();
    }, this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this;
  },
  
  renderVideo: function(video) {
    let datVideo = new VideoListEntryView({model:video});
    this.$el.append(datVideo.render());
  },

  template: templateURL('src/templates/videoList.html')

});
