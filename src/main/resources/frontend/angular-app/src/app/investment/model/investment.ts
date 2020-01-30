import { Account } from '../../account/model/account';
export class Investment implements DbEntity<Investment>{

  id: number;
  depositAmount: number;
  expirationDate: Date;
  aer: number;
  account: Account;
  accountId: number;



  buildNewObject(): Investment {
    return new Investment();
  }
  setId(num: number) {
    this.id = num;
  }

}
