export class NaturalPerson implements DbEntity<NaturalPerson>{
  login: number;
  address: string;
  phoneNumber?: number;
  name: string;
  surname: string;
  idCard: number;

  buildNewObject(): NaturalPerson {
    return new NaturalPerson();
  }
}
