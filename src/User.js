
export default class User {

  login: string;
  createdAt: number;

  constructor(login?: string = User.UNAUTHENTICATED()) {
    this.login = login;
    this.createdAt = Date.now();
  }

  static UNAUTHENTICATED(): string {
    return 'Unauthenticated';
  };

};
