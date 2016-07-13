'use strict';

import User from '../src/User';
import Vote from '../src/Vote';

describe('Vote', () => {

  before(() => {
    stubNow();
  });

  after(() => {
    restoreNow();
  });

  it('should have a voter', () => {
    (new Vote(new User)).should.have.property('voter', new User);
    (new Vote(new User('brice'))).should.have.property('voter', new User('brice'));
  });

});
