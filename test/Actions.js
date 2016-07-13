'use strict';

import AddUser from '../src/actions/AddUser';

describe('Actions', () => {

  it('AddUser', () => {
    (new AddUser).should.have.property('login', 'Unauthenticated');
    (new AddUser('brice')).should.have.property('login', 'brice');
  });

});
