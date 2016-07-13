'use strict';

import Action from '../Action';
import User from '../User';

export default class AddUser extends Action {

  login: string;

  constructor(login?: string = User.UNAUTHENTICATED()) {
    super();
    this.login = login;
  }

};
