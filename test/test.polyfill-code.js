/*global describe, it, beforeEach, afterEach*/
/*jshint expr:true*/

var code = require('../' + (process.env.AUTOPOLIFILLER_COVERAGE ? 'lib-cov' : 'lib') + '/polyfill-code'),
    expect = require('chai').expect;

describe('polyfill-code', function() {

    it('returns polyfill code', function () {
        expect(code('Object.keys')).to.match(/Object\.keys/);
    });

    it('throws an error if required polyfill is not defined', function () {
        expect(function () {
            code('Object.pewpewOlolo');
        }).to.throw(Error, /Unknown feature: Object.pewpewOlolo/);
    });

    describe('.addSource', function() {

        it('defines new polyfills code', function () {
            var polyfillCode = '__MyPolyfill = function () {}';

            code.addSource({
                '__MyPolyfill': polyfillCode
            });

            expect(code('__MyPolyfill')).to.eql(polyfillCode);

        });

    });

});
