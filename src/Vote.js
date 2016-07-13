'use strict';

import User from './User';

export default class Vote {

  voter: User;

  constructor(voter: User) {
    this.voter = voter;
  }

};
