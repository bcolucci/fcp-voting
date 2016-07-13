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
        { login: 'Unauthenticated', createdAt: NOW },
        { login: 'brice', createdAt: NOW } ],
      polls: [],
      actions: [
        { createdAt: NOW, login: 'Unauthenticated', name: 'AddUser' },
        { createdAt: NOW, login: 'brice', name: 'AddUser' },
        { createdAt: NOW, login: 'brice', name: 'AddUser' }
      ]
    });
  });

});
