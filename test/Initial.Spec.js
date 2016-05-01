/*
 * Initial.Spec.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
import {
  expect as expect
} from 'chai';
import jsdom from 'mocha-jsdom';
import {
  Main
} from './../client/static/es6/main.js';
import t from './../client/static/es6/module.js';

describe('Initial test', () => {
  jsdom();

  it('should pass', () => {
    expect(1 + 1).to.be.equal(2);
  });

  it('should return test str', () => {
    document.body.appendChild(document.createElement('my-app'));
    var main = new Main();
    expect(main.testing()).to.be.equal('test str');
    expect(main.name).to.be.equal('Sushil');
  });

  it('should execute from module', () => {
    expect(t()).to.be.equal('testing');
  });
});
