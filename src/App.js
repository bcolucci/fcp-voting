'use strict';

import I from 'immutable';
import User from './User';
import Action from './Action';
import AddUser from './actions/AddUser';

const State = I.Record({
  users: I.List(),
  actions: I.List()
});

State.prototype.hasUser = function (login) {
  return 1 === this.users.filter(user => login === user.login).count();
};

class App {

  reduce(state?: State = new State, action: Action): State {
    let newState = state.set('actions', state.actions.push(action));
    if ('AddUser' === action.name)
      return this.addUser(newState, action);
    return newState;
  }

  addUser(state: State, action: AddUser) {
    if (state.hasUser(action.login))
      return state;
    return state.set('users', state.users.push(new User(action.login)));
  }

};

export default App;
