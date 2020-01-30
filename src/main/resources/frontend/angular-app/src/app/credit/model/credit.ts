import { Client } from '../../shared/class/client/client';
import { Account } from '../../account/model/account';
export class Credit implements DbEntity<Credit>{

  id: number;
  loanAmount: number;
  interestRate: number;
  loanTime: number;
  emi: number;
  client: Client;
  account: Account;
  clientId: number;
  accountId: number;


  buildNewObject(): Credit {
    return new Credit();
  }

  setId(num: number) {
    this.id = num;
  }

}
