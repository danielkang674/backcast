var VideoListEntryView = Backbone.View.extend({
  // one video

  initialize: function() {
    this.render();
  },
  events: {
    "click .video-list-entry-title": "handleVideoCLick"
  },

  handleVideoCLick: function() {
    this.model.select();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  template: templateURL("src/templates/videoListEntry.html")
});
