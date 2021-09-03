const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default:
      'https://www.hzpc.com/uploads/overview-transparent-896/e3e6d564-9cc9-505f-b6c4-95fc3c75dabf/3175818934/Taurus.png',
  },
});

const User = model('User', userSchema);

module.exports = User;
