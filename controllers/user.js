const userRepo = require('../repositories/user');

const getAllUsers = (req, res) => {
    res.writeHead(200, '', {'Content-Type': 'text/html'});
    const users = userRepo.getUsers();
    users.on('data', (user) => res.write(user.name + '<br/>'));
    users.on('close', () => res.end());
};

exports.getAllUsers = getAllUsers;