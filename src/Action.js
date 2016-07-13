
class Action {

  type: string;
  createdAt: number;

  constructor() {
    this.type = this.constructor.name;
    this.createdAt = Date.now();
  }

  toPlain(): any {
    return JSON.parse(JSON.stringify(this));
  }

};

export default Action;
