const express = require('express');
const expressConfig = require('./config/express.js')
const databaseConfig = require('./config/database.js')
const routesConfig = require('./config/routes.js')

const logger = require('./middlewares/logger')
const storage = require('./middlewares/storage.js');


start();

async function start() {
    const port = 3000;
    const app = express();

    app.use(logger())

    await databaseConfig(app)
    expressConfig(app)

    app.use(await storage());
    routesConfig(app)



    app.listen(port, () => console.log(`Listening on port ${port}! Now its up to you...`));
}
