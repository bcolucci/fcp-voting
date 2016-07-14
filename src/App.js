
import I from 'immutable';
import { createStore } from 'redux';

import State from './State';
import User from './User';
import Action from './Action';
import AddUser from './actions/AddUser';

// TODO actions are of type 'any' because of redux (cannot fix a type)

const reduce = (state?: State = new State, action: any): State => {
  let newState = state.set('actions', state.actions.push(action));
  if ('AddUser' === action.type)
    return addUser(newState, action);
  return newState;
};

const addUser = (state: State, action: any) => {
  if (state.hasUser(action.login))
    return state;
  return state.set('users', state.users.push(new User(action.login)));
};

export default {
  reduce,
  createStore: () => createStore(reduce)
};
