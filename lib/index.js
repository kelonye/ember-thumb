require('ember');

module.exports = Em.Mixin.create({
  tagName: 'img',
  attributeBindings: 'style src'.w(),
  controllerBinding: 'parentView.controller',
  style: function(){
    return 'max-width: '+this.get('width')+'; '+
      'max-height: '+this.get('height')+';';
  }.property('width', 'height'),
  didInsertElement: function(){
    if (this.$()[0].complete){
      return this.onload.call(this);
    }
    this.$().load(this.onload.bind(this));
  },
  onload: Em.K
});