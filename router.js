const userController = require('./controllers/user');

const initRouter = (app) => {
    app.get('/', (req, res) => {
        res.writeHead(200, '', {'Content-Type': 'text/plain'});
        res.end('Hello World !!!');
    });

    app.get('/users', userController.getAllUsers)
}

exports.initRouter = initRouter;