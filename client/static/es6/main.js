/*
 * main.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*globals console: true*/

import 'es6-shim';
import 'reflect-metadata';
import 'rxjs';
import Core from 'angular2/core';
import {
  default as t, Exported as ex
}
from './module.js';

class Main {
  constructor(str) {
    console.log(str);
    console.log(t());
    console.log(ex());
  }

  testing() {
    return 'test str';
  }
}

let main = new Main('hi');

export
default Main;
