require 'ember'

module.exports = Em.Mixin.create
  init: ->

    that = @

    width = @get 'width'
    height = @get 'height'
    url = @get 'url'

    thumb = require 'thumb'
    thumb url, width, height, (err, img, datauri)->
      compile = Em.Handlebars.compile
      that.$().html img

    @_super()