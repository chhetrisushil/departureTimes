/*
 * Initial.Spec.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*jshint esnext: true*/
import Main from './../client/static/es6/main.js';
import t from './../client/static/es6/module.js';

describe('Initial test', () => {
  it('should pass', () => {
    assert.equal(2, (1 + 1));
  });

  it('should return test str', () => {
    var main = new Main('from test');
    assert.equal('test str', main.testing());
  });

  it('should execute from module', () => {
    assert.equal('testing', t());
  });
});
