import { Client } from '../../shared/class/client/client';
export class Account implements DbEntity<Account>{
  accountNumber: number;
  balance: number;
  feesAmount: number;
  creationDate: Date;
  clientId: number;
  client?: Client;

  buildNewObject(): Account {
    return new Account();
  }

  toRow() {
    const client = new Client();
    client.login = this.clientId;
  }
  fromRow() {
    this.clientId = this.client.login;
  }
}
