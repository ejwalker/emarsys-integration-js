'use strict';

var MessageHandler = require('./refresh');

describe('Refresh Handler', function() {

  var fakeWindow;
  var messageHandler;

  beforeEach(function() {
    fakeWindow = require('../mocks/fake_window').create();
    messageHandler = new MessageHandler(fakeWindow);
  });

  it('should listen to messages with event "refresh"', function() {
    expect(messageHandler.MESSAGE_EVENT).to.be.eql('refresh');
  });

  it('should call location.reload when calling handleMessage', function() {
    messageHandler.handleMessage();
    expect(fakeWindow.location.reload).to.have.been.called;
  });

});
