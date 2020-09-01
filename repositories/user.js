const mongoose = require('mongoose');
const User = mongoose.model('User', {name: String});

const saveUser = () => {
    const user = new User({name: 'Soline'});
    user.save().then((data) => console.log(data));
};

const getUsers = () => {
    return User.find().stream();
};

const deleteAllUsers = () => {
    User.deleteMany({}, (err, data) => console.log(data));
};

exports.saveUser = saveUser;
exports.getUsers = getUsers;
exports.deleteAllUsers = deleteAllUsers;