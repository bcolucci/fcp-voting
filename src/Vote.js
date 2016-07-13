'use strict';

import User from './User';

export default class Vote {

  voter: User;

  constructor(voter?: User = new User) {
    this.voter = voter;
  }

};
