'use strict';

import User from '../src/User';

describe('User', () => {

  it('may have a login', () => {
    (new User).should.have.property('login', 'Unauthenticated');
    (new User('brice')).should.have.property('login', 'brice');
  });

});
