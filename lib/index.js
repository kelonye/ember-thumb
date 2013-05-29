require('ember');

module.exports = Em.Mixin.create({

  init: function(){

    this._super();

    // src
    url = this.get('url');
    src = "src='"+url+"'";

    // style
    width = this.get('width');
    height = this.get('height');
    style = "style='max-width: "+width+"px; max-height="+height+"px;'";

    //template
    template = "<img "+src+" "+style+">";

    this.set('template', Em.Handlebars.compile(template));

  }
});