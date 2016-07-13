'use strict';

import App from '../src/App';
import State from '../src/State';
import AddUser from '../src/actions/AddUser';

describe('App', () => {

  let app
    , initialState
    , addUnauthenticatedUser
    , addBriceUser;

  before(() => {
    stubNow();
    app = new App;
    initialState = new State;
    addUnauthenticatedUser = new AddUser;
    addBriceUser = new AddUser('brice');
  });

  after(() => {
    restoreNow();
  });

  it('should add user', () => {
    const state = app.reduce(app.reduce(app.reduce(initialState, addUnauthenticatedUser), addBriceUser), addBriceUser);
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
