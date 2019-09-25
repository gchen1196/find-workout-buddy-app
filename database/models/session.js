const mongoose = require('mongoose');

const Session = mongoose.model('Session', {
  gymKey: {
    type: String,
    require: true
  },
  gymName: {
    type: String
  },
  gymAddress: {
    type: String
  },
  times: {
    type: [String]
  },
  bio: {
    type: String
  }
})

module.exports = Session;