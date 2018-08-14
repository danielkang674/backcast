var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    let VLV = new VideoListView({collection: this.videos});
    var vlvRendered = VLV.render();
    let mySearchBar = new SearchView();
    console.log(mySearchBar.render(), "search bar");
    this.$el.html(this.template(mySearchBar.render()));
    return this;
  },
  
  template: templateURL('src/templates/app.html')

});
