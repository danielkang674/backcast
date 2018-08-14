var VideoListEntryView = Backbone.View.extend({
  // one video
// .video-list-entry-title
  events: {
    "click .video-list-entry-title": "handleVideoCLick"
  },

  handleVideoCLick: function() {
    this.model.select();
  },

  render: function() {
    let something = this.$el.html(this.template(this.model.attributes));

    return something[0];
  },

  template: templateURL("src/templates/videoListEntry.html")
});
