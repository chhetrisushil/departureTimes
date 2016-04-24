/*
 * server.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*jshint esnext: true*/
import express from 'express';
import morgan from 'morgan';

class Server {
  constructor() {
    let app = this.app = express();

    app.set('port', (process.env.PORT || 3000));
    app.use(morgan('combined'));
    app.use(express.static('client/static/'));
    app.set('views', 'client/pages');
    app.set('view engine', 'pug');

    this.setupRoutes();
  }

  start() {
    this.app.listen(this.app.get('port'), this.stats.bind(this));
  }

  stats(err) {
    if (err) {
      console.log(err);

      return;
    }

    console.log('Server running on: http://localhost:'+this.app.get('port'));
  }

  setupRoutes() {
    let app = this.app;

    app.get('/', function(req, res) {
      res.redirect('/index');
    });

    app.get('/:pageName', function(req, res) {
      res.render(req.params.pageName);
    });
  }
}

// Initialise server
var server = new Server();

// start server
server.start();
