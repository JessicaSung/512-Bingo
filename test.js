'use strict';

var should = require('chai').should(),
  titleize = require('../titleize.js');

describe('Titleize', function () {
 it('should capitalize initial letter of each word in input', function () {
   titleize('the highball').should.equal('The Highball');
 });
 it('should properly case mixed case strings', function () {
   titleize('Mr pOOpertin').should.equal('Mr. Poopertin');
  });