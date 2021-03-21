
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    ReviewRating : { type: Number },
    createdBy : { type: mongoose.Schema.Types.ObjectId,ref:'users'},
    PostedFor : { type: mongoose.Schema.Types.ObjectId,ref:'movies'}
  });


  module.exports = mongoose.model('Rating', reviewSchema);
