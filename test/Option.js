
import I from 'immutable';
import User from '../src/User';
import Vote from '../src/Vote';
import Option from '../src/Option';

describe('Option', () => {

  before(() => {
    stubNow();
  });

  after(() => {
    restoreNow();
  });

  it('should have a label', () => {
    ((): Option => new Option).should.throw(Error);
    (new Option('Select a movie')).should.have.property('label', 'Select a movie');
  });

  it('may have votes', () => {
    const option = new Option('Select a movie');
    option.should.have.property('votes', I.List());
    option.votes = option.votes.push(new Vote(new User)).push(new Vote(new User('brice')));
    toPlain(option.votes).should.be.deepEqual([
      { voter: { login: 'Unauthenticated', createdAt: NOW } },
      { voter: { login: 'brice', createdAt: NOW } }
    ]);
    option.countVotes().should.be.equal(2);
  });

});
