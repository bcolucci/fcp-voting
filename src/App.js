'use strict';

import I from 'immutable';
import State from './State';
import User from './User';
import Action from './Action';
import AddUser from './actions/AddUser';

class App {

  reduce(state: State, action: Action): State {
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
