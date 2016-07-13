'use strict';

import I from 'immutable';
import User from '../src/User';
import Poll from '../src/Poll';
import Option from '../src/Option';

describe('Poll', () => {

  it('should have a name and a authenticated creator', () => {
    (() => new Poll).should.throw(Error);
    (() => new Poll('What is your favorite color?')).should.throw(Error);
    (() => new Poll('What is your favorite color?', new User)).should.throw(Error); // unauthenticated
    const poll = new Poll('What is your favorite color?', new User('brice'));
    poll.should.have.property('name', 'What is your favorite color?');
    poll.should.have.property('creator',  new User('brice'));
  });

  it('may have options', () => {
    const poll = new Poll('What is your favorite color?', new User('brice'));
    const redOpt = new Option('Red')
      , blueOpt = new Option('Blue');
    poll.should.have.property('options').and.be.equal(I.List());
    poll.options = poll.options.push(redOpt).push(blueOpt);
    JSON.stringify(poll.options).should.be.equal('[{"label":"Red","votes":[]},{"label":"Blue","votes":[]}]');
  });

});
