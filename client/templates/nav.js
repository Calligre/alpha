Template.nav.onRendered(function() {
  var $nav = this.$('nav');
  $nav.siblings('.content-scrollable:not(.static-nav)').children().first().waypoint(function(direction) {
    $nav.toggleClass('scrolled', direction === 'down');
  }, {
    context: '.content-scrollable',
    offset: -200
  });
});

Template.nav.helpers({
  back: function() {
    return this.back && !history.state.initial;
  }
});
