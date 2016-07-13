
import I from 'immutable';
import Vote from './Vote';

export default class Option {

  label: string;
  votes: I.List<Vote>;

  constructor(label: string, votes?: I.List<Vote> = I.List()) {
    this.label = label;
    this.votes = votes;
  }

  countVotes(): number {
    return this.votes.count();
  }

};
