'use strict';

import AddUser from '../src/actions/AddUser';
import CreatePoll from '../src/actions/CreatePoll';

describe('Actions', () => {

  before(() => {
    stubNow();
  });

  after(() => {
    restoreNow();
  });

  it('AddUser', () => {
    (new AddUser).should.have.property('login', 'Unauthenticated');
    (new AddUser('brice')).should.have.property('login', 'brice');
  });

  describe('CreatePoll', () => {

    const title = 'What is your favorite color?';

    it('error', () => {
      ((): CreatePoll => new CreatePoll).should.throw(Error);
      ((): CreatePoll => new CreatePoll(title)).should.throw(Error);
      ((): CreatePoll => new CreatePoll(title, (new User).name)).should.throw(Error); // unauthenticated
    })

    it('without options', () => {
      clone(new CreatePoll(title, 'brice')).should.be.deepEqual({
        name: title,
        createdAt: NOW,
        creator: 'brice',
        options: []
      });
    });

    it('with options', () => {
      const options = [ 'Red', 'Green', 'Blue' ];
      clone(new CreatePoll(title, 'brice', options)).should.be.deepEqual({
        name: title,
        createdAt: NOW,
        creator: 'brice',
        options: options
      });
    });

  });

});
