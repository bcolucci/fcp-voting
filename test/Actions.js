
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
    (new AddUser).should.have.property('type', 'AddUser');
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
      const poll = new CreatePoll(title, 'brice');
      poll.should.have.property('type', 'CreatePoll');
      toPlain(poll).should.be.deepEqual({
        name: title,
        createdAt: NOW,
        creator: 'brice',
        options: [],
        type: 'CreatePoll'
      });
    });

    it('with options', () => {
      const options = [ 'Red', 'Green', 'Blue' ];
      toPlain(new CreatePoll(title, 'brice', options)).should.be.deepEqual({
        name: title,
        createdAt: NOW,
        creator: 'brice',
        options: options,
        type: 'CreatePoll'
      });
    });

  });

});
