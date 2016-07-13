
import App from '../src/App';
import State from '../src/State';
import AddUser from '../src/actions/AddUser';

describe('App', () => {

  let store
    , addUnauthenticatedUser
    , addBriceUser;

  before(() => {
    stubNow();

    store = App.createStore();
    //store.subscribe(() => { console.log(store.getState()); });

    addUnauthenticatedUser = new AddUser;
    addBriceUser = new AddUser('brice');
  });

  after(() => {
    restoreNow();
  });

  it('should add user', () => {
    const state = App.reduce(App.reduce(App.reduce(undefined, addUnauthenticatedUser), addBriceUser), addBriceUser);
    toPlain(state).should.be.deepEqual({
      users: [
        { login: 'Unauthenticated', createdAt: NOW },
        { login: 'brice', createdAt: NOW } ],
      polls: [],
      actions: [
        { createdAt: NOW, login: 'Unauthenticated', type: 'AddUser' },
        { createdAt: NOW, login: 'brice', type: 'AddUser' },
        { createdAt: NOW, login: 'brice', type: 'AddUser' }
      ]
    });
  });

  describe('Store', () => {

    it('should ...', () => {
      store.dispatch((new AddUser).toPlain());
      toPlain(store.getState()).should.be.deepEqual({
        users: [
          { login: 'Unauthenticated', createdAt: NOW }
        ],
        polls: [],
        actions: [
          { type: '@@redux/INIT' },
          { type: 'AddUser', createdAt: 123456789, login: 'Unauthenticated' }
        ]
      });
    });

  });

});
