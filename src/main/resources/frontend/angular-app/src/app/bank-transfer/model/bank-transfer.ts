import { Account } from '../../account/model/account';
export class BankTransfer implements DbEntity<BankTransfer>{

  id: number;
  transferAmount: number;
  transferDate: Date;
  sender: Account;
  receiver: Account;
  senderId: number;
  receiverId: number;


  buildNewObject(): BankTransfer {
    return new BankTransfer();
  }
  setId(num: number) {
    this.id = num;
  }

}
