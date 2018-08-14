var VideoListView = Backbone.View.extend({
  // collection of videos

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    let mydiv = this.$el.html(this.template())[0];
    let appendToMe = mydiv.children[0];
    this.collection.forEach(element => {
      this.renderVideo(element, appendToMe);
    }, this);
    return mydiv;
  },

  renderVideo: function(video, parentDiv) {
    let datVideo = new VideoListEntryView({model:video});
    parentDiv.append(datVideo.render());
  },

  template: templateURL('src/templates/videoList.html')

});
