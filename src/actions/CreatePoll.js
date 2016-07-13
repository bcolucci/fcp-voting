
import Action from '../Action';
import User from '../User';

export default class CreatePoll extends Action {

  name: string;
  creator: string;
  options: Array<string>;

  constructor(name: string, creator: string, options?: Array<string> = []) {
    super();
    this.name = name;
    this.creator = creator;
    this.options = options;
  }

};
