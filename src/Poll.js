
import I from 'immutable';
import User from './User';
import Option from './Option';

export default class Poll {

  name: string;
  creator: User;
  options: I.List<Option>;

  constructor(name: string, creator: User, options?: I.List<Option> = I.List()) {
    this.name = name;
    if (User.UNAUTHENTICATED() === creator.login)
      throw new Error('Unauthenticated user can not create a Poll.');
    this.creator = creator;
    this.options = options;
  }

  optionsVotes(): I.Map {
    return this.options.reduce((map, option) => {
      return map.set(option.label, option.countVotes());
    }, I.Map());
  }

};
