
import User from './User';

const ANONYMOUS_USER = new User;

export default class Vote {

  voter: User;

  constructor(voter?: User = ANONYMOUS_USER) {
    this.voter = voter;
  }

};
