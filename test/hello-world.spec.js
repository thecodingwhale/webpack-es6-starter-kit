/* global describe, it, before */

import chai from 'chai';
import { HelloWorld } from '../src/index.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my HelloWorld', () => {
  before(() => {
    lib = new HelloWorld();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Hello World');
    });
  });
});
