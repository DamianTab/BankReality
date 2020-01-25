INSERT INTO "CLIENT" (LOGIN ,ADDRESS, PHONE_NUMBER)
VALUES (CLIENT_SEQUENCE.nextval, 'ul. Wicherkiewicz 82', 111222333);


INSERT INTO "NATURAL_PERSON" (LOGIN ,NAME, SURNAME, ID_CARD)
VALUES (CLIENT_SEQUENCE.currval, 'Marian', 'Kowalski', 123456789);

INSERT INTO "ACCOUNT" (ACCOUNT_NUMBER ,BALANCE, FEES_AMOUNT, CREATION_DATE, LOGIN)
VALUES(ACCOUNT_SEQUENCE.nextval, 680000.30, 1, CURRENT_DATE, CLIENT_SEQUENCE.currval);


INSERT INTO "CLIENT" (LOGIN, ADDRESS, PHONE_NUMBER)
VALUES (CLIENT_SEQUENCE.nextval,'ul. Budzyńska 18', 555666777);

INSERT INTO "LEGAL_PERSON" (LOGIN ,NIP, COMPANY_NAME, COMPANY_TYPE)
VALUES(CLIENT_SEQUENCE.currval,111222333444555666, 'Vertex sp. z.o.o.','Spółka Kapitałowa');

INSERT INTO "ACCOUNT" (ACCOUNT_NUMBER ,BALANCE, FEES_AMOUNT, CREATION_DATE, LOGIN)
VALUES(ACCOUNT_SEQUENCE.nextval, 45000.12, 2, CURRENT_DATE, CLIENT_SEQUENCE.currval);

INSERT INTO "CREDIT" (ID,LOAN_AMOUNT, INTEREST_RATE, LOAN_TIME, EMI, ACCOUNT_NUMBER, LOGIN)
VALUES( CREDIT_SEQUENCE.nextval, 50000, 5, 24, 1250, ACCOUNT_SEQUENCE.currval, CLIENT_SEQUENCE.currval);

INSERT INTO "INVESTMENT" (ID, DEPOSIT_AMOUNT, EXPIRATION_DATE, AER, ACCOUNT_NUMBER)
VALUES( INVESTMENT_SEQUENCE.nextval, 25000, CURRENT_DATE , 3, ACCOUNT_SEQUENCE.currval);

INSERT INTO "BANK_TRANSFER"
    (ID, TRANSFER_AMOUNT, TRANSFER_DATE, ACCOUNT_NUMBER_SENDER, ACCOUNT_NUMBER_RECEIVER)
VALUES(BANK_TRANSFER_SEQUENCE.nextval, 12500, CURRENT_DATE, 2000000, 2000010);
;
