
import I from 'immutable';

export default class Poll {

  name: string;
  options: I.Set<string>;

  constructor(name: string, options?: I.Set<string> = I.Set()) {
    this.name = name;
    this.options = options;
  }

};
