/*
 * Initial.Spec.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
import {expect as expect} from 'chai';
import 'es6-shim';
import Main from './../client/static/es6/main.js';
import t from './../client/static/es6/module.js';

describe('Initial test', () => {
  it('should pass', () => {
    expect(1+1).to.be.equal(2);
  });

  it('should return test str', () => {
    var main = new Main('from test');
    expect(main.testing()).to.be.equal('test str');
  });

  it('should execute from module', () => {
    expect(t()).to.be.equal('testing');
  });
});
