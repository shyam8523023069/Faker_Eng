const { occupation } = require('../lib/locales/en');

if (typeof occupation !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("occupation.js", function () {
    describe("occupation()", function () {
        it("returns a random occupation", function () {
            sinon.stub(faker.occupation, 'occupation').returns('{{occupation.tech} {occupation.nontech}}');
            var occupation = faker.occupation.occupation();
  
            assert.equal(occupation, '{{occupation.tech} {{occupation.nontech}}');
            faker.occupation.occupation.restore();
        });
    });
  
    describe("tech()", function () {
        it("returns random tech", function () {
            sinon.stub(faker.occupation, 'tech').returns('Engineer');
            var tech = faker.occupation.tech();
  
            assert.equal(tech, 'Engineer');
            faker.occupation.tech.restore();
        });
    });
  
    describe("nontech()", function () {
      it("returns random occupation nontech", function () {
        sinon.stub(faker., 'nontech').returns('Trader');
            var nontech = faker.occupation.nontech();
  
            assert.equal(nontech, 'Trader');
            faker.occupation.nontech.restore();
        });
    });
});