'use strict';

import App from '../src/App';
import AddUser from '../src/actions/AddUser';

describe('App', () => {

  before(() => {
    stubNow();
  });

  after(() => {
    restoreNow();
  });

  it('should add user', () => {
    const app = new App;
    const addUnauthenticated = new AddUser;
    const addBrice = new AddUser('brice');
    const state = app.reduce(app.reduce(app.reduce(undefined, addUnauthenticated), addBrice), addBrice);
    clone(state).should.be.deepEqual({
      users: [
        { login: 'Unauthenticated', createdAt: 123456789 },
        { login: 'brice', createdAt: 123456789 } ],
      actions: [
        { createdAt: 123456789, login: 'Unauthenticated', name: 'AddUser' },
        { createdAt: 123456789, login: 'brice', name: 'AddUser' },
        { createdAt: 123456789, login: 'brice', name: 'AddUser' }
      ]
    });
  });

});
