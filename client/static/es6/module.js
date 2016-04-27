/*
 * module.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*jshint esnext: true*/
"use strict"; //jshint ignore: line

let Exported = () => 'exported';

export default () => 'testing';

export { Exported as Exported };
