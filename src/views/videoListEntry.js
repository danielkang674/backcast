var VideoListEntryView = Backbone.View.extend({
  // one video

  events: {
    'click .video-list-entry-title': 'handleVideoCLick'
  },
  
  handleVideoCLick: function() {
    this.model.select();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
    
  },

  template: templateURL('src/templates/videoListEntry.html')

});
