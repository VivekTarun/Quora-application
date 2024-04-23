const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['questions', 'answers', 'comments'],
    required: true
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;