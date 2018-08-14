var VideoListView = Backbone.View.extend({
  // collection of videos

  initialize: function() {
    this.render(); 
    this.collection.on('sync', function() {  //if API call triggers sync event, do this
      this.render();
    }, this);
  },
  
  render: function() {
    this.$el.children().detach();
    let mydiv = this.$el.html(this.template());
    let appendToMe = mydiv[0].children[0];
    this.collection.forEach(element => {
      this.renderVideo(element, appendToMe);
    }, this);
    return this.$el.html();
  },
  
  renderVideo: function(video, parentDiv) {
    let datVideo = new VideoListEntryView({model:video});
    parentDiv.append(datVideo.render()[0]);
  },

  template: templateURL('src/templates/videoList.html')

});
