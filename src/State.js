'use strict';

import I from 'immutable';

const State = I.Record({
  users: I.List(),
  actions: I.List()
});

State.prototype.hasUser = function (login: string): boolean {
  return 1 === this.users.filter(user => login === user.login).count();
};

export default State;
