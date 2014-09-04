export default Ember.CollectionView.extend({
  tagName: 'ul',
  itemViewClass: Discourse.GroupedView.extend({
    tagName: 'li',
    classNameBindings: ['selected'],
    templateName: Discourse.computed.fmt('parentView.displayType', "search/%@_result")
  }),
  didInsertElement: function(){
    var term = this.get('controller.term');
    if(!_.isEmpty(term)) {
      this.$().highlight(term.split(/\s+/));
    }
  }
});
