export class NaturalPerson implements DbEntity<NaturalPerson>{
  login: number;
  address: string;
  phoneNumber?: number;
  name: string;
  surname: string;
  idCard: number;

  getNewObject(): NaturalPerson {
    this.login = undefined;
    this.address = undefined;
    this.phoneNumber = undefined;
    this.name = undefined;
    this.surname = undefined;
    this.idCard = undefined;
    return this;
  }
}
