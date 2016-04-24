/*
 * server.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*jshint esnext: true*/
import express from 'express';
import morgan from 'morgan';

class Server {
  constructor() {
    this.app = express();

    this.app.use(morgan('combined'));
    this.app.use(express.static('client/static/'));
    this.app.set('views', 'client/pages');
    this.app.set('view engine', 'pug');

    this.setupRoutes();
  }

  start() {
    this.app.listen(3000, this.stats);
  }

  stats(err) {
    if (err) {
      console.log(err);

      return;
    }

    console.log('Server running on: http://localhost:3000');
  }

  setupRoutes() {
    var app = this.app;

    app.get('/', function(req, res) {
      res.redirect('/index');
    });

    app.get('/:pageName', function(req, res) {
      res.render(req.params.pageName);
    });
  }
}

var server = new Server();

server.start();
