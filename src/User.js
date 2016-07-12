
export default class User {

  login: string;

  constructor(login?: string = User.UNAUTHENTICATED()) {
    this.login = login;
  }

  static UNAUTHENTICATED(): string {
    return 'Unauthenticated';
  };

}
