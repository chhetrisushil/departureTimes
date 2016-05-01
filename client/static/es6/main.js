/*
 * main.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*globals console: true*/

import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';
import 'rxjs';
import {
  deprecate
} from 'core-decorators';
import {
  Component
} from 'angular2/core';
import {
  bootstrap
} from 'angular2/platform/browser';

/*start-non-standard*/
@Component({
    selector: 'my-app',
    template: '<h1>Hello {{name}}!!!</h1>'
  })
  /*end-non-standard*/
class Main {
  constructor(str) {
    this.name = 'Sushil';
  }

  testing() {
    return 'test str';
  }
}

function start() {
  bootstrap(Main);
}

window.start = start;

export default start;
export {
  Main as Main
};
