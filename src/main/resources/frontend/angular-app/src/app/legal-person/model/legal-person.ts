export class LegalPerson {
  login: number;
  address: string;
  phoneNumber?: number;
  nip: number;
  companyName: string;
  companyType?: string;

  buildNewObject(): LegalPerson {
    return new LegalPerson();
  }
}
