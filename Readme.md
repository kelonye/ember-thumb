
![](https://dl.dropbox.com/u/30162278/ember-thumb.png) 

Install
---

```
component install kelonye/ember-thumb
```

Usage
---

```
App.ThumbView = Em.View.createWithMixins(require('ember-thumb'), {
  width: 100, //px
  height: 100, //px
  url: 'photo.jpg',
}).appendTo('body');
```

License
---

MIT