var SearchView = Backbone.View.extend({
  events: {
    "click button": "handleSearchClick",
    keyup: "handleSearchEnter"
  },
  handleSearchEnter: function(e) {
    if (e.keyCode === 13) {
      var items = this.collection.search($(".form-control").val());
    }
  },

  handleSearchClick: function() {
    var items = this.collection.search($(".form-control").val());
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL("src/templates/search.html")
});
