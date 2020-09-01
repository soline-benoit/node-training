const userController = require('./controllers/user');

const initRouter = (app) => {
    try {
        app.get('/', (req, res) => {
            res.writeHead(200, '', {'Content-Type': 'text/plain'});
            res.end('Hello World !!!');
        });

        app.get('/users', userController.getAllUsers);

        return app;
    } catch (e) {
        console.error(e);
        return false;
    }

}

exports.initRouter = initRouter;