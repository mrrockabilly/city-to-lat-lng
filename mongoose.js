var mongoose = require('mongoose');
mongoose.connect('mongodb://kitten:kitten123@ds133922.mlab.com:33922/todo-list');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });

kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

Cat.find({}, function(err, cats) {
   console.log(cats)
  });