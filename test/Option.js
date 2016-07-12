
import I from 'immutable';
import User from '../src/User';
import Vote from '../src/Vote';
import Option from '../src/Option';

describe('Option', () => {

  it('should have a label', () => {
    (() => new Option).should.throw(Error);
    (new Option('Select a movie')).should.have.property('label', 'Select a movie');
  });

  it('may have votes', () => {
    const option = new Option('Select a movie');
    option.should.have.property('votes', I.List());
    option.votes = option.votes.push(new Vote).push(new Vote(new User('brice')));
    JSON.stringify(option.votes).should.be.equal('[{"voter":{"login":"Unauthenticated"}},{"voter":{"login":"brice"}}]');
  });

});
