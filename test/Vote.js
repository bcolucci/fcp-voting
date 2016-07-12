
import User from '../src/User';
import Vote from '../src/Vote';

describe('Vote', () => {

  it('may have a voter', () => {
    (new Vote).should.have.property('voter', new User('Unauthenticated'));
    (new Vote(new User('brice'))).should.have.property('voter', new User('brice'));
  });

});
