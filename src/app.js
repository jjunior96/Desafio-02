import express from 'express';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    // Chama os métodos da classe
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
