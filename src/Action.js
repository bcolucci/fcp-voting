'use strict';

class Action {

  name: string;
  createdAt: number;

  constructor() {
    this.name = this.constructor.name;
    this.createdAt = Date.now();
  }

};

export default Action;
