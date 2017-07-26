var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var http = require('http');

//class under test
const ExampleController = require('../../src/example/exampleController');

//dependency
var exampleService = {};

describe('ExampleController', function () {
    beforeEach(function () {

        //turns out we need to re-require the hearingService beforeEach test; as restore() isn't behaving as expected
        exampleService = require('../../src/example/exampleService.js');

        //replace the hearingService with a mock; this will behave exactly as the original until we mock the methods
        //note: this is a bit mental; it's mocking out the service which the controller will later 'require' 
        exampleService = sinon.stub(exampleService, 'demoService');

    });

    afterEach(function () {

        //remember to reset the service back to a proper object
        exampleService.restore();
    });

    it('should call the demo service', sinon.test(function () {

        //Create request & response object
        var req = {};
        var res = {};

        //execute the method under test
        ExampleController.demoEndpoint(req, res);

        //check it executed as expected
        expect(exampleService.calledOnce).to.be.true;
        expect(exampleService.calledWith(sinon.match.func, sinon.match.func)).to.be.true;

    }));

    it('should define the correct success handling behaviour in the callback', sinon.test(function() {

        //Define the expected response
        var expectedText = "Hello";

        //configure the stub so that the error callback is executed
        exampleService.callsArgWith(1, expectedText);

        //Create request & response object
        var req = {}
        var res = {};

        //stub out the request methods
        res.status = sinon.stub().returns(res);
        res.send = sinon.stub();
        res.setHeader = sinon.stub();

        //execute the method under test
        ExampleController.demoEndpoint(req, res);

        //check it executed as expected
        expect(exampleService.calledOnce).to.be.true;
        expect(exampleService.calledWith(sinon.match.func, sinon.match.func)).to.be.true;

        //verify the status and data was set correctly on the response
        expect(res.status.calledWith(200)).to.be.true;
        expect(res.send.calledWith(expectedText)).to.be.true;

    }));
});