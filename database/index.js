const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gymbuddy-api', { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true  
});

var db = mongoose.connection;
mongoose.set('useFindAndModify', false);

db.on('error', () => {
  console.log('fail to connect mongoose');
});
db.once('open', () => {
  console.log('successfully connected to mongoose');
});


module.exports = db;