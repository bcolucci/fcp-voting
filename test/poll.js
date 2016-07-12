
import I from 'immutable';
import sinon from 'sinon';
import Poll from '../src/poll';

//TODO error cases

describe('Voting Pool', () => {

  it('should have a name', () => {
    (new Poll('my poll')).should.have.property('name').and.be.String();
  });

  it('may have options', () => {
    let poll = new Poll('my poll');
    poll.should.have.property('options').and.be.deepEqual(I.Set());
    poll.options = poll.options.add('Star Wars');
    I.is(poll.options, I.Set([ 'Star Wars' ])).should.be.ok();
  });

});
