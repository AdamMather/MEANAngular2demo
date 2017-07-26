var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

const ExampleService = require('../../src/example/exampleService.js');

describe('ExampleService', function () {

    beforeEach(function () {

    });

    afterEach(function () {

    });

    it('return the correct example result', sinon.test(function () {

        var expectedSuccess = true;
        var expectedData = "Hello";

        var expectedJSON = { success: expectedSuccess, data: expectedData };

        //stub the success and error handlers
        var onErr = sinon.stub();
        var onSuccess = sinon.stub();
        
        //perform the test
        ExampleService.demoService(onErr, onSuccess);
        
        //check it executed as expected
        expect(onSuccess.called).to.be.true;
        expect(onSuccess.calledWith(expectedJSON)).to.be.true;
        expect(onErr.called).to.be.false;

    }));
})