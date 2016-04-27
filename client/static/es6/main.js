/*
 * main.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*jshint esnext: true*/
/*globals console: true*/
"use strict"; //jshint ignore: line

import { default as t, Exported as ex } from './module.js';

class Main {
  constructor(str) {
    console.log(str);
    console.log(t());
    console.log(ex());
  }
}

let main = new Main('hi');