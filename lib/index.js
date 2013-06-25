require('ember');

module.exports = Em.Mixin.create({
  tagName: 'img',
  attributeBindings: 'style src'.w(),
  style: function(){
    return 'max-width: '+this.get('width')+'px; '+
      'max-height: '+this.get('height')+'px;';
  }.property('width', 'height'),
  didInsertElement: function(){
    this.$().load(this.onload.bind(this));
  }
});