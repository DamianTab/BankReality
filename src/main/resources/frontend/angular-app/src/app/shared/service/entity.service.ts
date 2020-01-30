import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Account } from '../../account/model/account';
import { Credit } from '../../credit/model/credit';
import { Client } from '../class/client/client';
import { BankTransfer } from '../../bank-transfer/model/bank-transfer';
import { Investment } from '../../investment/model/investment';

@Injectable({
  providedIn: 'root'
})
export class EntityService<T extends DbEntity<T>> {

  URL: string;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.URL).pipe(
      tap(x => {
        x.forEach(y => {
          this.fromRow(y);
        });
      })
    );
  }

  public create(entity: T) {
    entity = this.toRow(entity);
    return this.http.post<number>(this.URL, entity);
  }

  public edit(entity: T) {
    entity = this.toRow(entity);
    return this.http.put<T>(this.URL + '/' + this.receiveId(entity), entity);
  }

  public delete(entity: T) {
    entity = this.toRow(entity);
    return this.http.delete<T>(this.URL + '/' + this.receiveId(entity));
  }

  private receiveId(entity: T) {
    let identifier;
    if (entity['id']) {
      identifier = entity['id'];
    } else if (entity['accountNumber']) {
      identifier = entity['accountNumber'];
    } else if (entity['login']) {
      identifier = entity['login']
    }
    return identifier;
  }

  private fromRow(entity: T) {
    // Account
    if (entity['accountNumber']) {
      entity['clientId'] = entity['client']['login'];
    } else if (entity['loanAmount']) {
      // Credit
      entity['clientId'] = entity['client']['login'];
      entity['accountId'] = entity['account']['accountNumber'];
    } else if (entity['transferAmount']) {
      // Bank Transfer
      entity['senderId'] = entity['sender']['accountNumber'];
      entity['receiverId'] = entity['receiver']['accountNumber'];
    } else if (entity['depositAmount']) {
      // Investment
      entity['accountId'] = entity['account']['accountNumber'];
    }
  }

  private toRow(entity: T) {
    // Account
    if (entity instanceof Account) {
      entity.client = new Client();
      entity.client.login = entity.clientId;
    } else if (entity instanceof Credit) {
      // Credit
      entity.client = new Client();
      entity.client.login = entity.clientId;
      entity.account = new Account();
      entity.account.accountNumber = entity.accountId;
    } else if (entity instanceof BankTransfer) {
      // Bank Transfer
      entity.sender = new Account();
      entity.sender.accountNumber = entity.senderId;
      entity.receiver = new Account();
      entity.receiver.accountNumber = entity.receiverId;
    } else if (entity instanceof Investment) {
      entity.account = new Account();
      entity.account.accountNumber = entity.accountId;
    }
    return entity;
  }



}
